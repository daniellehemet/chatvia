// Modules
import firebase from './firebase';
import { useEffect, useState } from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';

// Components
import Nav from './Nav.js';
import Chat from './Chat.js';
import Sidebar from './Sidebar';

//Assets
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
