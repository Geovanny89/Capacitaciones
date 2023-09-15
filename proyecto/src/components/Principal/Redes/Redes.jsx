import React from 'react'
import './redes.css'
import face from '../../../assets/face.png';
import insta from '../../../assets/insta.png';
import tuit from '../../../assets/twitter.png';


export default function Redes() {
  return (
    <div>
      <div className="redes">
        <h1>Siguenos: </h1>
        <img src={face} alt="face" width="20px" height="20px"/>
        <img src={insta} alt="insta" width="20px" height="20px" />
        <img src={tuit} alt="twwiter" width="20px" height="20px" />
      </div>
    </div>
  )
}
