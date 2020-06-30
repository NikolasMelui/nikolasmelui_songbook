import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import ListSongs from "../components/ListSongs";

import songsList from "../songsList"

const Home = ({ navigation }) => {
  const [songs] = useState(songsList)

  return (
    <View style={styles.container}>
      <FlatList data={songs} renderItem={({ item }) => <ListSongs song={item} navigation={navigation} />} keyExtractor={(song, index) => index.toString()} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})

export default Home;
