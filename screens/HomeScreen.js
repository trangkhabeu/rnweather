import {StyleSheet, View, Text, Alert, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from '../component/Search';
import APIWeather from '../api/APIWeather';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getApiWeather();
  }, []);

  const getApiWeather = async cityName => {
    try {
      setLoading(true);
      const data = await APIWeather(cityName);
      setWeather(data);
    } catch (err) {
      console.log(err);
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
      setCityName(text);
    }
  };

  if (error) {
    return <Text style={styles.error}>Error!!!</Text>;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <View style={styles.content}>
          <Search
            onChangeText={handleInputChange}
            value={cityName}
            onSubmitEditing={getApiWeather}
          />
          {loading && (
            <View>
              <ActivityIndicator size={'large'} color={'#000'} />
            </View>
          )}
          {weather && (
            <View style={styles.weatherInfo}>
              <Text style={styles.temperature}>
                {weather.main?.temp.toFixed(0)}°C
              </Text>
              <Text style={styles.city}>{weather.name}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  temperature: {
    fontSize: 60,
    marginTop: 200,
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
