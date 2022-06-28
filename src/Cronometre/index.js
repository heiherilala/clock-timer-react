import { useState, useEffect } from 'react';
import BoutonRenvoi from '../Composante/BoutonRenvoi';
import './styles.css';
import { Link } from "react-router-dom";

const Crono = () => {

    let [date, setDate] = useState(new Date());
    let [active, setActive] = useState(false);
    let [nameBoutonStart, setNameBoutonStart] = useState("START");

    let [activeVisible, setActiveVisible] = useState("flex");
    let [activeNonVisible, setActiveNonVisible] = useState("none");

    let timer;

    let [time, setTime] = useState({h:date.getHours(),mn:date.getMinutes(),sc:date.getSeconds()});
    let [timeFirst, setTimeFirst] = useState({h:0,mn:0,sc:0});
    let [her, setHer] = useState(date.getHours());
    let [min, setMin] = useState(date.getMinutes());
    let [sec, setSec] = useState(date.getSeconds());
    console.log(date);


      useEffect(() => {
    
        timer = setInterval(() => {

          if (active) {
            if ((time.h!=0)||(time.mn!=0)||(time.sc!=0)) {
              let updateTime = {h:time.h, mn:time.mn, sc:time.sc-1};
            
              if (updateTime.sc==-1) {
                updateTime.sc = 59;
                updateTime.mn = updateTime.mn-1;
              }
              if (updateTime.mn==-1) {
                updateTime.mn = 59;
                updateTime.h = updateTime.h-1;
              }
              setTime(updateTime)
            }else{
              alert("timer end!");
              clearInterval(timer)
            }


          }else{
              
            clearInterval(timer)
          }
  
        }, 1000);


      return () => {
        clearInterval(timer);
      };

    });


    let functionStarResum = ()=>{
      if ((timeFirst.h==0)&&(timeFirst.mn==0)&&(timeFirst.sc==0)) {
        setTimeFirst({h:Number(her), mn:Number(min), sc:Number(sec)})
      }

      if (active) {
        setActive(false);
        setNameBoutonStart("RESUME");
        setHer(time.h);
        setMin(time.mn);
        setSec(time.sc);
        setActiveNonVisible("flex");
        setActiveVisible("none");

      }else{
        setActive(true);
        setNameBoutonStart("PAUSE");
        let updateTime = {h:Number(her), mn:Number(min), sc:Number(sec)};
        setTime(updateTime);
        setActiveNonVisible("flex");
        setActiveVisible("none");
      }
    };

    let functionReset = ()=>{
      setActive(false);
      setNameBoutonStart("Start");
      setHer(timeFirst.h);
      setMin(timeFirst.mn);
      setSec(timeFirst.sc);
      setActiveNonVisible("none");
      setActiveVisible("flex");
      setTimeFirst({h:0,mn:0,sc:0});
    }
    
    return (
      <div className="clock-container">
        
        
        <p className="clock" style={{display:activeVisible}}>
            <input onChange={event => {if((Number(event.target.value)<24)&&(Number(event.target.value)>-1)){setHer(event.target.value)}}} type="text" name="name" value={her} id="name" required pattern="[0-9]{2}"/>:
            <input onChange={event => {if((Number(event.target.value)<60)&&(Number(event.target.value)>-1)){setMin(event.target.value)}}} type="text" name="name" value={min} id="name" required minlength="0" maxlength="2" />:
            <input onChange={event => {if((Number(event.target.value)<60)&&(Number(event.target.value)>-1)){setSec(event.target.value)}}} type="text" name="name" value={sec} id="name" required minlength="0" maxlength="2" />
        </p>
        <p className="clock" style={{display:activeNonVisible}}>
          <span>{time.h>=10?time.h:"0"+time.h}</span>:
          <span>{time.mn>=10?time.mn:"0"+time.mn}</span>:
          <span>{time.sc>=10?time.sc:"0"+time.sc}</span>
        </p>
        <div className='move'>
          <BoutonRenvoi composant={nameBoutonStart} function1={functionStarResum}/>
          <BoutonRenvoi composant="reset" function1={functionReset}  visu={activeNonVisible}/>
          <Link to="/Clock"><BoutonRenvoi composant="Clock" function1={()=>{}} newClasse="boutton2"/></Link>
        </div>
      </div>
    )
};

export default Crono;