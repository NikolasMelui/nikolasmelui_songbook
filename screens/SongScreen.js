import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Song = ({ route, navigaiton }) => {
  return (
    < View style={styles.container} >
      <Text>{route.params.title}</Text>
      <Text>{route.params.text}</Text>
    </ View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})

export default Song;
