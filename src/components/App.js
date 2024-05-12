
// import React, { useEffect, useState } from "react";
// import './../styles/App.css';
// import WeatherDisplay from "./WeatherDisplay.js";

// // const App = () => {
// //   // { temperature: 25, conditions: "Sunny" }
// //   const [weatherData, setWeatherData] = useState({temperature: 0, conditions: ""});

// //   const fetchWeatherData = async () => {
// //     await new Promise((resolve) => {
// //       setTimeout(resolve, 1000);
// //     })

// //     setWeatherData({temperature: 25, conditions: "Sunny"});
// //   }

// //   useEffect(() => {
// //     fetchWeatherData();
// //   }, [])

// //   return (
// //     <div>
// //         <h1>Weather Report</h1>
// //         <WeatherDisplay weather={weatherData} />
// //     </div>
// //   )
// // }

// // export default App


import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
const App = () => {
  const [weather, setWeather] = useState({temperature: 20, conditions: "Sunny"});
  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, [])
  
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weather={weather} />
    </div>
  )
}
export default App;