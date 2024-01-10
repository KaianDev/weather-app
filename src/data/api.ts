import axios from "axios";

export const getWeatherInfos = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      city
    )}&appid=b63f570375ef3f971314293d60afb0a0&units=metric&lang=pt_br`
  );
  return response.data;
};
