import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Vertex Shader for the Accretion Disk
const vertexShader = `
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// Fragment Shader for the Accretion Disk
const fragmentShader = `
varying vec2 vUv;
varying vec3 vPos;
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

// Simplex noise function (simplified)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  // Circular gradient
  float dist = length(vPos.xy);
  
  // Noise for dynamic swirling
  float noiseVal = snoise(vec2(dist * 5.0 - uTime * 2.0, atan(vPos.y, vPos.x) * 5.0 + uTime));
  
  // Color mixing
  vec3 color = mix(uColorStart, uColorEnd, noiseVal + 0.5);
  
  // Alpha fade out edges
  float alpha = 1.0 - smoothstep(1.5, 3.5, dist); // Outer fade
  alpha *= smoothstep(1.0, 1.2, dist); // Inner fade
  
  gl_FragColor = vec4(color, alpha * 0.8);
}
`

export default function BlackHole() {
    const diskRef = useRef()

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColorStart: { value: new THREE.Color('#ff4500') }, // Orange-Red
            uColorEnd: { value: new THREE.Color('#ffD700') }    // Gold
        }),
        []
    )

    useFrame((state) => {
        if (diskRef.current) {
            diskRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime()
            diskRef.current.rotation.z += 0.005
        }
    })

    return (
        <group rotation={[Math.PI / 3, 0, 0]}>
            {/* Event Horizon */}
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial color="black" />
            </mesh>

            {/* Accretion Disk */}
            <mesh ref={diskRef} rotation={[-Math.PI / 2, 0, 0]}>
                {/* Ring Geometry: InnerRadius, OuterRadius, ThetaSegments */}
                <ringGeometry args={[1.2, 3.5, 128]} />
                <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                    transparent
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Glow Halo around sphere */}
            <mesh scale={[1.05, 1.05, 1.05]}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshBasicMaterial
                    color="#ff4500"
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    )
}
