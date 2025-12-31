import './UI.css'
import { FaDiscord, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'

function Socials() {
    return (
        <div className="social-container" style={{ pointerEvents: 'auto' }}>
            <a href="#" className="social-btn"><FaDiscord /></a>
            <a href="#" className="social-btn"><FaYoutube /></a>
            <a href="#" className="social-btn"><FaInstagram /></a>
            <a href="#" className="social-btn"><FaTiktok /></a>
        </div>
    )
}

export default function UI() {
    return (
        <div className="ui-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

            {/* Scanline Overlay */}
            <div className="scanlines"></div>

            {/* Header */}
            <header className="ui-header" style={{ position: 'absolute', top: '2rem', left: 0, width: '100%', justifyContent: 'center' }}>
                <h1 className="logo" style={{
                    fontSize: '1.2rem',
                    letterSpacing: '0.5rem',
                    opacity: 0.9,
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: '0 0 10px rgba(255, 69, 0, 0.5)' // Orange Glow
                }}>
                    Rayan.is-a.dev
                </h1>
            </header>

            {/* Hero Section */}
            <main className="ui-main" style={{ pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className="hero-title insane-text" style={{
                    fontSize: '5vw',
                    lineHeight: '1.1',
                    marginBottom: '1rem',
                }}>
                    UNDER <br />
                    <span style={{
                        fontSize: '1.2em',
                        color: 'transparent',
                        WebkitTextStroke: '2px #ff4500',
                        textShadow: '0 0 30px rgba(255, 69, 0, 0.6)'
                    }}>DEVELOPMENT</span>
                </h2>

                <div style={{
                    margin: '2rem auto',
                    maxWidth: '600px',
                    fontSize: '0.9rem',
                    opacity: 0.9,
                    fontFamily: "'Share Tech Mono', monospace",
                    borderTop: '1px solid rgba(255, 69, 0, 0.5)', // Orange Border
                    borderBottom: '1px solid rgba(255, 69, 0, 0.5)', // Orange Border
                    padding: '10px 20px',
                    letterSpacing: '2px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(2px)',
                    textShadow: '0 0 5px rgba(255, 69, 0, 0.8)',
                    boxShadow: '0 0 20px rgba(255, 69, 0, 0.2)'
                }}>
          // SYSTEM UPGRADE IN PROGRESS //
                </div>
            </main>

            {/* Footer / Status */}
            <footer className="ui-footer" style={{ position: 'absolute', bottom: '2rem', left: 0, width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                <Socials />

                <div style={{ marginBottom: '0.5rem', fontSize: '0.7rem', opacity: 0.6, letterSpacing: '2px', fontWeight: 'bold', color: '#ff8c00' }}>
                    &copy; BMR ALL RIGHTS RESERVED
                </div>
                <div style={{
                    fontSize: '0.8rem', letterSpacing: '0.2rem', textTransform: 'uppercase', fontFamily: "'Orbitron', sans-serif"
                }}>
                    Status: <span style={{ color: '#ff4500', textShadow: '0 0 10px #ff4500', animation: 'pulse 2s infinite' }}>ONLINE</span>
                </div>
            </footer>
        </div>
    )
}
