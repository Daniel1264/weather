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
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
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
      <li><i class='bx bx-speaker' ></i><span>Wind speed</span> {Weather?.wind.speed} m/s</li>
      <li><i class='bx bx-cloud' ></i><span>Clouds</span>  {Weather?.clouds.all} %</li>
      <li><i class='bx bx-wind'></i><span>Pressure</span> {Weather?.main.pressure} hpa</li>
    </ul>
    </section>
    {/* TEMPERATURE (CELSIUS AND FARENHEIT) */}
    <section className='card_temperature'>
      <h2>{isCelsius ? `${Temperature?.celsius} C°` : `${Temperature.farenheit} F°`}</h2>
      <button onClick={changeTemperature} className='card_btn'>{isCelsius ? "Change to farenheit" : "Change to celsius"}</button>
    </section>
    </div>
  )
}

export default Weather