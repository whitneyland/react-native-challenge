import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pallette} from './utils/colors';

export const PrevNextButtons = props => {
  const {sound, setSoundName} = props;
  const soundNames = ['meow', 'kittenMeow', 'sadMeow', 'angryMeow'];

  const setSound = position => {
    let meow;
    let currentSound = soundNames.indexOf(sound);

    if (position === 'next') {
      const index = currentSound + 1;
      meow = index > soundNames.length - 1 ? soundNames[0] : soundNames[index];
    } else if (position === 'prev') {
      const index = currentSound - 1;
      meow = index < 0 ? soundNames[soundNames.length - 1] : soundNames[index];
    }
    setSoundName(meow);
  };

  const nameTranslation = {
    meow: 'Meow',
    angryMeow: 'Angry Meow',
    kittenMeow: 'Kitten Meow',
    sadMeow: 'Sad Meow',
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          borderColor: '#C498F4',
          paddingVertical: 50,
        }}
        onPress={() => setSound('prev')}>
        <Text style={{fontSize: 70}}>⏪</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: pallette.blue,
          backgroundColor: pallette.blue,
          paddingVertical: 20,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>
          {nameTranslation[sound]}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          borderColor: '#C498F4',
          paddingVertical: 20,
        }}
        onPress={() => setSound('next')}>
        <Text style={{fontSize: 70}}>⏩</Text>
      </TouchableOpacity>
    </View>
  );
};
