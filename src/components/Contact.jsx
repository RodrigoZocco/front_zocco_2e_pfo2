import { useState } from 'react'
import { SERVICE_INTERESTS } from '../data/content'
import styles from './Contact.module.css'

const INITIAL = {
  nombre: '',
  apellido: '',
  email: '',
  empresa: '',
  servicio: '',
  mensaje: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.info}>
            <p className={styles.tag}>Contacto</p>
            <h2 className={styles.heading}>Hablemos de tu proyecto</h2>
            <p className={styles.desc}>
              Contanos brevemente qué querés automatizar y uno de nuestros especialistas
              te va a contactar en menos de 24 horas hábiles con una propuesta concreta.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>📧</span>
                <span>hola@nexaflow.io</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>📞</span>
                <span>+54 11 4800-0000 (Lun–Vie 9–18 hs)</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>📍</span>
                <span>Av. Corrientes 1234, CABA, Argentina</span>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✅</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Te respondemos en menos de 24 hs hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="apellido">Apellido</label>
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      placeholder="Tu apellido"
                      value={form.apellido}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.group}>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={form.empresa}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.group}>
                  <label htmlFor="servicio">¿Qué te interesa?</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                  >
                    <option value="">Seleccioná una opción</option>
                    {SERVICE_INTERESTS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.group}>
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Contanos brevemente qué querés automatizar…"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  Enviar mensaje →
                </button>
                <p className={styles.note}>
                  Sin spam. Te respondemos en menos de 24 hs hábiles.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
