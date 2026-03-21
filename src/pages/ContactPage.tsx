import { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { contacts, openingHours, positiveReviews } from '../data/siteContent'
import { sanitizeTextBlock, sanitizeTime } from '../lib/inputSanitizers'
import { trackEvent } from '../lib/tracking'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function ContactPage() {
  const [bookingDate, setBookingDate] = useState<Date | null>(new Date())
  const [bookingTime, setBookingTime] = useState('20:00')
  const [guests, setGuests] = useState('2')
  const [notes, setNotes] = useState('')

  const openStatus = useMemo(() => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()
    const isOpenDay = day >= 2 || day === 0
    const inLunch = hour >= 12 && hour < 15
    const inDinner = hour >= 19 && hour < 23

    if (isOpenDay && (inLunch || inDinner)) {
      return { label: 'ORA APERTO', className: 'status-open' }
    }

    return { label: 'ORA CHIUSO', className: 'status-closed' }
  }, [])

  const bookingMessage = useMemo(() => {
    const dateText = bookingDate ? bookingDate.toLocaleDateString('it-IT') : 'data da definire'
    const timeLabel = bookingTime || 'orario da definire'
    return `Ciao, vorrei prenotare un tavolo per ${guests} persone il ${dateText} alle ${timeLabel}. Note: ${notes || 'nessuna nota'}.`
  }, [bookingDate, bookingTime, guests, notes])

  return (
    <main className="page-shell page-shell--inner">
      <section className="panel-grid panel-grid--three">
        <article className="detail-panel">
          <p className="section-kicker">Ristorante</p>
          <h2>{contacts.address}</h2>
          <div className="stack-actions">
            <a className="button button--primary" href={contacts.mapsHref} target="_blank" rel="noreferrer">
              Apri in Maps
            </a>
            <a className="button button--ghost" href={contacts.phoneHref}>
              Chiama {contacts.phoneLabel}
            </a>
          </div>
        </article>

        <article className="detail-panel">
          <p className="section-kicker">Canali diretti</p>
          <div className="hours-list">
            <div className="hours-item">
              <span>WhatsApp</span>
              <a href={contacts.whatsappHref} target="_blank" rel="noreferrer">
                <strong>{contacts.whatsappLabel}</strong>
              </a>
            </div>
            <div className="hours-item">
              <span>Email</span>
              <a href={contacts.emailHref}>
                <strong>{contacts.email}</strong>
              </a>
            </div>
            <div className="hours-item">
              <span>Facebook</span>
              <a href={contacts.facebookHref} target="_blank" rel="noreferrer">
                <strong>Pagina ufficiale</strong>
              </a>
            </div>
          </div>
        </article>

        <article className="detail-panel">
          <p className="section-kicker">Orari</p>
          <p className={openStatus.className}>{openStatus.label}</p>
          <div className="hours-list">
            {openingHours.map((slot) => (
              <div key={slot.label} className="hours-item">
                <span>{slot.label}</span>
                <strong>{slot.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="book-grid" aria-label="Prenotazione tavolo">
        <article className="book-panel">
          <p className="section-kicker">Prenota dal sito</p>
          <h2>Configuratore prenotazione</h2>
          <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Data
              <DatePicker
                selected={bookingDate}
                onChange={(date: Date | null) => setBookingDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </label>
            <label>
              Orario
              <input type="time" value={bookingTime} onChange={(event) => setBookingTime(sanitizeTime(event.target.value))} />
            </label>
            <label>
              Persone
              <select value={guests} onChange={(event) => setGuests(event.target.value)}>
                <option value="2">2 persone</option>
                <option value="3">3 persone</option>
                <option value="4">4 persone</option>
                <option value="5">5 persone</option>
                <option value="6">6+ persone</option>
              </select>
            </label>
            <label>
              Note
              <textarea
                value={notes}
                onChange={(event) => setNotes(sanitizeTextBlock(event.target.value, 220))}
                maxLength={220}
                placeholder="Allergie, occasioni, richieste"
              />
            </label>
            <WhatsAppButton
              className="button button--primary"
              message={bookingMessage}
              eventName="contact_booking_submit"
              eventPayload={{ guests }}
            >
              Invia prenotazione via WhatsApp
            </WhatsAppButton>
          </form>
        </article>

        <article className="book-panel">
          <p className="section-kicker">Canali alternativi</p>
          <h2>Prenotazione diretta</h2>
          <p>Puoi anche prenotare telefonicamente o inviare una richiesta rapida su WhatsApp.</p>
          <div className="stack-actions">
            <a className="button button--ghost" href={contacts.phoneHref} onClick={() => trackEvent('contact_phone_click')}>
              Chiama ora
            </a>
            <a
              className="button button--primary"
              href={contacts.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('contact_whatsapp_click')}
            >
              Apri WhatsApp
            </a>
          </div>
        </article>
      </section>

      <section className="section-block" aria-label="Recensioni positive">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Recensioni</p>
            <h2>Dicono di noi</h2>
          </div>
        </div>

        <div className="contact-reviews-scroll" role="list">
          {positiveReviews.map((review) => (
            <article key={review.author} className="offer-card contact-review-card" role="listitem">
              <p>"{review.quote}"</p>
              <strong>{review.author}</strong>
              <span className="contact-review-card__rating">{review.rating}/5</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}