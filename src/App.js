import React from 'react';
import './css/App.css';
import NavBar from './Navbar'
import Main from './Main'
import Bio from './Bio'
import NameAnime from './NameAnime'
import Timeline from './Timeline'
import Skills from './Skills'
import { withAuthenticator } from '@aws-amplify/ui-react';



function App() {

  return (
    <div style={{backgroundColor: "#4051B5"}}>
      <NavBar />
      <NameAnime />
      <Main />
      <Bio />
      <Skills />
      <Timeline />
    </div>
  );
}

export default withAuthenticator(App)
