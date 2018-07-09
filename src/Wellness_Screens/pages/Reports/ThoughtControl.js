import React, { Component } from "react";
import {  ScrollView,View,Image,ImageBackground,Animated,Dimensions,TouchableHighlight} from 'react-native';
import * as Progress from 'react-native-progress';
import { Grid,Col,Row } from "react-native-easy-grid";

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
import IconFooter from "../../screens/footer/iconFooter";


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
          <Body >
            <Text style={{color:'white',fontWeight:'bold'}}>Strenght and Energy</Text>
          </Body>
          <Right />
        </Header>

        <Content> 
        
            <ScrollView maximumZoomScale={3} minimumZoomScale={0.2} keyboardDismissMode='on-drag'>
            <View>
                <View
                    style={{
                    //     height:screenHeight-400,
                    //     width:screenWidth,
                    //    backgroundColor:'#00bfff',
                    }}
                >
                
                     <ImageBackground
                            style={{
                                flex:1,
                                height:260,
                                width:screenWidth-20,
                                borderRadius:250/2,
                                marginLeft:10,
                                marginRight:10,
                                marginTop:5              
                            }}
                            source={require('../../Images/blue1.jpg')}
                                resizeMode="stretch"       
                        >     
                <Text style={{
                    //color:'#007aff',
                    color:'white',
                    padding:5,
                    fontSize:25,
                    fontFamily:'Cochin',
                    textAlign:'center',
                   }}
                >  <Icon name="star-half" style={{ color: "gold" }} />   Your Score  <Icon name="star-half" style={{ color: "gold" }} /></Text>
                <Image
                style={{
                        height:120,
                        width:120,
                        marginLeft:130,
                        marginTop:4,
                        //backgroundColor:'',
                        borderRadius:60,
                        borderColor:'white',
                        borderWidth:3
                        
                }}
                    source={require('../../Images/70trans.png')}
                    resizeMode="contain"
                >
                </Image>
                <Text 
                    style={{
                        padding:5,
                        fontFamily:'cochin',
                        fontSize:20,
                        color:'white',
                        textAlign:'center'
                        
                    }}>
                    You lead a healthy lifestyle and have a 
                    good control over self.
                    

                </Text> 
                
            
            <View style={{flex: 1, flexDirection: 'row',justifyContent:'space-between'}}>
                <View style={{width:50}}>
                    <Icon name="attach" style={{ color: "#fff",paddingLeft:20 }}/>
                    {/* <Text style={{fontSize:10,color:'black'}}>Share</Text> */}
                </View>
                <View style={{width:50}}>
                    <Icon name="attach" style={{ color: "#fff",paddingLeft:20 }}/>
                    {/* <Text style={{fontSize:10,color:'black'}}>Full Report</Text> */}
                </View>
                <View style={{width:50}}>
                    <Icon name="attach" style={{ color: "#fff",paddingLeft:20 }}/>
                    {/* <Text style={{fontSize:10,color:'black'}}>Assesments</Text> */}
                </View>
            </View>

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

           <Header style={{marginTop:10,textAlign:'left'}}> 
           <Text
            style={{
                color:'white',
                fontSize:25,
                fontFamily:'Cochin'
                ,flex:1
            }}>
            Recommended Actions </Text>
            </Header>

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
                                source={require('../../Images/healthy1.jpg')}
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
                            source={require('../../Images/night.jpg')}
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
                                source={require('../../Images/yoga1.jpg')}
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

<IconFooter />
      </Container>
    );
  }
}

export default ThoughtControl;
