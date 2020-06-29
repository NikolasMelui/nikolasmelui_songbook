import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "./components/Header";
import ListSongs from "./components/ListSongs";

const App = () => {

  const [songs, setSong] = useState([
    {
      title: "Hello, Dolly",
      text: `Oh, hello Dolly, well, hello Dolly
It's so nice to have you back where you belon
You're lookin' swell, Dolly, I can tell, Dolly
You're still glowin', you're still crowin', you're still goin' strong
We feel the room swayin' while the band's playin'
One of your old favorite songs from way back when
So, take her wrap fellas, find her an empty lap, fellas
Dolly won't never ever go away again
Hey, hello Dolly, well, hello Dolly
It's really nice to have you back where you belong
Girl, you're lookin' swell, Dolly, I can tell, Dolly
Still glowin', still crowin', you're still goin' strong…`
    }
  ])

  return (
    <View style={styles.container}>
      <Header title="SongBook" />
      <FlatList data={songs} renderItem={({ item }) => <ListSongs song={item} />} keyExtractor={(song, index) => index.toString()} />
    </View >)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 60
  },
})

export default App;
