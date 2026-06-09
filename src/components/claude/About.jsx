import { ABOUT_METRICS } from "../../data/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visual}>
            {ABOUT_METRICS.map((m) => (
              <div key={m.label} className={styles.metric}>
                <div className={styles.metricIcon}>{m.icon}</div>
                <div>
                  <p className={styles.metricLabel}>{m.label}</p>
                  <p className={styles.metricValue}>{m.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.text}>
            <p className={styles.tag}>Sobre nosotros</p>
            <h2 className={styles.heading}>
              Somos el equipo que odia perder tiempo en procesos repetitivos
            </h2>
            <p>
              NexaFlow nació de la frustración real de sus fundadores:
              demasiadas horas de trabajo manual en tareas que una máquina puede
              hacer mejor y más rápido.
            </p>
            <p>
              Construimos una plataforma de automatización diseñada para
              empresas latinoamericanas: simple de configurar, poderosa en
              escala, y con soporte en español todo el tiempo.
            </p>
            <p>
              Hoy, más de 2.400 equipos en 12 países confían en NexaFlow para
              automatizar ventas, operaciones, atención al cliente y mucho más.
            </p>
            <div className={styles.cta}>
              <a href="#contact" className={styles.btn}>
                Conocer al equipo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

