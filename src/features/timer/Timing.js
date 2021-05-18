import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ changeTime }) => {
  return (
    <>
      <View style={styles.timimgButton}>
        <RoundedButton size={75} title='10' onPress={() => changeTime(10)} />
      </View>
      <View style={styles.timimgButton}>
        <RoundedButton size={75} title='15' onPress={() => changeTime(15)} />
      </View>
      <View style={styles.timimgButton}>
        <RoundedButton size={75} title='20' onPress={() => changeTime(20)} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  timimgButton: {
    flex: 1,
    alignItems: 'center',
  },
});
