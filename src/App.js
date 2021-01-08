import React from 'react';
import './css/App.css';
import NavBar from './views/home/Navbar';
import Main from './views/home/Main';
import NameAnime from './views/home/NameAnime';
import Timeline from './views/home/Timeline';
import Contact from './views/home/Contact'
import Alert from './views/home/Alert';
import {scroller} from 'react-scroll';


function App() {
  const scrollToTimeline = () => {
    scroller.scrollTo("timeline", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div scrollX="hidden" style={{backgroundColor: "#4051B5", overflowX:'hidden'}}>
      <NavBar scrollToTimeline={scrollToTimeline} scrollToContact={scrollToContact} />
      <NameAnime />
      <Main />
      <Timeline className="timeline" />
      <Contact className="contact"  />
      <Alert />
    </div>
  );
}

export default App;
