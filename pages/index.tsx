import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { getTopTracks, SpotifyTrack } from '../src/lib/spotify'

interface Props {
  tracks: SpotifyTrack[]
}

const SLIDER_ITEMS = [
  { icon: '🔥', label: 'Overwatch 2' },
  { icon: '⚔️', label: 'Super Smash Bros' },
  { icon: '⛏️', label: 'Minecraft' },
  { icon: '👹', label: 'Diablo IV' },
  { icon: '🦋', label: 'Hollow Knight: Silksong' },
  { icon: '🏊', label: 'Swimming' },
  { icon: '💻', label: 'Coding' },
  { icon: '🐱', label: 'Warriors Cats' },
  { icon: '🔴', label: 'Pokémon (Litten 🔥)' },
  { icon: '🤖', label: 'AI / ML' },
  { icon: '🚀', label: 'Aerospace' },
  { icon: '🪞', label: 'Smart Mirror' },
  { icon: '🎮', label: 'ESPORTS' },
  { icon: '🌌', label: 'Stargazing' },
]

const PROJECTS = [
  {
    name: 'Magic Mirror',
    desc: 'A smart mirror with microphone, speech capabilities, and a locally running AI model.',
    tags: ['Python', 'AI', 'Hardware'],
    url: 'https://github.com/Fire-StarPlayz',
  },
  {
    name: 'Trading Alerts Discord Bot',
    desc: 'A Discord bot that fires automated trading alerts and notifications.',
    tags: ['Python', 'Discord API', 'Finance'],
    url: 'https://github.com/Fire-StarPlayz/Trading-Alerts-Discord-Bot',
  },
  {
    name: 'Ball Simulation (Flask)',
    desc: 'A physics-based ball collision simulation built with Flask and HTML5 Canvas.',
    tags: ['Python', 'Flask', 'HTML5'],
    url: 'https://github.com/Fire-StarPlayz/ball-simulation-flask',
  },
  {
    name: 'CodeQuest Solutions',
    desc: 'My solutions to Lockheed Martin CodeQuest competitions — placed 7th overall in 2025.',
    tags: ['Python', 'Algorithms', 'Competitive'],
    url: 'https://github.com/Fire-StarPlayz/CodeQuest',
  },
  {
    name: 'Wind Tunnel',
    desc: 'Researched, designed & built a wind tunnel to measure velocity, pressure, and aerodynamic drag.',
    tags: ['Aerospace', 'Physics', '3D Print'],
    url: 'https://drive.google.com/drive/folders/1BwtQBh1bE62mFZ3X4T4rnxOSgw71EjsA?usp=sharing',
  },
  {
    name: 'Wheel Defense Base',
    desc: 'Designed, modeled, constructed, and tested a 3D-printed wheel base with multiple defense mechanisms.',
    tags: ['3D Print', 'Design', 'Engineering'],
    url: 'https://github.com/Fire-StarPlayz',
  },
]

