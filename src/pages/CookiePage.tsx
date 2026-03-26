export function CookiePage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero">
        <p className="section-kicker">Legal</p>
        <h1>Cookie Policy</h1>
        <p className="page-lead">Informativa sull'utilizzo dei cookie ai sensi del provvedimento del Garante Privacy dell'8 maggio 2014 e del GDPR.</p>
      </section>

      <article className="legal-doc">
        <h2>1. Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente durante la navigazione.
          Sono utilizzati per far funzionare i siti in modo efficiente e per fornire informazioni al titolare.
        </p>

        <h2>2. Cookie utilizzati da questo sito</h2>
        <p>Questo sito utilizza esclusivamente <strong>cookie tecnici</strong>, necessari al funzionamento:</p>
        <ul>
          <li><strong>Cookie di sessione</strong>: mantengono lo stato della sessione di navigazione (es. preferenze dell'interfaccia). Vengono eliminati alla chiusura del browser.</li>
          <li><strong>Cookie di funzionalità</strong>: memorizzano scelte dell'utente per migliorare l'esperienza di navigazione (es. contenuto del carrello).</li>
        </ul>
        <p>Non sono utilizzati cookie di profilazione, cookie di terze parti a fini pubblicitari o sistemi di tracciamento Analytics.</p>

        <h2>3. Cookie di terze parti</h2>
        <p>
          Il sito include pulsanti di contatto che rimandano a WhatsApp. Cliccando su questi link l'utente viene reindirizzato a un servizio di terze parti soggetto alla propria privacy policy indipendente.
        </p>

        <h2>4. Come disabilitare i cookie</h2>
        <p>
          È possibile disabilitare i cookie dal proprio browser. Tuttavia, disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito. Consulta le istruzioni del tuo browser:
        </p>
        <ul>
          <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie</li>
          <li>Safari: Preferenze → Privacy → Cookie</li>
          <li>Firefox: Opzioni → Privacy e sicurezza → Cookie</li>
        </ul>

        <h2>5. Contatti</h2>
        <p>Per qualsiasi domanda su questa Cookie Policy scrivi a <a href="mailto:info@fusionrestaurant.it">info@fusionrestaurant.it</a>.</p>
        <p><em>Ultimo aggiornamento: marzo 2026</em></p>
      </article>
    </main>
  )
}
