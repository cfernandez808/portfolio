import React from 'react';
import './css/App.css';
import {scroller} from 'react-scroll';

import NavBar from './views/home/Navbar';
import Main from './views/home/Main';
import NameAnime from './views/home/NameAnime';
import Timeline from './views/home/Timeline';
import Contact from './views/home/Contact'

import { withAuthenticator } from '@aws-amplify/ui-react';



function App() {
  const scrollToSection = () => {
    scroller.scrollTo("timeline", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div style={{backgroundColor: "#4051B5"}}>
      <NavBar scrollToSection={scrollToSection} />
      <NameAnime />
      <Main />
      <Timeline className="timeline" />
      <Contact />
    </div>
  );
}

export default withAuthenticator(App)
