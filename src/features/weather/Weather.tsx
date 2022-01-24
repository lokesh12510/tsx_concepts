import React from "react";
import axios from "axios";
import { weatherAPI } from "./WeatherAPI";

const Weather = () => {
  const [jsonData, setJsonData] = React.useState({});

  React.useEffect(() => {
    weatherAPI({ city: "tokyo", setJsonData: setJsonData });
  }, []);

  console.log(jsonData);

  return <div>
    
  </div>;
};

export default Weather;
