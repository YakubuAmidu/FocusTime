import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedeButton } from '../../components/RoundedButton';

const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Things we'v focused on</Text>
      </SafeAreaView>
    </>
  );
};

export default FocusHistory;
