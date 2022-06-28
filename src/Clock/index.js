import { useState, useEffect } from 'react';
import BoutonRenvoi from '../Composante/BoutonRenvoi';
import './styles.css';
import { Link } from "react-router-dom";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  let timer;

  useEffect(() => {

    timer = setInterval(() => {
      setDate(new Date());
    }, 1000);


    return () => {
      clearInterval(timer);
    };
  });

  let newFunction = ()=>{
    
  };
  
  return (
  <div className="clock-container">
    <Link to="/Crono"><BoutonRenvoi composant="Timer" function1={newFunction}  newClasse="boutton"/></Link>
    <p className="clock">
      <span>{date.getHours().toString().padStart(2, '0')}</span>:
      <span>{date.getMinutes().toString().padStart(2, '0')}</span>:
      <span>{date.getSeconds().toString().padStart(2, '0')}</span>
    </p>
  </div>
  )
}