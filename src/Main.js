import React from 'react';
import neon from './pub/neon.jpg';

const Main = () => {
  return (
    <div>
        <img src={neon} alt="neon" style={{height:"100vh", width:"33.333%", opacity: 0.2, position: "relative"}} />
        <img src={neon} alt="neon" style={{height:"100vh", width:"33.3333%", opacity: 0.3, position: "relative"}} />
        <img src={neon} alt="neon" style={{height:"100vh", width:"33.333%", opacity: 0.4, position: "relative"}} />
    </div>
  )
}

export default Main
