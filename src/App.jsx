import axios from 'axios';
import { useState, useEffect } from 'react';
import { Info } from './componets/Info';
import './App.css';

function App() {

  const [data, setData] = useState({});

  const [isFarenheit, setIsFarenheit] = useState(false);

  const [isLoader, setIsLoader] = useState(true);

  
  useEffect(() =>{

    navigator.geolocation.getCurrentPosition(fetchApi);

  }, []);

  const fetchApi = (position) =>{
    
    const apiKey = 'facb90399f018af3c8d054864b79ae30';
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    axios.get(endPoint).then(response => setData(response.data));

    /* Just For loader */

    setTimeout(() =>{
      setIsLoader(false);
    }, 2000);

  }
  
  const temp = isFarenheit ? `${Math.floor(data?.main?.temp - 273)} ºC` : `${Math.floor(1.8 * (data?.main?.temp - 273) + 32)} ºF`;
  const flag = `../public/flags/${data?.sys?.country.toLowerCase()}.svg`;
  const icon = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`;
  const bg = `url('./public/bgs/${data?.weather?.[0]?.icon}.jpg')`;

  document.body.style['background-image'] = bg;

  return (
    <>
    <div className="loader" style={isLoader ? {display: 'block'} : {display: 'none'}}></div>
    <div className="App" style={isLoader ? {display: 'none'} : {display: 'grid'}}>
      <h1>Wheather APP</h1>
      <Info data={data} temp={temp} icon={icon} flag={flag}/>
      <button onClick={()=> setIsFarenheit(!isFarenheit)}>Degrees ºF/ºC</button>
    </div>
    </>
  )
}

export default App;