import React from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

const Search = props => {
  return (
    <View style={styles.searchView}>
      <Icon
        name="assistant-navigation"
        size={30}
        color="black"
        style={styles.icon}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="black"
        contentVerticalAlignment="center"
        {...props}
        style={styles.textInput}
      />
      <TouchableOpacity>
        <OcticonsIcon name="search" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 20,
  },
  icon: {marginRight: 10},
  textInput: {
    marginRight: 10,
    backgroundColor: '#dcdcdc',
    width: 280,
    height: 35,
    textAlign: 'right',
  },
});
