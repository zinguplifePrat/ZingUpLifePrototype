import React, { Component } from "react";
import { View ,Image ,Dimensions} from 'react-native';
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
  ListItem,
  CheckBox,
  Body
} from "native-base";

import styles from "./styles";
import IconFooter from "../../screens/footer/iconFooter";

class StrengthandEnergy12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: true,
      checkbox2:false,
      checkbox3:false,
      checkbox4:false

    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox1: false,
      checkbox2:true,
      checkbox3:false,
      checkbox4:false
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox1: false,
      checkbox2:false,
      checkbox3:true,
      checkbox4:false
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox1: false,
      checkbox2:false,
      checkbox3:false,
      checkbox4:true
    });
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
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Text style={{
              fontWeight:'bold',
              color:'white',
            }}> 
               Strength and Energy</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Progress.Bar progress={0.6} width={screenWidth}  borderWidth={0} color={'orange'} borderRadius={0}/>

          <Text
          style={{
            marginTop:5,
            padding:10,
            alignSelf:'center',
            fontFamily:'Cochin',
            fontSize:25
          }}
        >12.Do you feel rested and ready for the day, when you get up in the morning?
       </Text>
       <View style={{
         backgroundColor:"#fff",
         }}>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
            color="green"
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>Never feel rested when I wake up</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Some mornings</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
               <Text>Most mornings</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
            <Text>Yes ,Every morning</Text>
            </Body>
          </ListItem>
          </View>
          <View style={{
            marginTop:70,
           //justifyContent:'flex-end'

          }}>
          <Grid>
            <Col size={80}>
              <Button info  style={styles.mb15}
              onPress={() => this.props.navigation.navigate('StrengthandEnergy11')}>
                 <Text>Prev</Text>
              </Button> 
            </Col>
            <Col size={50}>
              <Button info style={styles.mb15}
                    onPress={() => this.props.navigation.navigate('StrengthandEnergy13')}>
              <Text>Next</Text>
              </Button>
            </Col>
          </Grid> 
        </View>
        </Content>

    <IconFooter />
      </Container>
    );
  }
}

export default StrengthandEnergy12;
