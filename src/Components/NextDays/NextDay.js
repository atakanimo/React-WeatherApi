import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './NextDay.scss'
import { Animated } from "react-animated-css";
import { animateScroll } from 'react-scroll';


export default class NextDay extends Component {

  render() {
    const {weatherData,city} = this.props;

      return (
        <div ref='changeColorRef' id="NextDay" className="NextDay">          
          {/* 3DaysForecast */}
          <div className="Next3Days">
            <div className="Text">
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay="600" isVisible={true}>
                <div>
                  <h1>Next 3 Days Forecast in {city}</h1>
                </div>
              </Animated>
            </div>
            <div className="showForecast">
              <Card className="cards">
                <Card.Img variant="top" src={weatherData.forecast.forecastday[0].day.condition.icon} alt={'asdsadas'} />
                <Card.Body>
                  <Card.Title className="cardTitle">{weatherData.location.name} - <span>{weatherData.forecast.forecastday[0].day.condition.text}</span></Card.Title>
                  <Card.Text className="cardText">
                    <p>{weatherData.forecast.forecastday[0].date}</p>
                    <p>Ave. Temp: <h2>{weatherData.forecast.forecastday[0].day.avgtemp_c}°</h2></p>
                    <p>Sunrise:  {weatherData.forecast.forecastday[0].astro.sunrise}</p>
                    <p>Sunset:  {weatherData.forecast.forecastday[0].astro.sunset}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cards" >
                <Card.Img variant="top" src={weatherData.forecast.forecastday[1].day.condition.icon} alt={'asdsadas'} />
                <Card.Body>
                  <Card.Title className="cardTitle">{weatherData.location.name} - <span>{weatherData.forecast.forecastday[1].day.condition.text}</span></Card.Title>
                  <Card.Text className="cardText">
                    <p>{weatherData.forecast.forecastday[1].date}</p>
                    <p>Ave. Temp: <h2>{weatherData.forecast.forecastday[1].day.avgtemp_c}°</h2></p>
                    <p>Sunrise:  {weatherData.forecast.forecastday[1].astro.sunrise}</p>
                    <p>Sunset:  {weatherData.forecast.forecastday[1].astro.sunset}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cards" >
                <Card.Img variant="top" src={weatherData.forecast.forecastday[2].day.condition.icon} alt={'asdsadas'} />
                <Card.Body>
                  <Card.Title className="cardTitle">{weatherData.location.name} - <span>{weatherData.forecast.forecastday[2].day.condition.text}</span></Card.Title>
                  <Card.Text className="cardText">
                    <p>{weatherData.forecast.forecastday[2].date}</p>
                    <p>Ave. Temp: <h2>{weatherData.forecast.forecastday[2].day.avgtemp_c}°</h2></p>
                    <p>Sunrise:  {weatherData.forecast.forecastday[2].astro.sunrise}</p>
                    <p>Sunset:  {weatherData.forecast.forecastday[2].astro.sunset}</p>
                  </Card.Text >
                </Card.Body>
              </Card>         
            </div>
            <button className="buttonTop" onClick={() => {
              animateScroll.scrollToTop(); 
            }}>Back the Top!</button>
          </div>
        </div>
      )
  }
}
