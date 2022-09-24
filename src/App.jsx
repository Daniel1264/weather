import axios from 'axios'
import React  from 'react'
import { useState, useEffect } from 'react'
import Weather from './components/Weather'
import './App.css'
import Loader from './components/Loader'

const App = () => {

  // *STATE MANAGEMENT

// COORDS STATUS MANAGEMENT
  const [coords, setCoords] = useState()

//  WEATHER STATUS MANAGEMENT
  const [weather, setWeather] = useState()

// WEATHER STATUS TEMPERATURE
  const [temperature, setTemperature] = useState();



  // ?USEEFFECT MANAGEMENT
  

  // USEFFECT MANAGEMENT (GEOLOCATION)
  useEffect(() => {


    const success = position =>{  
  
      const objCoords = {
        lon: position.coords.longitude,
        lat: position.coords.latitude
      }
      setCoords(objCoords);
  }
      navigator.geolocation.getCurrentPosition(success);
      
  
  },[])
  
  // USEEFFECT MANAGEMENT (API WEATHER)

  useEffect(() => {
    if(coords) {
      const apiKey = `37976a9ef86d80b9e5959c536545eaa6`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
      .then(res => {
        const celsius = Math.floor(res.data.main.temp - 273.15);
        const farenheit = Math.floor(celsius * 9 / 5 + 32);
        setTemperature({celsius, farenheit})
        setWeather(res.data)
      })
      .catch(err => console.log(err))
       
    }
  },[coords])

  console.log(weather)
  
  return (
    <div className='App'>      

    {
      weather ? 
        <Weather 
        Weather = {weather}
        Temperature = {temperature}
      />

      :
      <Loader/>
    }

    </div>
  )
}

export default App;
