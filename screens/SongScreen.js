import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Button } from "react-native";

const Song = ({ route }) => {
  const { text } = route.params;
  return (
    <ScrollView style={styles.container} >
      <Text style={styles.text} >{text}</Text>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  text: {
    fontSize: 17,
  },

})

export default Song;
