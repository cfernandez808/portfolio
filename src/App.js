import React from 'react';
import './css/App.css';
import NavBar from './Navbar';
import Main from './Main';
import NameAnime from './NameAnime';
import Timeline from './Timeline';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {scroller} from 'react-scroll';



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
    </div>
  );
}

export default withAuthenticator(App)
