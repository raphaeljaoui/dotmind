import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home/Home';
import Favoris from './Screen/Favoris/Favoris';
import Spalsh from './Screen/Splash/Spalsh';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused}) => {
        let iconName;
        let color;

        if (route.name === 'Home') {
          iconName = require('./image/home.png')
          color = focused ?  "tomato" : "black"
        } else if (route.name === 'Favoris') {
          iconName = require('./image/coeur.png')
          color = focused ?  "tomato" : "black"
        }

        return <Image source={iconName} style={{width:30, height:30, tintColor:color}}/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favoris" component={Favoris} />
      </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Spalsh} options={{headerShown:false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
