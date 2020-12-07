import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello} from './components/Hello.jsx'
import Welcome from './components/Welcome'
import Navber from './components/Navber'
import Subscribe from './components/Subscribe'
import Counter from './components/Counter'
import Cartwo from './components/Cartwo'
import Click1 from './components/Click1'
import Click2 from './components/Click2'
import BindEventHandler from './components/BindEventHandler'
function App() {
  return (
    <div className="App">
    <BindEventHandler ></BindEventHandler>
     </div>
  );
}

export default App;
