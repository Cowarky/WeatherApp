// import { forecast } from "@/services/API/forecast.ts";
import { getTemperatures } from "@/services/utils/utils.ts";

const getForecast = async () => {
  const options = {
    method: "GET", // Specify the HTTP method
    headers: {
      "Content-Type": "application/json", // Set the content type
    },
  };
  const response = await fetch("http://localhost:3000/temp", options);
  if (!response.ok) {
    console.log("error");
  }
  const data = await response.json();
  // console.log(data.hourly.time[1]);
  return getTemperatures(data.hourly);
};

export default getForecast;
