// Modules
import firebase from './firebase';
import { useEffect, useState } from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';

// Components
import Nav from './Nav.js';
import Chat from './Chat.js';
import Sidebar from './Sidebar';
import MessageInput from './MessageInput';
import MessageUserInfo from './MessageUserInfo';

//Assets
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Chat />
      <MessageInput />
      <MessageUserInfo />
    </div>
  );
}

export default App;
