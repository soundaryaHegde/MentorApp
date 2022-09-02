import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DisplayDetails from '../screens/DisplayDetails';
import DogDetails from '../screens/DogDetails';



export const AppTabNavigator = createBottomTabNavigator({
  DisplayDetails : {
    screen: DisplayDetails,
    navigationOptions :{
      
      tabBarLabel : "Donate Books",
    }
  },
  DogDetails: {
    screen: DogDetails,
    navigationOptions :{
     
      tabBarLabel : "Book Request",
    }
  }
});
