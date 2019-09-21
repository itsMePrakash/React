import React from 'react';
import Header from './components/Header'
import Contacts from './components/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
  <div>
    <Header branding="Tech World"/>
    <div className="container">
      <Contacts/>
    </div>
  </div>

  );
}


export default App;
