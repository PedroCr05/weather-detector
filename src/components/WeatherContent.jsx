import "./WeatherContent.css";

const WeatherContent = ({ forecast }) => {
  return (
    <div>
      <section className="weather">
        <h2>Today is {forecast.day}</h2>
        <img src={forecast.img} alt={forecast.imgAlt} />
        <article>
          <p>
            Conditions: <span>{forecast.conditions}</span>
          </p>
          <p>
            Time: <span>{forecast.time}</span>
          </p>
        </article>
      </section>
    </div>
  );
};

export default WeatherContent;
