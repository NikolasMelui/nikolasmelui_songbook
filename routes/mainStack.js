import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import SongScreen from "../screens/SongScreen";

const Stack = createStackNavigator()

import songsList from "../songsList";

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{
          headerStyle: {
            backgroundColor: 'darkslateblue',
          },
          headerTintColor: '#fff',
        }} component={HomeScreen} />
        {songsList.map((song, index) => (
          <Stack.Screen name={song.route} component={SongScreen} options={{
            title: song.title
          }} key={index} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;
