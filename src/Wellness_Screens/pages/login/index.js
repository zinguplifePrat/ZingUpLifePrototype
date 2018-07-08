import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Header,
  Title,
  H3,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import styles from "./styles";

const launchscreenBg = require("../../../assets/zingup3.jpeg");
const launchscreenLogo = require("../../../assets/zingup.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.backgroundImageContainer}>

          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <Content style={{ flex: 1 }}>
            <Form >
              <Item floatingLabel>
                <Label style={{ color: "black" }}>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label style={{ color: "black" }}>Password</Label>
                <Input secureTextEntry />
              </Item>
            </Form>
            <Button block style={{ margin: 15, marginTop: 50 }}
              onPress={() => this.props.navigation.navigate("BasicTab")}>
              <Text>Sign In</Text>
            </Button>
            <View style={{flex:1,flexDirection:"row"}}>
                    <View>
                        <Text style={{justifyContent: 'flex-start',}} >
                        Forgot Password?
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                      </View>
                    <View>
                        <Text style={{marginRight:5}}>
                        Sign Up !</Text>
                        </View>
                </View>
           
          </Content>

        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
