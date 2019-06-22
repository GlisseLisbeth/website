import React, { Component, Fragment } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skill from './components/skill/skill';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import data from './data';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header data={data} />
        <Home data={data} />
        <About data={data} />
        <Skill data={data} />
        <Portfolio data={data} />
        <Contact data={data} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
