import React from 'react';
import './App.css'; // Vous pouvez créer un fichier App.css pour les styles
import CountryList from '../src/components/CountryList';

function App() {
  return (
    <div className="App">
      <h1>Liste des pays</h1>
      <CountryList />
    </div>
  );
}

export default App;
