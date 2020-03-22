import React from 'react';

import './App.css';

import { Register }from './components/Register'
import { CelebContainer } from './components/CelebContainer'
import { Login } from './components/Login'

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      <Login />
      <CelebContainer />
    </div>
  );
}

export default App;
