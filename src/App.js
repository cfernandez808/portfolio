import React from 'react';
import './App.css';
import NavBar from './Navbar'
import Main from './Main'
import Bio from './Bio'
import NameAnime from './NameAnime.js'
import Timeline from './Timeline.js'
import { withAuthenticator } from '@aws-amplify/ui-react';



function App() {

  return (
    <div style={{backgroundColor: "#4051B5"}}>
      <NavBar />
      <NameAnime />
      <Main />
      <Bio />
      <Timeline />
    </div>
  );
}

export default withAuthenticator(App)
