import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSockets} from "./context/socket.context"

function App() {
  const {socket} = useSockets();
  console.log(socket.id)
  return (
    <div>
      {socket.id}
    </div>
  );
}

export default App;
