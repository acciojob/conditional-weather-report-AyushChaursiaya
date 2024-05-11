import React from "react";

const WeatherDisplay = ({weather}) => {
    const {temperature, conditions} = weather;

    const tempreatureColor = temperature > 20 ? "red" : "blue";

    return (<div>
        <p style={{color: tempreatureColor}}>Temperature: {temperature}°C </p>
        <p>Conditions: {conditions} </p>
    </div>)
}

export default WeatherDisplay;