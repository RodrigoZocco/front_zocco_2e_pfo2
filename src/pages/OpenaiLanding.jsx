import "./OpenaiLanding.css";

export default function OpenaiLanding() {
  return (
    <div className="landing">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <span className="logo-dot"></span>
            OpenAI Solutions
          </div>

          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">IA Empresarial de Nueva Generación</span>

            <h1>
              Transforma tu negocio con soluciones impulsadas por Inteligencia
              Artificial
            </h1>

            <p>
              Automatiza procesos, mejora la productividad y acelera el
              crecimiento de tu empresa mediante tecnología avanzada diseñada
              para resultados reales.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="btn-primary">
                Solicitar Demo
              </a>

              <a href="#servicios" className="btn-secondary">
                Ver Servicios
              </a>
            </div>

            <div className="metrics">
              <div className="metric">
                <h3>500+</h3>
                <p>Empresas</p>
              </div>

              <div className="metric">
                <h3>98%</h3>
                <p>Satisfacción</p>
              </div>

              <div className="metric">
                <h3>24/7</h3>
                <p>Soporte</p>
              </div>

              <div className="metric">
                <h3>12M+</h3>
                <p>Automatizaciones</p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"></div>

            <div className="dashboard">
              <div className="dashboard-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="dashboard-body">
                <div className="dashboard-box"></div>
                <div className="dashboard-box"></div>
                <div className="dashboard-box large"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* ABOUT */}
      <section id="nosotros" className="about">
        <div className="container">
          <div className="section-title">
            <span>Sobre Nosotros</span>
            <h2>Impulsamos la innovación mediante IA aplicada</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
                Ayudamos a organizaciones de todos los tamaños a implementar
                soluciones inteligentes que optimizan operaciones, reducen
                costos y generan nuevas oportunidades de crecimiento.
              </p>

              <p>
                Nuestro equipo combina experiencia en desarrollo de software,
                análisis de datos e inteligencia artificial para construir
                productos escalables y orientados a resultados.
              </p>
            </div>

            <div className="achievements">
              <div className="achievement">
                <h3>10+</h3>
                <p>Años de experiencia</p>
              </div>

              <div className="achievement">
                <h3>150+</h3>
                <p>Proyectos entregados</p>
              </div>

              <div className="achievement">
                <h3>35</h3>
                <p>Especialistas</p>
              </div>

              <div className="achievement">
                <h3>20+</h3>
                <p>Países alcanzados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* SERVICES */}
      <section id="servicios" className="services">
        <div className="container">
          <div className="section-title">
            <span>Servicios</span>
            <h2>Soluciones diseñadas para escalar tu negocio</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Automatización Inteligente</h3>
              <p>
                Optimiza tareas repetitivas mediante flujos impulsados por IA.
              </p>
            </div>

            <div className="service-card">
              <h3>Chatbots Empresariales</h3>
              <p>
                Atención al cliente automatizada disponible las 24 horas.
              </p>
            </div>

            <div className="service-card">
              <h3>Análisis Predictivo</h3>
              <p>
                Anticipa tendencias y mejora la toma de decisiones estratégicas.
              </p>
            </div>

            <div className="service-card">
              <h3>Integración de Sistemas</h3>
              <p>
                Conecta herramientas existentes en una plataforma centralizada.
              </p>
            </div>

            <div className="service-card">
              <h3>Generación de Contenido</h3>
              <p>
                Producción acelerada de contenido mediante modelos avanzados.
              </p>
            </div>

            <div className="service-card">
              <h3>Consultoría IA</h3>
              <p>
                Estrategias personalizadas para adopción tecnológica exitosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="testimonials">
        <div className="container">
          <div className="section-title">
            <span>Testimonios</span>
            <h2>Lo que dicen nuestros clientes</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                "Reducimos más del 40% del tiempo operativo gracias a las
                automatizaciones implementadas."
              </p>
              <h4>María González</h4>
              <span>Directora de Operaciones · TechNova</span>
            </div>

            <div className="testimonial">
              <p>
                "La integración fue rápida y el impacto en productividad fue
                inmediato."
              </p>
              <h4>Juan Pérez</h4>
              <span>CEO · Growth Labs</span>
            </div>

            <div className="testimonial">
              <p>
                "El soporte y la calidad técnica superaron nuestras
                expectativas."
              </p>
              <h4>Laura Martínez</h4>
              <span>CTO · Digital Vision</span>
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* CONTACT */}
      <section id="contacto" className="contact">
        <div className="container">
          <div className="section-title">
            <span>Contacto</span>
            <h2>Conversemos sobre tu proyecto</h2>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Nombre completo" />

            <input type="email" placeholder="Correo electrónico" />

            <input type="text" placeholder="Empresa" />

            <select>
              <option>Seleccionar servicio</option>
              <option>Automatización</option>
              <option>Chatbots</option>
              <option>Análisis Predictivo</option>
              <option>Consultoría IA</option>
            </select>

            <textarea
              rows="6"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>

            <button type="submit">Enviar Consulta</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo">
              <span className="logo-dot"></span>
              OpenAI Solutions
            </div>

            <p>
              Soluciones de inteligencia artificial para empresas que buscan
              crecer mediante innovación y automatización.
            </p>
          </div>

          <div>
            <h4>Empresa</h4>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div>
            <h4>Recursos</h4>
            <a href="/">Blog</a>
            <a href="/">Casos de Éxito</a>
            <a href="/">Documentación</a>
          </div>

          <div>
            <h4>Redes</h4>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
            <a href="/">YouTube</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 OpenAI Solutions. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}