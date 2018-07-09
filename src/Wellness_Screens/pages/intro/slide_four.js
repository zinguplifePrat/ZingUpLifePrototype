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
          source={require("../../../assets/intellectual.png")}
        />
        
       <Text style={styles.text1}>Take Action</Text>
     <Text style={styles.textDesc1}>Take Suggestive action towards your well being from our top notch suggestion engine</Text>
         
        </View>
    )
  }
}