import { FOOTER_LINKS, SOCIAL_LINKS } from "../../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>
            Nexa<span>Flow</span>
          </a>
          <p>
            Automatización inteligente para equipos latinoamericanos. Sin
            código, sin fricciones.
          </p>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialBtn}
                aria-label={s.label}
              >
                {s.symbol}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([col, links]) => (
          <div key={col} className={styles.col}>
            <h4>{col}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>
          © 2025 NexaFlow S.A.S. — Buenos Aires, Argentina. Todos los derechos
          reservados.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>ISO 27001</span>
          <span className={styles.badge}>SOC 2 Type II</span>
          <span className={styles.badge}>GDPR Ready</span>
        </div>
      </div>
    </footer>
  );
}

