import "./App.css";
import WeatherContent from "./components/WeatherContent/WeatherContent.jsx";

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];

  return (
    <>
      <header>
        <h1>Weather Forecaster</h1>
      </header>
      <main>
        {/* Make sure when you're passing a key. Can you make sure that there is a unique tag or just call the index attribute. */}
        {weatherForecasts.map((forecast, idx) => (
          <WeatherContent key={idx} forecast={forecast} />
        ))}
      </main>
    </>
  );
};

export default App;
