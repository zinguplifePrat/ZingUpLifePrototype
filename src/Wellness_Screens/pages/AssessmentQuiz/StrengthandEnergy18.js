import React, { Component } from "react";
import { View ,Image ,Dimensions} from 'react-native';
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

class StrengthandEnergy18 extends Component {
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
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          
        <View>
           {/* <Text>Content goes here</Text>  */}
          <Image
            style={{
              backgroundColor: '#ccc',
              // flex: 1,
              width: screenWidth,
              height: screenHeight,

              position: 'absolute',
              justifyContent: 'center',
            }}
            source={require('../../Images/lotus.jpg')}
          >
          </Image>
          <Text
          style={{
            backgroundColor: '#fff',
            fontSize: 10,
            padding:12,
            marginTop:150,
            backgroundColor:'green',

          }}
        >
          <Text style={{
            marginLeft:30,
            
          }}
          >18.How is your bowel movements?</Text>
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
              <Text>More than 3 watery stools a day</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Less than 3 movements a week</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
               <Text>More than once and less than 3 movements in a day</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
            <Text>1 movement in each day</Text>
            </Body>
          </ListItem>
          </View>
          <View style={{
            flexDirection: "row",
            margin:10,
            
            
          }}>
          <Button info style={styles.mb15}
          onPress={() => this.props.navigation.navigate('StrengthandEnergy17')}

          >
            <Text>Prev</Text>
          </Button>
          <Button info style={styles.mb15}>
            <Text>Save</Text>
          </Button>
          <Button info style={styles.mb15}
          onPress={() => this.props.navigation.navigate('StrengthandEnergy19')}
          >
            <Text>Next</Text>
          </Button>
          </View>
        </View>
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

export default StrengthandEnergy18;
