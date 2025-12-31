import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import Experience from './components/Experience'
import UI from './components/UI'

function LoadingScreen({ opacity }) {
    const [msg, setMsg] = useState('INITIALIZING GRAVITY')

    useEffect(() => {
        const msgs = ['INITIALIZING GRAVITY', 'LOADING ASSETS', 'WARPING SPACE_TIME', 'ENGAGING HORIZON']
        let i = 0
        const interval = setInterval(() => {
            i = (i + 1) % msgs.length
            setMsg(msgs[i])
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: '#000', zIndex: 100, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', color: 'white',
            opacity: opacity, transition: 'opacity 1s ease-out', pointerEvents: 'none'
        }}>
            <div className="loader-container">
                <div className="black-hole-loader"></div>
                <div className="accretion-disk"></div>
            </div>

            <p className="gradient-loader-text" style={{ marginTop: '40px', fontFamily: "'Share Tech Mono', monospace" }}>
                {msg}
            </p>
        </div>
    )
}

function App() {
    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => setLoading(false), 1000)
        }, 10000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>

            {loading && <LoadingScreen opacity={fadeOut ? 0 : 1} />}

            <video
                autoPlay loop muted playsInline crossOrigin="anonymous"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.8 }}
            >
                <source src="/blackhole.mp4" type="video/mp4" />
            </video>

            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                <Canvas
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                    dpr={[1, 2]}
                >
                    <Suspense fallback={null}>
                        <Experience />
                    </Suspense>
                </Canvas>
            </div>

            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }}>
                <UI />
            </div>

        </div>
    )
}

export default App
