import React, { useState } from 'react';
import './slider.css';
import clickSound from './click.wav'
import alhamthulillah from './alhamthulillah.mp3'
import allahuakbar from './allahuuakbaar.mp3'
import Asthafirullag from './asthafirullah.mp3';

function Count() {

  const [counts, setCount] = useState(0);
  const [msg, setMsg] = useState("Asthafirullah");

  function increment() {
    setCount(counts + 1);
    
    if (counts === 33) {
      setMsg("Alhamthulillah");
      const audio = new Audio(alhamthulillah);
    audio.play();
    }

    if (counts === 66) {
      setMsg('Allahuakbar');
      const audio = new Audio(allahuakbar);
      audio.play();
    }
    
    if (counts === 100) {
      setCount(0);
      setMsg("Asthafirullah");
      const audio = new Audio(Asthafirullag);
      audio.play();
    }

    // Creating an audio element
    const audio = new Audio(clickSound);
    audio.play();
  }

  return (
    <div className='layer'>
      <h1 style={{ textAlign: 'center', color: 'black' }} className='displaylayer'>{counts}</h1>
      <h1  className='textlayer'>{msg}</h1>
      <button style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} onClick={increment} >Start-Count</button>
    </div>
  );
}

export default Count;
