import { TESTIMONIALS } from '../data/content'
import styles from './Testimonials.module.css'

const avatarColorMap = {
  purple: styles.avPurple,
  green: styles.avGreen,
  amber: styles.avAmber,
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Testimonios</p>
          <h2 className={styles.heading}>
            Lo que dicen los equipos que ya automatizaron
          </h2>
          <p className={styles.desc}>
            No lo decimos nosotros. Lo dicen los equipos que usan NexaFlow todos los días.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={`${styles.avatar} ${avatarColorMap[t.avatarColor]}`}>
                  {t.initials}
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
