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
        <OcticonsIcon
          name="search"
          size={30}
          color="black"
          style={styles.OcticonsIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    borderColor: '#ddd',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  icon: {marginHorizontal: 10},
  OcticonsIcon: {marginHorizontal: 10},
  textInput: {
    marginRight: 10,
    width: 250,
    height: 35,
    textAlign: 'right',
  },
});
