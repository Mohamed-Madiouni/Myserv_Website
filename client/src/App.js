
import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  const[pad,setPad]=useState("80px")
  return (
    <div className="App" style={{paddingTop:pad}}>
   <Navbar setPad={setPad}/>
   <Home/>
    </div>
  );
}

export default App;
