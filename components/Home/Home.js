import React from 'react';
import Card from '../Card/Cards';

export default function Home() {
  return (
    <div>
      <h1>Chez vous, partout et ailleurs</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}