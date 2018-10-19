import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './../styles/Main.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </main>
  )
}

export default Main;