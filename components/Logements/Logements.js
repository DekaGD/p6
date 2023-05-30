import React from 'react';
import Logement from '../../logement.json';

export default function Accueil() {
  const logements = Logement.slice(0, 6); // Prendre les 6 premiers logements

  return (
    <div>
      <h1>Nos logements</h1>
      <div className="grid-container">
        {logements.map(logement => (
          <div className="card" key={logement.id}>
            <div className="card-image">
              <img src={logement.image} alt={logement.title} />
            </div>
            <div className="card-content">
              <h2 className="card-title">{logement.title}</h2>
              <p>{logement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}