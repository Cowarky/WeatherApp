// import { forecast } from "@/services/API/forecast.ts";
import { getTemperatures } from "../utils/utils.ts";

const getForecast = async () => {
  const options = {
    method: "GET", // Specify the HTTP method
    headers: {
      "Content-Type": "application/json", // Set the content type
    },
  };
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&hourly=temperature_180m",
    options,
  );
  
  if (!response.ok) {
    console.log("error");
  }
  const data = await response.json();
  // console.log(data.hourly.time[1]);
  return getTemperatures(data.hourly);
};

export default getForecast;
