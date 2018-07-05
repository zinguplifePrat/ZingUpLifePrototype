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
          source={require("../../../assets/emotional.png")}
        />
        
       <Text style={styles.text1}>Be Aware !</Text>
     <Text style={styles.textDesc1}>Access the rich Knowledge repository and know wellness like never before</Text>
         
        </View>
    )
  }
}