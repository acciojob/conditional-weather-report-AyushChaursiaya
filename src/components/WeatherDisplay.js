import React from "react";

const WeatherDisplay = ({weather}) => {
    const {temperature, conditions} = weather;

    const tempreatureColor = temperature > 25 ? "red" : "blue";

    return (<div>
        <p style={{color: tempreatureColor}}>Temperature: {temperature} </p>
        <p>Conditions: {conditions} </p>
    </div>)
}

export default WeatherDisplay;