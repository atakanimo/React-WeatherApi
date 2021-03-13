import './App.scss';
import './AppMedia.scss';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import NextDay from './Components/NextDays/NextDay'
import { render } from '@testing-library/react';
import { Animated } from "react-animated-css";
import { animateScroll } from 'react-scroll';
import axios from 'axios';

function App() {

  const key = "93c797befa5240568ad213645210903";
  const [inputCity, setCity] = useState("");
  const [weatherData, setWeather] = useState("");
  let value = inputCity;

  useEffect(() => {
    getData();
  }, [inputCity]);

  function getData() {
    axios.get("https://api.weatherapi.com/v1/forecast.json?key=" + key + "&q=" + inputCity + "&days=3")
    .then(res => {
      const data = res.data;
      setWeather(data);
      console.log(data);
    })
  }

  return (
    <div className="App">
      <form className="SearchForm">
        <Animated animationIn="bounce" animationOut="fadeOut" animationInDelay="300"  isVisible={true}>
          <input
            placeholder="
          Please Enter a City!"
            className="search"
            onChange={(event) => {
              setCity(event.target.value);
              value = event.target.value;
              console.log(value);
            }}
          />
        </Animated>
        {weatherData.current && (
          <>
            {/* Today */}
            <div className="content" >
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay="200" isVisible={true}>
                <div className="Card">
                  <div >
                    <Card className="cards" >
                      <Card.Img variant="top" src={weatherData.current.condition.icon} alt={'asdsadas'} />
                      <Card.Body>
                        <hr />
                        <Card.Title className="cardTitle">{weatherData.location.name} <br></br>  <span>{weatherData.current.condition.text}</span></Card.Title>
                        <Card.Text className="cardText">
                          <h2>{weatherData.current.temp_c}°</h2>
                          <hr />
                          <p>Reel Feel: {weatherData.current.feelslike_c}</p>
                        </Card.Text>
                        <hr></hr>
                        <Button className="cardButton" variant="dark">Show Air Quality</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <Animated animationIn="bounce" animationOut="fadeOut" animationInDelay="800"  isVisible={true}>
                <Button className="Get3Days" variant="dark" onClick={() => {
                  animateScroll.scrollToBottom();
                  render(
                    <NextDay
                      weatherData={weatherData}
                      city={value}
                    />
                  )
                }}>Click For 3 Days Forecast</Button>{' '}
                </Animated>
              </Animated>

            </div>
          </>
        )
        }

      </form>
    </div>
  );
}

export default App;
