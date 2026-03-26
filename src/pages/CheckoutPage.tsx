import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { buildWhatsAppLink } from '../data/siteContent'
import { getEntriesCount, resolveCartEntries } from '../lib/cartEntries'
import { sanitizePhone, sanitizeSingleLine, sanitizeTextBlock, sanitizeTime } from '../lib/inputSanitizers'
import { trackEvent } from '../lib/tracking'
import { useMenuOrderCart } from '../lib/useMenuOrderCart'

export function CheckoutPage() {
  const { cart, clearCart } = useMenuOrderCart()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [serviceMode, setServiceMode] = useState<'ritiro' | 'consegna'>('ritiro')
  const [pickupTime, setPickupTime] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')

  const entries = useMemo(() => resolveCartEntries(cart), [cart])
  const itemsCount = getEntriesCount(entries)

  const orderMessage = useMemo(() => {
    if (entries.length === 0) {
      return 'Ciao, vorrei informazioni per un ordine take away.'
    }

    const orderLines = entries.map((item) => `- ${item.qty}x ${item.title} (${item.priceRange})`)

    const personalLines = [
      `Nome: ${fullName || '-'}`,
      `Telefono: ${phone || '-'}`,
      `Modalita: ${serviceMode === 'ritiro' ? 'Ritiro in sede' : 'Consegna a domicilio'}`,
      `Orario preferito: ${pickupTime || '-'}`,
      serviceMode === 'consegna' ? `Indirizzo: ${address || '-'}` : null,
      `Note: ${notes || '-'}`,
    ].filter(Boolean)

    return `Ciao, vorrei confermare questo ordine:\n\n${orderLines.join('\n')}\n\nDati cliente:\n${personalLines.join('\n')}`
  }, [entries, fullName, phone, serviceMode, pickupTime, address, notes])

  const isCheckoutReady = fullName.trim().length > 1 && phone.trim().length > 5 && (serviceMode === 'ritiro' || address.trim().length > 4)
  const canSendWhatsApp = isCheckoutReady && entries.length > 0
  const checkoutHint =
    entries.length === 0
      ? 'Aggiungi almeno un prodotto al carrello per inviare l ordine su WhatsApp.'
      : !isCheckoutReady
        ? 'Compila nome, telefono e indirizzo (se consegna) per continuare.'
        : null

  const handleSendWhatsApp = () => {
    if (!canSendWhatsApp) {
      return
    }

    trackEvent('checkout_whatsapp_click', { items: itemsCount, mode: serviceMode })
    window.open(buildWhatsAppLink(orderMessage), '_blank', 'noopener,noreferrer')
    clearCart()
  }

  return (
    <main className="page-shell page-shell--inner">
      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Checkout ordine</p>
            <h1>Inserisci i tuoi dati prima di WhatsApp.</h1>
          </div>
          <Link className="button button--ghost" to="/menu">
            Torna al menu
          </Link>
        </div>
      </section>

      <section className="checkout-grid">
        <article className="planner-card">
          <h2>Dati cliente</h2>
          <label>
            Nome e cognome
            <input
              value={fullName}
              onChange={(event) => setFullName(sanitizeSingleLine(event.target.value, 80))}
              maxLength={80}
              placeholder="Mario Rossi"
            />
          </label>
          <label>
            Telefono
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(sanitizePhone(event.target.value))}
              maxLength={20}
              placeholder="333 1234567"
            />
          </label>
          <label>
            Modalita
            <select value={serviceMode} onChange={(event) => setServiceMode(event.target.value as 'ritiro' | 'consegna')}>
              <option value="ritiro">Ritiro in sede</option>
              <option value="consegna">Consegna a domicilio</option>
            </select>
          </label>
          <label>
            Orario preferito
            <input
              type="time"
              value={pickupTime}
              onChange={(event) => setPickupTime(sanitizeTime(event.target.value))}
            />
          </label>
          {serviceMode === 'consegna' && (
            <label>
              Indirizzo consegna
              <input
                value={address}
                onChange={(event) => setAddress(sanitizeSingleLine(event.target.value, 140))}
                maxLength={140}
                placeholder="Via, numero civico, citta"
              />
            </label>
          )}
          <label>
            Note
            <textarea
              value={notes}
              onChange={(event) => setNotes(sanitizeTextBlock(event.target.value, 240))}
              maxLength={240}
              placeholder="Allergie, citofono, richieste speciali"
            />
          </label>

          <div className="stack-actions">
            <button
              type="button"
              className={canSendWhatsApp ? 'button button--primary' : 'button button--ghost'}
              onClick={handleSendWhatsApp}
              disabled={!canSendWhatsApp}
            >
              Vai su WhatsApp
            </button>
            {entries.length === 0 && (
              <Link className="button button--ghost" to="/menu/take-away">
                Aggiungi prodotti
              </Link>
            )}
          </div>
          {checkoutHint && <p className="checkout-note">{checkoutHint}</p>}
        </article>

        <article className="detail-panel checkout-summary">
          <p className="section-kicker">Riepilogo ordine</p>
          <h2>Prodotti selezionati ({itemsCount})</h2>
          <div className="cart-list">
            {entries.length === 0 && <p>Il carrello e vuoto. Aggiungi prodotti dal menu.</p>}
            {entries.map((item) => (
              <div key={item.title} className="cart-row">
                <span>
                  {item.qty}x {item.title}
                </span>
                <strong>{item.priceRange}</strong>
              </div>
            ))}
          </div>
          {!isCheckoutReady && entries.length > 0 && <p className="checkout-note">Compila i dati per attivare WhatsApp.</p>}
        </article>
      </section>
    </main>
  )
}
