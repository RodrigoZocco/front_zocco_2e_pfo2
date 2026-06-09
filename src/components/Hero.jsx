import { HERO_STATS } from '../data/content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot} />
        Más de 2.400 equipos ya automatizaron su flujo
      </div>

      <h1 className={styles.heading}>
        Automatiza lo que frenaba<br />
        <span className={styles.gradient}>el crecimiento de tu negocio</span>
      </h1>

      <p className={styles.sub}>
        NexaFlow conecta tus herramientas, elimina tareas manuales y libera a tu equipo
        para hacer lo que realmente importa. Sin código, sin fricciones.
      </p>

      <div className={styles.actions}>
        <a href="#contact" className={styles.btnPrimary}>
          Probarlo gratis →
        </a>
        <a href="#services" className={styles.btnSecondary}>
          Ver cómo funciona
        </a>
      </div>

      <div className={styles.stats}>
        {HERO_STATS.map((s) => (
          <div key={s.num} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
