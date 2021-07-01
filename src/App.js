// @flow

import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Home from './components/Home';

const App = (): Node => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Home color="#87ceeb" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
