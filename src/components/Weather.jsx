import React, {useState} from 'react'

const Weather = ({Weather, Temperature}) => {

  // *STATE MANAGEMENT (TEMPERATURE CELCIUS OUR FARENHEIT)

  const [isCelsius, setIsCelsius] = useState(true)

// TODO: THIS FUNCTION CHANGE THE TEMPERATURA OF CELSIUS TO FARENHEIT

  const changeTemperature = () => {
    setIsCelsius(!isCelsius);
  }

  return (
    <div className='card'>
    {/* TITLE AND CITY */}
    <section className='card_title'>
    <h1>Weather App</h1>
      <h4>{`${Weather?.name}, ${Weather?.sys.country}`}</h4>
    </section>
      {/* IMAGE */}
    <section className='card_img'>
    <img src={Weather && `http://openweathermap.org/img/wn/${Weather?.weather[0].icon}@4x.png`}/>
    </section>
    {/* INFORMATION */}
    <section className='card_information'>
    <h3>"{Weather?.weather[0].description}"</h3>
    <ul>
      <li><span>Wind speed</span> {Weather?.wind.speed} m/s</li>
      <li><span>Clouds</span>  {Weather?.clouds.all} %</li>
      <li><span>Pressure</span> {Weather?.main.pressure} hpa</li>
    </ul>
    </section>
    {/* TEMPERATURE (CELSIUS AND FARENHEIT) */}
    <section className='card_temperature'>
      <h2>{isCelsius ? `${Temperature?.celsius} C°` : `${Temperature.farenheit} F°`}</h2>
      <button onClick={changeTemperature} className='card_btn'>{isCelsius ? "Change to farenheit" : "Change a celsius"}</button>
    </section>
    </div>
  )
}

export default Weather