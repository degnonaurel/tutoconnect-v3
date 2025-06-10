import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {
  const subjects = ['Mathématiques', 'Physique', 'Programmation', 'Chimie'];
  const tutors = ['Mme Lavoie', 'M. Kouadio', 'M. Tremblay', 'Mme El Khoury'];

  const [subject, setSubject] = useState('');
  const [tutor, setTutor] = useState('');
  const [date, setDate] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4">TutoConnect</h1>
        <p className="lead">Service de tutorat universitaire sur rendez-vous</p>
      </header>

      <section className="mb-5">
        <h2 className="h4">À propos de l’entreprise</h2>
        <p>TutoConnect est une plateforme en ligne qui connecte les étudiants aux meilleurs tuteurs de l’université. Que ce soit pour les mathématiques, la programmation, ou la physique, vous pouvez facilement prendre rendez-vous avec un tuteur qualifié.</p>
        <p><strong>Type d’entreprise :</strong> Éducation / Service numérique</p>
        <p><strong>Coordonnées :</strong> tutorat@tutoconnect.ca | +1 (819) 329‑3189n</p>
      </section>

      <section className="mb-5">
        <h2 className="h4">Réserver un rendez-vous</h2>
        <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '600px' }}>
          {!confirmed ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Matière</label>
                <select className="form-select" value={subject} onChange={(e) => setSubject(e.target.value)} required>
                  <option value="">-- Choisissez une matière --</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Tuteur</label>
                <select className="form-select" value={tutor} onChange={(e) => setTutor(e.target.value)} required>
                  <option value="">-- Choisissez un tuteur --</option>
                  {tutors.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Date et heure</label>
                <input type="datetime-local" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Confirmer le rendez-vous</button>
            </form>
          ) : (
            <div className="text-center">
              <h4 className="mb-3">🎉 Rendez-vous confirmé !</h4>
              <p><strong>Matière :</strong> {subject}</p>
              <p><strong>Tuteur :</strong> {tutor}</p>
              <p><strong>Date :</strong> {new Date(date).toLocaleString()}</p>
              <button className="btn btn-secondary mt-3" onClick={() => setConfirmed(false)}>Réserver un autre</button>
            </div>
          )}
        </div>
      </section>

      <footer className="text-center mt-5 pt-4 border-top">
        <p className="mb-1">Conçu par Mohamed Degnon</p>
        <small>&copy; 2025 TutoConnect. Tous droits réservés.</small>
      </footer>
    </div>
  );
}

export default App;
