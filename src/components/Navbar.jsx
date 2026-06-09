import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/content'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>
          Nexa<span>Flow</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Empezar ahora
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open3 : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Empezar ahora
          </a>
        </div>
      )}
    </header>
  )
}
