import React from 'react';
import './css/App.css';
import NavBar from './views/home/Navbar';
import Main from './views/home/Main';
import NameAnime from './views/home/NameAnime';
import Timeline from './views/home/Timeline';
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
