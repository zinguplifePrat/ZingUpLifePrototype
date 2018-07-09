import React, { Component } from "react";
import {Image,ImageBackground, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {
  Container,Header,Title,Icon,Button,Tabs,Tab,Right,Left,Body,Content,Text,Card,CardItem,Grid,
  Fab,View,IconNB,List,ListItem,Thumbnail, Row} from "native-base";
import TabOne from "./tabOne";
import Carousel from 'react-native-snap-carousel';
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import styles from '../Header/styles'
import BasicToast from "../toast/basic-toast";
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
        <View style ={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            flexDirection: 'column',
            }}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
            height:170,
           //  flex: 1,
            // resizeMode: 'cover'
        }}
          source={require('../../Images/wellness.png')}
        />
        </View>
        <Content padder style={{backgroundColor:'#2e98b2'}}>
      
          {/* <Button rounded success style={styles.mb15}>
            <Text>All </Text>
          </Button> */}
       
          {/* <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text style={{textDecorationLine:"underline" }}>Your Progress </Text>
                <Grid style={{padding:20}}>
                  <Text>Goals:</Text>
                  <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f9fafc'} strokeCap={'square'} direction={'clockwise'} showsText ={true} progress={0.7} size={90} color={'#ed0461'}  />
                  
                  <Text>Assessment:</Text>
                  <Progress.Circle thickness={4} strokeCap={'square'} showsText ={true} progress={0.7} size={90} color={'green'}  />
                </Grid>
                <Progress.Bar progress={0.3} width={200} />
                <Text>Strong Area: PHYSICAL WELL BEING</Text>
                <Text>Weak Area: EMOTIONAL WELL BEING</Text>
                <Text>Pending  Tasks: <Text style={{textDecorationLine:"underline"}}>12</Text></Text>
              </Body>
            </CardItem>
          </Card> */}
          {/* <Text style={{textDecorationLine:"underline",textAlign:'center' }}>Your Progress </Text> */}
          
          <Card style={styles.mb}>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,fontWeight:'400'}}>Take 5000 Steps a day</Text>
                <Grid>
                  <Row>
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.5} size={30} color={'green'}  />
               
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.1} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={1} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.3} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.2} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.4} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={1} size={30} color={'green'}  />
                  </Row>
                  <Row >
                  <Text style={{paddingLeft:8}}>M</Text>
                  <Text style={{paddingLeft:16}}>T</Text>
                  <Text style={{paddingLeft:19}}>W</Text>
                  <Text style={{paddingLeft:21}}>T</Text>
                  <Text style={{paddingLeft:23}}>F</Text>
                  <Text style={{paddingLeft:20}}>S</Text>
                  <Text style={{paddingLeft:20}}>S</Text>
                  
                  </Row>
                  <Right style={{marginTop:-80,marginLeft:250}}>
                     <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f9fafc'} showsText ={true} progress={0.7} size={90} color={'#ed0461'}  />
                  </Right>  
                 </Grid>       
                    
              </Body>
              </CardItem>
            </Card>
        
            <Card style={styles.mb}>
            <CardItem>
                <Body>
                <Text style={{fontSize:15,fontWeight:'400'}}>Active 1 hr a day</Text>
                <Grid>
                  <Row>
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.5} size={30} color={'green'}  />
               
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.1} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={1} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.3} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.2} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={0.4} size={30} color={'green'}  />
                <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f2f2f2'}  progress={1} size={30} color={'green'}  />
                  </Row>
                  <Row >
                  <Text style={{paddingLeft:8}}>M</Text>
                  <Text style={{paddingLeft:16}}>T</Text>
                  <Text style={{paddingLeft:19}}>W</Text>
                  <Text style={{paddingLeft:21}}>T</Text>
                  <Text style={{paddingLeft:23}}>F</Text>
                  <Text style={{paddingLeft:20}}>S</Text>
                  <Text style={{paddingLeft:20}}>S</Text>
                  
                  </Row>
                  <Right style={{marginTop:-80,marginLeft:250}}>
                     <Progress.Circle thickness={4} borderColor={'#f9fafc'} unfilledColor={'#f9fafc'} showsText ={true} progress={0.7} size={90} color={'#ed0461'}  />
                  </Right>  
                 </Grid>       
                    
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
              
          </Content>

      </Container>
          
          </Tab>
          <Tab heading="Schedule">
       
                 <Container style={ {padding:15,backgroundColor:'#2e98b2'}}>
          
          <Card style={{marginBottom: 10,marginBottom:250}}>
                
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
                <Text>Certified  License Zumba Instructor</Text>
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
           <Text ><Text style={{fontWeight:'bold',marginLeft:5}}>Venue:</Text>201/B,Park Avenue Andheri(E), Mumbai</Text>
           <Text style={{marginTop:20,marginLeft:5}}><Text style={{fontWeight:'bold'}}>Note:</Text>Please bring your previous reports</Text>
         </Card>
       </Container>
          
     </Tab>
     </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
