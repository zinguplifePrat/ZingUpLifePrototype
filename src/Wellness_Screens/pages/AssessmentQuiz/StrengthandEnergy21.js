import React, { Component } from "react";
import { View ,Image ,Dimensions,ScrollView } from 'react-native';
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

class StrengthandEnergy21 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1,
      checkbox8:false
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2,
      checkbox8:false
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3,
      checkbox8:false
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4,
      checkbox8:false
    });
  }
  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5,
      checkbox8:false
    });
  }
  toggleSwitch6() {
    this.setState({
      checkbox6: !this.state.checkbox6,
      checkbox8:false
    });
  }
  toggleSwitch7() {
    this.setState({
      checkbox7: !this.state.checkbox7,
      checkbox8:false
    });
  }
  toggleSwitch8() {
    this.setState({
      checkbox8: !this.state.checkbox8,
      checkbox1:false,
      checkbox2:false,
      checkbox3:false,
      checkbox4:false,
      checkbox5:false,
      checkbox6:false,
      checkbox7:false
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
            fontSize: 150,
            padding:10,
            marginTop:60,
            backgroundColor:'green',

          }}
        >
          <Text style={{
            marginLeft:30,
            
          }}
          >21.Do you have a family history of any of the following conditions:(Select all that apply)</Text>
       </Text>
       <ScrollView style={{
         backgroundColor:"#fff",
         }}>
          
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>Asthma</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Cancer</Text>
            </Body>
          </ListItem>
         
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text>Diabetes</Text>
            </Body>
          </ListItem>
          
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text>Heart disease (including conditions as angina,heart attack)</Text>
            </Body>
          </ListItem>
         
          <ListItem button onPress={() => this.toggleSwitch5()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox5}
              onPress={() => this.toggleSwitch5()}
            />
            <Body>
              <Text>High blood pressure</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch6()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox6}
              onPress={() => this.toggleSwitch6()}
            />
            <Body>
              <Text>High cholestrol</Text>
            </Body>
          </ListItem>
         
          <ListItem button onPress={() => this.toggleSwitch7()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox7}
              onPress={() => this.toggleSwitch7()}
            />
            <Body>
              <Text>Stroke /Brain stroke/TIA(Transient Ischemic Attack)</Text>
            </Body>
          </ListItem>
   
          
          <ListItem button onPress={() => this.toggleSwitch8()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox8}
              onPress={() => this.toggleSwitch8()}
            />
            <Body>
              <Text>I do not have a family history of any condition</Text>
            </Body>
          </ListItem>
        </ScrollView>
          <View style={{
            flexDirection: "row",
            margin:10,
          }}>
          <Button info style={styles.mb15}
          onPress={() => this.props.navigation.navigate('StrengthandEnergy19')}

          >
            <Text>Prev</Text>
          </Button>
          <Button info style={styles.mb15}>
            <Text>Save</Text>
          </Button>
          <Button success style={styles.mb15}
          >
            <Text>Submit</Text>
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

export default StrengthandEnergy21;
