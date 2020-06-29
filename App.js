import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./components/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Hello, Dolly!</Text>
    </View >)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 60
  },
  text: {
    color: 'darkslateblue',
    display: 'flex',
    paddingTop: 300,
    fontSize: 30,
    textAlign: 'center'
  }
})

export default App;
