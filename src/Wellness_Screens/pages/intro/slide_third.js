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
          source={require("../../../assets/spritual.png")}
        />
        
       <Text style={styles.text1}>Measure !</Text>
     <Text style={styles.textDesc1}>Measure your wellness with our world class wellness tools</Text>
         
        </View>
    )
  }
}