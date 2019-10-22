import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to the Vet Radar front end test 👋
      </Text>
      <Text style={styles.text}>Edit `src/App.tsx` and save to reload.</Text>
      <Text style={styles.text}>Products</Text>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontFamily: 'System'
  }
});