const Home: NextPage<Props> = ({ tracks }) => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  // Fire particles
  useEffect(() => {
    const container = document.getElementById('particles')
    if (!container) return
    const interval = setInterval(() => {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + '%'
      const duration = 1.5 + Math.random() * 2
      p.style.animationDuration = duration + 's'
      p.style.animationDelay = Math.random() * 0.5 + 's'
      p.style.background = ['#e85d04', '#f48c06', '#ffd60a', '#dc2f02'][Math.floor(Math.random() * 4)]
      p.style.width = 2 + Math.random() * 4 + 'px'
      p.style.height = p.style.width
      container.appendChild(p)
      setTimeout(() => p.remove(), (duration + 0.5) * 1000)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const doubled = [...SLIDER_ITEMS, ...SLIDER_ITEMS]

  return (
    <>
      <Head>
        <title>Parker Bradfield — FireStar</title>
        <meta name="description" content="Parker Bradfield — developer, swimmer, gamer, and FireStar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="particles" className="particles" aria-hidden="true" />

      {/* NAV */}
      <nav>
        <a href="#home" className="nav-logo">🔥 FireStar</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="https://github.com/Fire-StarPlayz" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mascot.png"
          alt="FireStar cat mascot"
          className="hero-mascot"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="wordart-wrapper">
          <span className="star" aria-hidden="true">✦</span>
          <span className="star" aria-hidden="true">✧</span>
          <span className="star" aria-hidden="true">✦</span>
          <span className="star" aria-hidden="true">✧</span>
          <span className="star" aria-hidden="true">✦</span>
          <h1 className="wordart-name">Parker Bradfield</h1>
        </div>
        <p className="hero-tagline">✦ &nbsp; FireStar &nbsp; · &nbsp; Developer &nbsp; · &nbsp; Swimmer &nbsp; · &nbsp; Warrior &nbsp; ✦</p>
        <p className="hero-bio">
          Welcome to my corner of the internet. I'm a <em>coder, swimmer, ESPORTS captain,</em> and
          proud Warriors Cats fan from Winter Park, FL. My alter ego is FireStar — and like him,
          I lead with fire. 🔥
        </p>
        <div className="hero-cta-row">
          <a href="#projects" className="btn">View Projects</a>
          <a href="https://github.com/Fire-StarPlayz" target="_blank" rel="noopener" className="btn btn-ghost">GitHub ↗</a>
        </div>
      </section>

      {/* ACTIVITY SLIDER */}
      <div className="slider-section">
        <p className="slider-label">✦ &nbsp; Things I Like &nbsp; ✦</p>
        <div className="slider-track-wrapper">
          <div className="slider-track" aria-hidden="true">
            {doubled.map((item, i) => (
              <div key={i} className="slider-item">
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <p className="section-title fade-up">Who I Am</p>
          <h2 className="section-heading fade-up">The Warrior Behind the Code</h2>
          <div className="about-grid">
            <div className="about-text fade-up">
              <p>
                I'm a senior at <strong>Winter Park High School</strong> with a STEM concentration, 
                coding background, and a love for building things — from Discord bots to smart mirrors to wind tunnels.
              </p>
              <p>
                I've competed in <strong>Lockheed Martin CodeQuest</strong> every year (9–12), placing
                7th overall in 2025. I'm fluent in Python, JavaScript, HTML, and Lua, and I'm always
                exploring what AI can do next.
              </p>
              <p>
                Outside of code, I swim varsity, captain the ESPORTS team, lead Bible Study, and 
                serve as SGA Executive Ambassador. Oh, and my favorite Pokémon is <strong>Litten</strong> 🔥.
              </p>
            </div>
            <div className="fade-up">
              <ul className="stat-list">
                <li>
                  <span className="stat-label">School</span>
                  <span>Winter Park High School, Class of 2025</span>
                </li>
                <li>
                  <span className="stat-label">Focus</span>
                  <span>STEM Concentration, InspiritAI Certificate</span>
                </li>
                <li>
                  <span className="stat-label">Athletics</span>
                  <span>Swimming Varsity — Districts & Regionals Qualifier, Team Captain</span>
                </li>
                <li>
                  <span className="stat-label">ESPORTS</span>
                  <span>UF NECC — Overwatch (4th overall), Smash Bros Playoffs</span>
                </li>
                <li>
                  <span className="stat-label">Coding</span>
                  <span>Python · JavaScript · HTML · Lua</span>
                </li>
                <li>
                  <span className="stat-label">Alter Ego</span>
                  <span>FireStar, Thunder Clan leader 🔥 (Warriors Cats)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="fire-divider" aria-hidden="true">🔥 ✦ 🔥 ✦ 🔥</div>

          <div className="two-col fade-up">
            <div>
              <p className="section-title">Honors</p>
              <ul className="badge-list" style={{marginTop:'1rem'}}>
                <li>InspiritAI Program Certificate</li>
                <li>STEM Concentration Graduate</li>
                <li>CodeQuest 2025 — 7th Place Overall</li>
                <li>Regionals Swimming Qualifier</li>
                <li>Districts Swimming Qualifier (3x)</li>
              </ul>
            </div>
            <div>
              <p className="section-title">Leadership</p>
              <ul className="badge-list" style={{marginTop:'1rem'}}>
                <li>ESPORTS President (11–12)</li>
                <li>STEM Club President (11)</li>
                <li>SGA Executive Ambassador (12)</li>
                <li>Freshman Mentorship Program (12)</li>
                <li>Bible Study Leader (9–12)</li>
                <li>TrekAI Leader (12)</li>
                <li>International Society (11–12)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{background: 'linear-gradient(to bottom, transparent, rgba(61,26,0,0.15), transparent)'}}>
        <div className="container">
          <p className="section-title fade-up">What I Build</p>
          <h2 className="section-heading fade-up">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card fade-up`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <p className="project-name">{p.name}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div style={{marginTop:'2.5rem', textAlign:'center'}} className="fade-up">
            <a href="https://github.com/Fire-StarPlayz" target="_blank" rel="noopener" className="btn">
              All Repos on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* SPOTIFY */}
      <section id="music">
        <div className="container">
          <p className="section-title fade-up">What I'm Listening To</p>
          <h2 className="section-heading fade-up">Top Tracks</h2>
          <div className="spotify-section fade-up">
            {tracks.length === 0 ? (
              <p style={{color: 'var(--ash)', fontStyle:'italic'}}>
                Add your SPOTIFY_PLAYLIST_ID to .env.local to show your favorite tracks here.
              </p>
            ) : (
              <div className="track-list">
                {tracks.map((track, i) => (
                  <a
                    key={track.id}
                    href={track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-item"
                  >
                    <span className="track-num">{i + 1}</span>
                    {track.albumArt ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={track.albumArt} alt={track.album} className="track-art" />
                    ) : (
                      <div className="track-art-placeholder">🎵</div>
                    )}
                    <div className="track-info">
                      <p className="track-name">{track.name}</p>
                      <p className="track-artist">{track.artist}</p>
                    </div>
                    <span className="track-link">↗</span>
                  </a>
                ))}
              </div>
            )}
            <p className="spotify-note">
              ✦ &nbsp; Powered by Spotify &nbsp;·&nbsp; Hover to pause
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p className="footer-name">🔥 Parker &ldquo;FireStar&rdquo; Bradfield</p>
          <p style={{color:'var(--ash)', fontSize:'0.85rem'}}>Winter Park, FL</p>
          <ul className="footer-links">
            <li>
              <a href="https://github.com/Fire-StarPlayz" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:parkerbradfield9@gmail.com">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Email
              </a>
            </li>
            <li>
              <a href="https://discord.com" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            </li>
          </ul>
          <p className="footer-copy">
            © {new Date().getFullYear()} Parker Bradfield &nbsp;·&nbsp; Made with 🔥 &nbsp;·&nbsp;
            <a href="https://github.com/Fire-StarPlayz/my-website" target="_blank" rel="noopener" style={{color:'inherit', textDecoration:'none'}}> source</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let tracks: SpotifyTrack[] = []
  try {
    tracks = await getTopTracks()
  } catch {
    tracks = []
  }
  return {
    props: { tracks },
    revalidate: 3600,
  }
}

export default Home
