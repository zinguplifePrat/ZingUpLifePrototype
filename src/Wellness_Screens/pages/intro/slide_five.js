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
          source={require("../../../assets/social.png")}
        />
        
       <Text style={styles.text1}>Share !</Text>
     <Text style={styles.textDesc1}>Share and Take help from our globally recognized community of experts and wellness Enthusiastics</Text>
         
        </View>
    )
  }
}