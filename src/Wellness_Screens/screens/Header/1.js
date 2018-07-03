import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Image,
  Grid,
  ProgressBarAndroid,
  View,
  StyleSheet
} from "native-base";
import styles from "./styles";

class Header1 extends Component {
  render() {
    
    return (

      <Container style={styles.container}>
         {/* <ImageBackGround source = {require('../../Images/1.jpg')} style={{width: '100%', height: '100%'}} /> */}
       
        <Header>
          <Left />
          <Body>
            <Title>Your Stats</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button rounded success style={styles.mb15}>
            <Text>All</Text>
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
        
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
       
      </Container>
    );
  }
}



export default Header1;
