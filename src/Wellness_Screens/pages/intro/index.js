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
  checkEnd(index){
    if(index==4){
      this.props.navigation.navigate("DrawerOpen");
    }
  }
  render(){
    const classState =this;
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={true} autoplayTimeout={2} 
      onIndexChanged={(index)=>{
        if(index==4){
          setTimeout(function(){
            classState.props.navigation.navigate("DrawerOpen");
          },2000);
          
        }
      }}>
       <Page_ONE />
       <Page_TWO />
       <Page_THREE />
       <Page_FOUR />
       <Page_FIVE />
       {/* <Page_SIX /> */}
      </Swiper>
    );
  }
}
