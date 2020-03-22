import React from 'react';

import './App.css';

import { Register }from './components/Register'
import { CelebContainer } from './components/CelebContainer'

function App() {
  return (
    <div className="App">
      <Register />
      <CelebContainer />
    </div>
  );
}

export default App;
