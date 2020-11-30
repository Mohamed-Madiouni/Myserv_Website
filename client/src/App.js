import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Candidature from './component/Candidature';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';

function App() {
  const[pad,setPad]=useState("80px")
  return (
    <div className="App" style={{paddingTop:pad}}>
      <div className="App_center">
   <Navbar setPad={setPad}/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/contact" component={Contact}/>
   <Route path="/services" component={Services}/>
   <Route path="/candidature" component={Candidature}/>
   </Switch>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
