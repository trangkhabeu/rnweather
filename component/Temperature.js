import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Temperature = () => {
  return (
    <View style={{flex: 2}}>
      <View style={styles.container}>
        <Text style={styles.temperature}>°C</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.city}></Text>
      </View>
    </View>
  );
};

export default Temperature;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
  },
  temperature: {
    fontSize: 60,
    marginTop: 200,
  },
  city: {
    flexDirection: 'row',
    fontSize: 30,
  },
});
