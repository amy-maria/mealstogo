import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Platform,
} from 'react-native';
import { StatusBar as ExposStatusBar } from 'expo-status-bar';
import React from 'react';

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>One</Text>
        </View>
        <View style={styles.body}>
          <Text>Two</Text>
        </View>
      </SafeAreaView>
      <ExposStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'green',
  },
});
