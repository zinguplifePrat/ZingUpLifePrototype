import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions, Image
} from 'react-native';
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
  Body,

  View,
  Thumbnail,
  H3,
  Card
} from "native-base";

import ProgressBarAnimated from 'react-native-progress-bar-animated';

import styles from "./styles";
import IconFooter from "../../screens/footer/iconFooter";

const score = require("../../Images/score.png");
const backSlash = require("../../Images/backslash.png");
const walkIcon = require("../../Images/walk1.png");
const dayIcon = require("../../Images/day.png");
const editIcon = require("../../Images/edit.png");

const dollerIcon = require("../../Images/doller.png");
const breathingIcon = require("../../Images/breathing.png");


const barWidth = Dimensions.get('screen').width - 30;
const progressCustomStyles = {
  backgroundColor: 'red',
  borderRadius: 0,
  borderColor: 'orange',
};

class Stats extends Component {

  state = {
    progress: 45,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }

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
            <Title>Stats</Title>
          </Body>
          <Right />
        </Header>

        <Content>

          {/* Title of the page */}
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ borderColor: "#ddd", backgroundColor: "#14AB46", borderWidth: 2 }}>
              <Text style={{
                textAlignVertical: "center",
                textAlign: "center",
                color: '#ffff', fontWeight: "bold"
              }}>Stats</Text>
            </View>
            {/* End Tile Code */}



            {/* Tabs Code */}
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                flexDirection: 'row',
                flex: 1, width: "96%",
                borderColor: "#ddd",
                borderWidth: 2, marginTop: 5,
                backgroundColor: "#FF9402"
              }}>
                <Text style={{
                  width: "32%", textAlignVertical: "center",
                  textAlign: "center",
                  borderRightColor: "#ffff",
                  borderRightWidth: 2,color:"#fff"
                }}>Daily</Text>
                <Text style={{
                  width: "32%", textAlignVertical: "center",
                  textAlign: "center",
                  borderRightColor: "#ddd",
                  borderRightWidth: 2,color:"#fff"
                }}>Weekly</Text>
                <Text style={{
                  width: "32%", textAlignVertical: "center",
                  textAlign: "center",color:"#fff"
                }}>Monthly</Text>
              </View>
            </View>
            {/* End Tabs Code */}

            {/* Percentage View */}
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }} >

              <View style={{
                flexDirection: 'row',
                flex: 1, width: "90%",
                borderColor: "#ddd",
                borderWidth: 2, marginTop: 5, padding: 5
              }}>
                <View style={{ width: "35%", alignItems: 'center' }}>
                  <Thumbnail square small source={score} style={styles.mb35} />
                </View>
                <View style={{ flexDirection: 'row', width: "55%", alignItems: 'center' }}>
                  <H3>100</H3>
                  <Thumbnail square small source={backSlash} style={{ backgroundColor: "#ffff" }} />
                  <H3>500</H3>
                </View>
              </View>

            </View>
            {/* End Percentage View */}



            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 18,fontFamily:"'Arvo', serif" }}>We have recommended for you / choose a goal.</Text>
              </View>
            </View>


            {/* Goal Code */}
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5
            }} >

              {/* Walk Goal */}
              <Card style={styles.goalViewCard}>
                <View style={{ width: "96%", marginTop: 5 }}>

                  <View style={{
                    flex: 1, flexDirection: "row"
                  }}>
                    <Thumbnail square source={walkIcon} style={styles.mb35} />
                    <Text style={styles.goalText}>Walk 5km per day.</Text>
                    <Right>
                      <View style={{ flexDirection: "row" }}>
                        <Thumbnail square small source={dayIcon} style={styles.mb35} />
                        <H3 style={styles.leftTimeText}>2</H3>
                        <H3 style={styles.leftTimeText}>/</H3>
                        <H3 style={styles.leftTimeText}>8</H3>
                      </View>
                    </Right>
                  </View>


                  <View style={styles.separator} />


                  {/* ProgressBar Code */}
                  <View style={{ flex: 1 }}>

                    <Text style={{
                      textAlignVertical: "center",
                      textAlign: "center",
                      color: '#999',
                      fontSize: 14,
                      fontWeight: '500',
                      marginBottom: 10
                    }}>45% Completed</Text>
                    <ProgressBarAnimated
                      width={barWidth}
                      value={this.state.progress}
                      backgroundColorOnComplete="#6CC644"
                    />
                    {/* <View style={styles.buttonContainer}>
                      <View style={styles.buttonInner}>
                        <Button
                          title="Increase 20%"
                          onPress={this.increase.bind(this, 'progress', 20)}></Button>
                      </View>
                    </View> */}

                  </View>
                  {/* https://www.npmjs.com/package/react-native-progress-bar-animated */}
                  {/* End ProgressBar Code */}

                  <View style={styles.separator} />

                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text style={styles.label}>Last update time:2.30pm</Text>
                    <Text style={styles.label}>3000</Text>
                    <Right><Thumbnail square small source={editIcon} style={styles.mb35} /></Right>
                  </View>

                </View>
              </Card>
              {/* End Walk Goal */}


              {/* Dollar Goal */}
              <Card style={styles.goalViewCard}>
                <View style={{ width: "96%", marginTop: 5 }}>

                  <View style={{
                    flex: 1, flexDirection: "row"
                  }}>
                    <Thumbnail square source={dollerIcon} style={styles.mb35} />
                    <Text style={styles.goalText}>Save 500$ per Month</Text>
                    <Right>
                      <View style={{ flexDirection: "row" }}>
                        <Thumbnail square small source={dayIcon} style={styles.mb35} />
                        <H3 style={styles.leftTimeText}>4</H3>
                        <H3 style={styles.leftTimeText}>/</H3>
                        <H3 style={styles.leftTimeText}>30</H3>
                      </View>
                    </Right>
                  </View>


                  <View style={styles.separator} />


                  {/* ProgressBar Code */}
                  <View style={{ flex: 1 }}>

                    <Text style={{
                      textAlignVertical: "center",
                      textAlign: "center",
                      color: '#999',
                      fontSize: 14,
                      fontWeight: '500',
                      marginBottom: 10,
                    }}>800$ Increased</Text>
                    <ProgressBarAnimated
                      width={barWidth}
                      value={this.state.progress}
                      backgroundColorOnComplete="#6CC644"
                    />
                    {/* <View style={styles.buttonContainer}>
                      <View style={styles.buttonInner}>
                        <Button
                          title="Increase 20%"
                          onPress={this.increase.bind(this, 'progress', 20)}></Button>
                      </View>
                    </View> */}

                  </View>
                  {/* https://www.npmjs.com/package/react-native-progress-bar-animated */}
                  {/* End ProgressBar Code */}

                  <View style={styles.separator} />

                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text style={styles.label}>Last update: Yesterday</Text>
                    <Text style={styles.label}>4000</Text>
                    <Right><Thumbnail square small source={editIcon} style={styles.mb35} /></Right>
                  </View>

                </View>
              </Card>
              {/* End Doller Goal */}

              {/* Breathing Goal */}
              <Card style={styles.goalViewCard}>
                <View style={{ width: "96%", marginTop: 5 }}>

                  <View style={{
                    flex: 1, flexDirection: "row"
                  }}>
                    <Thumbnail square source={breathingIcon} style={styles.mb35} />
                    <Text style={styles.goalText}>Guided breathing exercises</Text>
                    <Right>
                      <View style={{ flexDirection: "row" }}>
                        <Thumbnail square small source={dayIcon} style={styles.mb35} />
                        <H3 style={styles.leftTimeText}>20</H3>
                        <H3 style={styles.leftTimeText}>/</H3>
                        <H3 style={styles.leftTimeText}>30 -min</H3>
                      </View>
                    </Right>
                  </View>


                  <View style={styles.separator} />


                  {/* ProgressBar Code */}
                  <View style={{ flex: 1 }}>

                    <Text style={{
                      textAlignVertical: "center",
                      textAlign: "center",
                      color: '#999',
                      fontSize: 14,
                      fontWeight: '500',
                      marginBottom: 10,
                    }}>45% Completed</Text>
                    <ProgressBarAnimated
                      width={barWidth}
                      value={this.state.progress}
                      backgroundColorOnComplete="#6CC644"
                    />
                    {/* <View style={styles.buttonContainer}>
                      <View style={styles.buttonInner}>
                        <Button
                          title="Increase 20%"
                          onPress={this.increase.bind(this, 'progress', 20)}></Button>
                      </View>
                    </View> */}

                  </View>
                  {/* https://www.npmjs.com/package/react-native-progress-bar-animated */}
                  {/* End ProgressBar Code */}

                  <View style={styles.separator} />

                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text style={styles.label}>Last update time:2.30pm</Text>
                    <Text style={styles.label}>3000</Text>
                    <Right><Thumbnail square small source={editIcon} style={styles.mb35} /></Right>
                  </View>

                </View>
              </Card>
              {/* End Walk Goal */}



            </View>
            {/* End Goal Code */}



          </View>

        </Content>

        <IconFooter />
      </Container>
    );
  }
}

export default Stats;
