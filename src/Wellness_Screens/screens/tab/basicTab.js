import React, { Component } from "react";
import {Image,ImageBackground, Dimensions} from 'react-native';
//import Icon from 'react-native-vector-icons';
import {
  Container,Header,Title,Icon,Button,Tabs,Tab,Right,Left,Body,Content,Text,Card,CardItem,Grid,
  Fab,View,IconNB,List,ListItem,Thumbnail, Row} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import styles from '../Header/styles'
//import styles from '../button/styles'
const walk = require("../../Images/walk.png");
    const run = require("../../Images/run.png");
    const sleep = require("../../Images/sleep.png");
   const diet1 = require("../../Images/amrita.jpg");
   const diet2 = require("../../Images/ruchi.jpg");
   const diet3 = require("../../Images/ryan.jpg");
      class BasicTab extends Component {
  render() {
    
    return (
          
      <Container style={{position:'relative'}}>
         <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> DashBoard</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
        
          <Tab heading="Stats">
        <Container>
        <View style ={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            flexDirection: 'column',
            position:'absolute'}}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
             height:Dimensions.get('screen').height,
           //  flex: 1,
            // resizeMode: 'cover'
        }}
          source={require('../../Images/1.jpg')}
        />
        </View>
        <Content padder>
         
          <Button rounded success style={styles.mb15}>
            <Text>All </Text>
          </Button>
       
          <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text style={{textDecorationLine:"underline" }}>Your Progress </Text>
                <Text>Goals: </Text>
                <Text>Assessment:</Text>
                <Text>Strong Area: PHYSICAL WELL BEING</Text>
                <Text>Weak Area: EMOTIONAL WELL BEING</Text>
                <Text>Pending  Tasks: <Text style={{textDecorationLine:"underline"}}>12</Text></Text>
              </Body>
            </CardItem>
          </Card>
          <Grid>
          <Card style={styles.mb}>
            <CardItem style={{ flexDirection:'row'}}>
              <Body>
                <Text style={{textDecorationLine:"underline" }}>Cycling </Text>
                <Text>Goals: </Text>
                <Text style={{textDecorationLine:"underline" }}>12/20 KM, 4 days left</Text>
              </Body>
              
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem style={{ flexDirection:'row'}}>
              <Body>
                <Text style={{textDecorationLine:"underline" }}>SLEEP TRACK</Text>
                <Text style={{textDecorationLine:"underline" }}>Actual: 5 hrs </Text>
                <Text style={{textDecorationLine:"underline" }}>Ideal: 5 hrs </Text>
                <Text>Tracked by fitbit band</Text>
              </Body>
            </CardItem>
          </Card>
          </Grid>

          <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text style={{textDecorationLine:"underline" }}>STRENGTH AND ENERGY ASSESSMENT </Text>
                <Text style={{textDecorationLine:"underline" }}>Score:<Text>80%</Text>(30% Improvement since 15th May) </Text>
                <Text>Retake in 3 days</Text>
              </Body>
            </CardItem>
          </Card>
          
        </Content>
        <View style={{position:"relative"}}>
           <Fab position = "bottomRight">
             <IconNB  name="md-add" />
           </Fab>
        </View>  
        
       </Container>
          </Tab>
          <Tab heading="Suggestion">
         
       <Container style={styles.container}>

           <View style ={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            flexDirection: 'column',
            position:'absolute'}}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
             height:Dimensions.get('screen').height,
           //  flex: 1,
            // resizeMode: 'cover'
        }}
          source={require('../../Images/1.jpg')}
        />
        </View>
         <Content>
          <Card style={styles.mb}>
            <CardItem>
               <Left>
                  <Thumbnail square size={55} source={walk} />
            
              <Body>
                <Text style={{color:'darkblue'}}>Take 8000 steps per week </Text>
                <Text>Score:Suggested by Seema sharma</Text>
             </Body>
              </Left>
            </CardItem>
            <Grid>
                <Left style={{padding:5}}>
                   <Text>12:30 , Yesterday</Text>
                </Left>
                <Right>
                  <Row style={{padding:5}}>
                  <IconNB  style={{paddingRight:15}} name="md-share" /> 
                  <IconNB  name="md-add" />
                  </Row>
                </Right>
              </Grid>
          </Card>
          <Card style={styles.mb}>
            <CardItem>
               <Left>
                  <Thumbnail square size={55} source={run} />
            
              <Body>
                <Text style={{color:'darkblue'}}>Run 3 kms per week </Text>
                <Text>Score:Suggested by Sheik moyeenuddin</Text>
             </Body>
              </Left>
            </CardItem>
            <Grid>
                <Left style={{padding:5}}>
                   <Text>21:35, Today</Text>
                </Left>
                <Right>
                  <Row style={{padding:5}}>
                  <IconNB style={{paddingRight:15}} name="md-share" /> 
                  <IconNB  name="md-add" />
                  </Row>
                </Right>
              </Grid>
          </Card>

          <Card style={styles.mb}>
            <CardItem>
               <Left>
                  <Thumbnail square size={55} source={sleep} />
            
              <Body>
                <Text style={{color:'darkblue'}}>Sleep 6 hours a day for a week </Text>
                <Text>Score:Suggested by Pratian Technologies</Text>
             </Body>
              </Left>
           </CardItem>
           <Grid>
                <Left style={{padding:5}}>
                   <Text >09:35, Today</Text>
                </Left>
                <Right>
                  <Row style={{padding:5}}>
                  <IconNB style={{paddingRight:15}} name="md-share" /> 
                  <IconNB  name="md-add" />
                  
                  </Row>
                </Right>
              </Grid>
          </Card>
              <Icon name="star"/>
          </Content>

      </Container>
          
          </Tab>
          <Tab heading="Schedule">
          <View style ={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            flexDirection: 'column',
            position:'absolute'}}>
        <Image
          style={{
            width: Dimensions.get('window').width,
             height:Dimensions.get('window').height,
             flex: 1,
            resizeMode: 'cover'
        }}
          source={require('../../Images/1.jpg')}
        />
        
        </View>
          <Container style={ {position:'relative',padding:15,marginBottom:250}}>
          
          <Card style={styles.mb}>
                
                <Text style={{color:'green',textAlign:'center',fontWeight:'bold',fontSize:20}}>Appointment Scheduled</Text>
              <View>
                <Text style={{fontWeight:'bold'}}> Date</Text>
                <Text> Thursday, 20th Sept 2018 </Text>
             </View>
            <CardItem>
               <Left>
                  <Thumbnail circle size={80} source={diet1} />
               <Body>
                <Text style={{color:'darkblue'}}>Aarohi Sharma </Text>
                <Text>Certified & License Zumba Instructor</Text>
              </Body>
              <IconNB  name="md-star" /><IconNB  name="md-star" /><IconNB  name="md-star" /><IconNB  name="md-star" />
              </Left>
           </CardItem>

           {/* <View>
              <Button bordered primary style={{alignSelf:'center',justifyContent:'space-evenly'}}>
                <Text>Cancel Booking</Text>
              </Button>

              <View style={{padding:20}}>
              <Button bordered primary style={{alignSelf:'center',justifyContent:'space-around'}}>
                <Text>Reschedule Appointment</Text>
              </Button>
              </View>
           </View> */}
           <Text><Text style={{fontWeight:'bold'}}>Venue:</Text>201/B,Park Avenue, Bandra Kurla Andheri(E), Mumbai</Text>
           <Text style={{marginTop:20}}><Text style={{fontWeight:'bold'}}>Note:</Text>Please bring your previous reports</Text>
         </Card>
       </Container>
          
     </Tab>
     </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
