import { useState, type FormEvent } from 'react';

export function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      return;
    }
    // TODO: koppel aan wachtlijst-API of Formspree/Resend
    setStatus('ok');
    setEmail('');
  };

  return (
    <div className="page">
      <div className="glow" aria-hidden />
      <header className="header">
        <span className="logo">Snimio</span>
        <span className="badge">Binnenkort</span>
      </header>

      <main className="hero">
        <p className="eyebrow">Coming soon</p>
        <h1>Mail die sneller voelt dan Superhuman</h1>
        <p className="lead">
          Snimio bundelt inbox, AI-assistent, reminders en agenda — gebouwd voor teams die Outlook en
          Gmail echt productief willen gebruiken.
        </p>

        <form className="waitlist" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="email">
            E-mailadres
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="jij@bedrijf.nl"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
          />
          <button type="submit">Houd me op de hoogte</button>
        </form>

        {status === 'ok' && (
          <p className="form-msg ok" role="status">
            Bedankt — we mailen je zodra Snimio live gaat.
          </p>
        )}
        {status === 'error' && (
          <p className="form-msg err" role="alert">
            Vul een geldig e-mailadres in.
          </p>
        )}

        <ul className="features">
          <li>Outlook & Gmail in één snelle inbox</li>
          <li>AI die meeschrijft zonder je data te verspillen</li>
          <li>Reminders die terugkomen als de mail dat verdient</li>
        </ul>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Snimio</span>
        <a href="mailto:hello@snimio.nl">hello@snimio.nl</a>
      </footer>
    </div>
  );
}
