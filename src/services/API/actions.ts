import { forecast } from "@/services/API/forecast.ts";

const getForecast = () => {
  const response = fetch(forecast);
  if (!response.ok) {
    console.log("error");
  }
  const data = response.json();
  console.log(data); // Process the data as needed
};

export default getForecast;
