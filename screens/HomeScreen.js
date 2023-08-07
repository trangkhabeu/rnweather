import {
  StyleSheet,
  View,
  Text,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from '../component/Search';
import APIWeather from '../api/APIWeather';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [cityName, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApiWeather('Hokkaido');
  }, []);

  const getApiWeather = async data => {
    try {
      setLoading(true);
      const res = await APIWeather(data);
      setWeather(res);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = text => {
    const jpText = /[^\x01-\x7E\xA1-\xDF]/;
    if (jpText.test(text)) {
      Alert.alert('半角英数で入力してください');
    } else {
      setCity(text);
    }
  };

  const weatherImageMapping = {
    Clear: require('../assets/clear.jpg'),
    Clouds: require('../assets/cloudy.jpg'),
    Rain: require('../assets/rainy.jpg'),
    Snow: require('../assets/snowy.jpg'),
    Thunder: require('../assets/thunder.jpg'),
    Haze: require('../assets/haze.jpg'),
  };
  const convertWeatherToBackgroundImage = weather => {
    return weatherImageMapping[weather] || weatherImageMapping.Clear;
  };

  if (error) {
    return <Text style={styles.error}>Error!!!</Text>;
  }

  return (
    <SafeAreaView style={styles.overView}>
      <ImageBackground
        source={convertWeatherToBackgroundImage(weather.weather?.[0].main)}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.container}>
          <View>
            <Search
              onChangeText={handleInputChange}
              value={cityName}
              onSubmitEditing={() => getApiWeather(cityName)}
            />
            <View style={styles.content}>
              {loading && (
                <View>
                  <ActivityIndicator size={'large'} color={'#000'} />
                </View>
              )}
              {weather && (
                <View style={styles.weatherInfo}>
                  <Text style={styles.temperature}>
                    {Math.round(weather.main?.temp).toString().slice(0, 2)}°C
                  </Text>
                  <Text style={styles.city}>{weather.name}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  overView: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  temperature: {
    fontSize: 60,
    marginTop: 200,
  },
  content: {
    flexDirection: 'row-reverse',
  },
  city: {
    flexDirection: 'row',
    fontSize: 30,
  },
  error: {
    fontSize: 18,
    color: 'red',
    marginVertical: 20,
  },
});
