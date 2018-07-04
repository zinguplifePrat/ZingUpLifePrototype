import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import styles from './styles'
import {
    Footer,
    FooterTab,
    Button
  }from 'native-base';
export default class Slide_Page extends Component {
  render() {
    return (
        <View style={styles.slide1}>
        <Image
          style={styles.logo1}
          source={require("../../../assets/zingup.png")}
        />
        
       <Text style={styles.text1}>Welcome to Zing Up Life!</Text>
     <Text style={styles.textDesc1}>Your One stop destination to attain holistic wellbeing</Text>
         
        </View>
    )
  }
}