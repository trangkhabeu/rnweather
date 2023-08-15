import axios from 'axios';

const API_Key = '828468ae6d6b26f1326fd95b25096b70';
const getWeather = async cityName => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getWeather;
