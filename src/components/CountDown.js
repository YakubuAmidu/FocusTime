import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minuetesToMillis = (min) => min * 1000 * 60;

export const CountDown = ({ minutes = 20, isPaused }) => {
  return <Text style={styles.text}>CountDown timer goes here</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
