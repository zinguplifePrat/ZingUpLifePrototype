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

class StrengthandEnergy9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }
  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5
    });
  }
  toggleSwitch6() {
    this.setState({
      checkbox6: !this.state.checkbox6
    });
  }
  toggleSwitch7() {
    this.setState({
      checkbox7: !this.state.checkbox7
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
            padding:4,
            marginTop:5,
            backgroundColor:'green',

          }}
        >
          <Text style={{
            marginLeft:30,
            
          }}
          >9.You don't exercise because:(Select all that apply)</Text>
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
              <Text>My days are busy and exercise is not a high priority</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>None among my family or freinds like to do anything active </Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text>I feel exercise is risky and can cause injury</Text>
            </Body>
          </ListItem>
         
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text>I am not able to start exercising even if i often think of it </Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch5()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox5}
              onPress={() => this.toggleSwitch5()}
            />
            <Body>
              <Text>I feel exercising is too expensive</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch6()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox6}
              onPress={() => this.toggleSwitch6()}
            />
            <Body>
              <Text>I am too tired after work to exercise</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch7()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox7}
              onPress={() => this.toggleSwitch7()}
            />
            <Body>
              <Text>I do not have access for exercising facilties</Text>
            </Body>
          </ListItem>
         
          </View>
          <View style={{
            flexDirection: "row",
            margin:10,
            
            
          }}>
          <Button info style={styles.mb15}
          onPress={() => this.props.navigation.navigate('StrengthandEnergy8')}

          >
            <Text>Prev</Text>
          </Button>
          <Button info style={styles.mb15}>
            <Text>Save</Text>
          </Button>
          <Button info style={styles.mb15}
          onPress={() => this.props.navigation.navigate('StrengthandEnergy10')}
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

export default StrengthandEnergy9;
