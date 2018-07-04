import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';


import Swiper from 'react-native-swiper';
import Page_ONE from './slide_first';
import Page_TWO from './slide_second';
import Page_THREE from './slide_third';
export default class Index extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
       <Page_ONE />
       <Page_TWO />
       <Page_THREE />
      
        
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('myproject', () => Swiper);