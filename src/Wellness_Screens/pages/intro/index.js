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
import Page_FOUR from './slide_four';
import Page_FIVE from './slide_five';
import Page_SIX from './slide_six';
export default class Index extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
       <Page_ONE />
       <Page_TWO />
       <Page_THREE />
       <Page_FOUR />
       <Page_FIVE />
       <Page_SIX />
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('myproject', () => Swiper);