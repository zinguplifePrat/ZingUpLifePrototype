import React, { Component } from "react";
import {  ScrollView,View,Image,ImageBackground,Animated,Dimensions,TouchableHighlight} from 'react-native';
import * as Progress from 'react-native-progress';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";



class ThoughtControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }
  render() {
    let screenWidth = Dimensions.get('screen').width;
    let screenHeight = Dimensions.get('screen').height;
    
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Text>Thought Control</Text>
          </Body>
          <Right />
        </Header>

        <Content> 
        
            <ScrollView maximumZoomScale={3} minimumZoomScale={0.2} keyboardDismissMode='on-drag'>
            <View>
                {/* <Image
                            style={{
                                flex:1,
                                marginTop:10,
                                height:300,
                                width:screenWidth,
                                borderColor:'red',
                                borderWidth:2
                                                             
                            }}
                            source={require('../../Images/circle1.png')}
                                resizeMode="stretch"       
                        >    
                </Image> */}

                <View
                    style={{
                        height:screenHeight-400,
                        width:screenWidth,
                       backgroundColor:'#00bfff',
                        

                    }}
                >
                <Text style={{
                    //color:'#007aff',
                    color:'white',
                    padding:5,
                    fontSize:25,
                    fontFamily:'Cochin',
                    textAlign:'center',
                    marginTop:10}}
                >Your Score</Text>
                    <Image
                            style={{
                                flex:1,
                                marginTop:10,
                                height:80,
                                width:150,
                                marginLeft:100                               
                            }}
                            source={require('../../Images/70trans.png')}
                                resizeMode="stretch"       
                        >    
                </Image>
                <Text 
                    style={{
                        padding:10,
                        fontFamily:'cochin',
                        fontSize:20,
                        color:'white',
                        
                    }}>
                    You lead a healthy lifestyle and have a 
                    good control over self.
                </Text>
                </View>
            </View>

            <View style={{flex:1,flexDirection:"row",justifyContent:'space-between'}}>
                    <View style={{flex:1,height:180,marginLeft:10}}>
                        {/* <Text>Strong Point</Text> */}
                        <ImageBackground
                            style={{
                                flex:1,
                                marginTop:10
                            }}
                            source={require('../../Images/drawer-cover.png')}
                                resizeMode="stretch"       
                        >
                        <Text style={{color:'white',padding:10,marginTop:10,fontSize:20}}>
                            Strong Points
                        </Text>
                        <Text style={{color:'white',fontSize:15,marginLeft:10}}>
                                Self Control
                            </Text>
                        </ImageBackground>
                        
                    </View>
                    <View style={{flex:0.1}}/>
                    
                    <View style={{flex:1,height:180,marginRight:10}}>
                        <ImageBackground
                                style={{
                                    flex:1,
                                    marginTop:10,
                                    borderRadius: 10
                                    
                                }}
                                source={require('../../Images/swiper-1.png')}
                                    resizeMode="stretch"
                            >
                            <Text style={{color:'white',padding:10,marginTop:10,fontSize:20}}>
                                Weak Points
                            </Text>
                            <Text style={{color:'white',fontSize:15,marginLeft:10}}>
                                Improve Immunity
                            </Text>
                        </ImageBackground>    
                    </View>
                </View>

            
           <Text
            style={{
                color:'white',
                backgroundColor:'#007aff',
                padding:5,
                marginTop:10,
                fontSize:25,
                fontFamily:'Cochin'
            }}>
            Recommended Action </Text>

                <View style={{flex:1,flexDirection:"row",justifyContent:'space-between'}}>
                    <View style={{flex:1,height:180,marginLeft:10}}>
                        {/* <Text>Strong Point</Text> */}
                        <ImageBackground
                            style={{
                                flex:1,
                                marginTop:10
                            }}
                            source={require('../../Images/sports.jpeg')}
                                resizeMode="stretch"       
                        >
                        <Text style={{color:'white',padding:10,marginTop:10,fontSize:18}}>
                           Sweat It Out
                        </Text>
                        <Text style={{color:'white',fontSize:15,marginLeft:10}}>
                                Engage in Sports
                            </Text>
                        </ImageBackground>
                        
                    </View>
                    <View style={{flex:0.1}}/>
                    
                    <View style={{flex:1,height:180,marginRight:10}}>
                        <ImageBackground
                                style={{
                                    flex:1,
                                    marginTop:10,
                                    borderRadius:30,
                                }}
                                source={require('../../Images/healthyfood.jpg')}
                                    resizeMode="stretch"
                            >
                            <Text style={{color:'white',padding:10,marginTop:10,fontSize:18}}>
                                Improve Immunity
                            </Text>
                            <Text style={{color:'white',fontSize:15,marginLeft:10}}>
                                Eat Healthy
                            </Text>
                        </ImageBackground>    
                    </View>
                </View>
                
                <View style={{flex:1,flexDirection:"row",justifyContent:'space-between'}}>
                    <View style={{flex:1,height:180,marginLeft:10}}>
                        {/* <Text>Strong Point</Text> */}
                        <ImageBackground
                            style={{
                                flex:1,
                                marginTop:10
                            }}
                            source={require('../../Images/sleep.jpg')}
                                resizeMode="stretch"       
                        >
                        <Text style={{color:'white',padding:10,marginTop:10,fontSize:20}}>
                            Sleep Easy
                        </Text>
                        <Text style={{color:'white',fontSize:15,marginLeft:10}}>
                               Create a Schedule
                            </Text>
                        </ImageBackground>
                        
                    </View>
                    <View style={{flex:0.1}}/>
                    <View style={{flex:1,height:180,marginRight:10}}>
                        <ImageBackground
                                style={{
                                    flex:1,
                                    marginTop:10,
                                    borderRadius:30
                                }}
                                source={require('../../Images/yoga.jpeg')}
                                    resizeMode="stretch"
                            >
                            <Text style={{color:'white',padding:10,marginTop:10,fontSize:20}}>
                               Sparkle & Shine
                            </Text>
                            <Text style={{color:'white',fontSize:15,marginLeft:10}}>
                               Practice Yoga
                            </Text>
                        </ImageBackground>    
                    </View>
                </View>
            </ScrollView>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ThoughtControl;
