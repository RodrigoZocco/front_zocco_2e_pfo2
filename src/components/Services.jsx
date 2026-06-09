import { SERVICES } from '../data/content'
import styles from './Services.module.css'

const iconColorMap = {
  purple: styles.iconPurple,
  green: styles.iconGreen,
  amber: styles.iconAmber,
  pink: styles.iconPink,
  blue: styles.iconBlue,
  red: styles.iconRed,
}

const tagColorMap = {
  purple: styles.tagPurple,
  green: styles.tagGreen,
  amber: styles.tagAmber,
}

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Servicios</p>
          <h2 className={styles.heading}>
            Todo lo que necesitás para escalar sin complicaciones
          </h2>
          <p className={styles.desc}>
            Seis soluciones que se integran entre sí y con tus herramientas existentes.
            Empezá con una, sumá las demás cuando las necesités.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={`${styles.icon} ${iconColorMap[s.iconColor]}`}>
                {s.icon}
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={`${styles.cardTag} ${tagColorMap[s.tagColor]}`}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
