import React from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './NextDay.scss'
import PhotoBulut from './../../Photos/Bulut.jpg';
import { Animated } from "react-animated-css";
import { animateScroll } from 'react-scroll';


export default function NextDay(props) {

  const key = "93c797befa5240568ad213645210903";
  const weatherData = props.data;
  const weatherNow = weatherData.current.condition.text;
  const formElement = document.querySelector(".SearchForm");

  useEffect(() => {
  
  });

  changePhoto();


  function changePhoto() {
    if (weatherNow.toLowerCase().includes("cloud")) {
      console.log("Bulutlu")
      formElement.style.backgroundColor = 'red';
    } else if (weatherNow.toLowerCase().includes("sunny")) {
      console.log("güneş");
    } else if (weatherNow.toLowerCase().includes("snow")) {
      console.log("kar");
    } else if (weatherNow.toLowerCase().includes("clear")) {
      console.log("hava açık");
    } else if (weatherNow.toLowerCase().includes("rain")) {
      console.log("yağmur")
    } else {
      console.log("no");
    }
  }

  return (
    <div id="NextDay" className="NextDay">
      {/* 3DaysForecast */}
      <div className="Next3Days">
        <div className="Text">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay="600" isVisible={true}>
            <div>
              <h1>Next 3 Days Forecast in {props.city}</h1>
            </div>
          </Animated>
        </div>
        <div className="showForecast">
          <Card className="cards" style={{ width: '17rem', height: "26rem" }}>
            <Card.Img variant="top" src={weatherData.forecast.forecastday[0].day.condition.icon} alt={'asdsadas'} />
            <Card.Body>
              <Card.Title>{weatherData.location.name} - <span>{weatherData.forecast.forecastday[0].day.condition.text}</span></Card.Title>
              <Card.Text>
                <p>{weatherData.forecast.forecastday[0].date}</p>
                <p>Ave. Temp: <h2>{weatherData.forecast.forecastday[0].day.avgtemp_c}</h2></p>
                <p>Sunrise:  {weatherData.forecast.forecastday[0].astro.sunrise}</p>
                <p>Sunset:  {weatherData.forecast.forecastday[0].astro.sunset}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards" style={{ width: '17rem', height: "26rem" }}>
            <Card.Img variant="top" src={weatherData.forecast.forecastday[1].day.condition.icon} alt={'asdsadas'} />
            <Card.Body>
              <Card.Title>{weatherData.location.name} - <span>{weatherData.forecast.forecastday[1].day.condition.text}</span></Card.Title>
              <Card.Text>
                <p>{weatherData.forecast.forecastday[1].date}</p>
                <p>Ave. Temp: <h2>{weatherData.forecast.forecastday[1].day.avgtemp_c}</h2></p>
                <p>Sunrise:  {weatherData.forecast.forecastday[1].astro.sunrise}</p>
                <p>Sunset:  {weatherData.forecast.forecastday[1].astro.sunset}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards" style={{ width: '17rem', height: "26rem" }}>
            <Card.Img variant="top" src={weatherData.forecast.forecastday[2].day.condition.icon} alt={'asdsadas'} />
            <Card.Body>
              <Card.Title>{weatherData.location.name} - <span>{weatherData.forecast.forecastday[2].day.condition.text}</span></Card.Title>
              <Card.Text>
                <p>{weatherData.forecast.forecastday[2].date}</p>
                <p>Ave. Temp: <h2>{weatherData.forecast.forecastday[2].day.avgtemp_c}</h2></p>
                <p>Sunrise:  {weatherData.forecast.forecastday[2].astro.sunrise}</p>
                <p>Sunset:  {weatherData.forecast.forecastday[2].astro.sunset}</p>
              </Card.Text>
            </Card.Body>
          </Card>         
        </div>
        <button onClick={() => animateScroll.scrollToTop()}>Back the Top!</button>
      </div>
    </div>
  )
}
