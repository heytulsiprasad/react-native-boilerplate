// @flow

import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import ColorBox from './components/ColorBox';

const App = (): Node => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ColorBox name="Pink" color="#ffc0cb" />
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
    padding: 20,
  },
});

export default App;
