import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, Noise, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

function CameraRig() {
    useFrame((state) => {
        // Subtle rumble/shake effect
        const t = state.clock.elapsedTime
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.2 + Math.sin(t * 10) * 0.002, 0.05)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.2 + Math.cos(t * 10) * 0.002, 0.05)
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export default function Experience() {
    return (
        <>
            <CameraRig />

            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#ff4500" />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ffff" />

            {/* Dense Starfields */}
            <Sparkles count={400} scale={15} size={2} speed={0.4} opacity={0.6} color="#ff8c00" /> {/* Orange Sparks */}
            <Sparkles count={300} scale={10} size={1} speed={0.2} opacity={0.8} color="#ffffff" />
            <Sparkles count={100} scale={20} size={5} speed={0.1} opacity={0.4} color="#ff0000" /> {/* Red/Danger Sparks */}

            <EffectComposer disableNormalPass>
                {/* Intense cinematic bloom */}
                <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} intensity={1.2} />
                <Noise opacity={0.15} /> {/* Heavier grain for realism */}
                <ChromaticAberration offset={[0.004, 0.004]} blendFunction={BlendFunction.NORMAL} />
                <Vignette eskil={false} offset={0.1} darkness={0.6} />
            </EffectComposer>
        </>
    )
}
