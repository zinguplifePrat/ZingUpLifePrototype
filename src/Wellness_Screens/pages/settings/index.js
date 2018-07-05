import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Button,
  Icon,
  Thumbnail,
  List,
  ListItem,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import { Grid, Row } from "react-native-easy-grid";
import styles from "./styles";

//const logo = require("../../../assets/splashscreen.png");
const cover = require("../../../assets/web-cover1.jpg");
const profileData = [
  {
    "name": "Manikandan", "email": "mani@mk.com",
    "dob": "1989-11-17", "phone": "9952439585", "gender": "Male",
    "blood": "o+ve", "height": "173",
    "weight": "75", "pushNoti": true,
    "imgURL": ""
  }
]

class Settings extends Component {
  render() {
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

        <Content padder>

          <Grid>
            <Row style={{ justifyContent: 'center' }} >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Thumbnail large source={cover} />
                <Text>{profileData[0].name}</Text>
                <Text>{profileData[0].phone}</Text>
                <Text>Edit Profile</Text>
              </View>
            </Row>
          </Grid>

          <List>
            <ListItem>
              <Left><Text>Name</Text></Left>
              <Text>{profileData[0].name}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Email id</Text></Left>
              <Text>{profileData[0].email}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Gender</Text></Left>
              <Text>{profileData[0].gender}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Date of Birth</Text></Left>
              <Text>{profileData[0].dob}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Phone number</Text></Left>
              <Text>{profileData[0].phone}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Blood Group</Text></Left>
              <Text>{profileData[0].blood}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Height</Text></Left>
              <Text>{profileData[0].height}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Weight</Text></Left>
              <Text>{profileData[0].weight}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Push Notifications </Text></Left>
              <Text>{profileData[0].name}</Text>
            </ListItem>

            <ListItem>
              <Left><Text>Terms and Conditions</Text></Left>
            </ListItem>

            <ListItem>
              <Left><Text>Log Out</Text></Left>
            </ListItem>


          </List>



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

export default Settings;
