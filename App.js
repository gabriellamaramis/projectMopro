import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreenMakanan from './screens/HomeScreenMakanan';
import ImageScreenMakanan from './screens/ImageScreenMakanan';
import ImageScreenMinuman from './screens/ImageScreenMinuman';
import ImageScreenEs from './screens/ImageScreenEs';


const navigator = createStackNavigator({
  Home: HomeScreenMakanan,
  ImageMakanan: ImageScreenMakanan,
  ImageMinuman: ImageScreenMinuman,
  ImageEs: ImageScreenEs
},{  
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Rumah Makan Unklab',
    alignItems: 'center',
    justifyContent: 'center',

    headerStyle: {
    backgroundColor : 'black'
    }
  }
});

export default createAppContainer(navigator);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


