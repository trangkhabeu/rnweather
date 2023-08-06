import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

const Search = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        marginTop: 20,
      }}>
      <Icon
        name="assistant-navigation"
        size={30}
        color="black"
        style={{marginRight: 10}}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#d3d3d3"
        contentVerticalAlignment="center"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={{
          marginRight: 10,
          backgroundColor: '#dcdcdc',
          width: 280,
          height: 35,
          textAlign: 'right',
        }}
      />
      <TouchableOpacity>
        <OcticonsIcon name="search" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default Search;
