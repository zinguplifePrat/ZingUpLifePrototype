import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
    View,
    H3,

} from "native-base";
//import * as DefaultIcon from 'react-native-elements';
import { Grid, Row } from "react-native-easy-grid";
import styles from "./styles";
//const logo = require("../../../assets/logo.png");

const bioAge = require("../../../assets/bioageicon.png");
const dietscore = require("../../../assets/dieticon.png");
const wholesomeness = require("../../../assets/wholesomenessicon.png");
const relationandintimacy = require("../../../assets/r&iicon.png");
const strengthnenergy = require("../../../assets/strengthandenergyicon.png");
const thoughtcontrol = require("../../../assets/thoughtcontrolicon.png");
const zestforlife = require("../../../assets/zestforlifeicon.png");


class Assessment extends Component {
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
                        <Title>Assessment</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>




                    <Grid>

                        <Row><Right><Icon name="microphone" /></Right></Row>
                        {/* <Row><H3 style={styles.themeTitle}>Themed Assessment</H3></Row> */}
                        <Row>
                            <Card>
                                <CardItem>
                                    <Text>Strength & Energy</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>
                                <CardItem>
                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={strengthnenergy} />
                                    </View>
                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>AttemptAt 30 Questions, 15 min</Text>
                                        <Text>Suggested By: Pratian</Text>
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 0</Text>
                                    <Right>
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Row>


                        <Row>

                            <Card>

                                <CardItem>
                                    <Text>Relationship & Intimacy</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>

                                <CardItem>

                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={relationandintimacy} />
                                    </View>

                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>45 Questions, 45 min</Text>
                                        <Text>Suggested By: Singh</Text>
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 1</Text>
                                    <Right>
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>

                        </Row>

                        <Row>

                            <Card>

                                <CardItem>
                                    <Text>Zest For Life</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>

                                <CardItem>

                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={zestforlife} />
                                    </View>

                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>20 Questions, 18 min</Text>
                                        <Text></Text>
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 0</Text>
                                    <Right>
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>

                        </Row>

                        <Row>

                            <Card>

                                <CardItem>
                                    <Text>Thought Control</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>

                                <CardItem>

                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={thoughtcontrol} />
                                    </View>

                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>10 Questions, 12 min</Text>
                                        <Text>Score 27, Progress 15%</Text>
                                        <Text>Re-attempt in 2 Days</Text>
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 2</Text>
                                    <Right>
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>

                        </Row>

                        {/* <Row><H3 style={styles.themeTitle}>Basic Assessment</H3></Row> */}


                        <Row>

                            <Card>

                                <CardItem>
                                    <Text>Biological Age</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>

                                <CardItem>

                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={bioAge} />
                                    </View>

                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>Real Age: 20 </Text>
                                        <Text>Biological Age: 23</Text>
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 3</Text>
                                    <View style={{marginLeft:110}}><Icon name="md-download"/></View>
                                    <Right>
                                    
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>

                        </Row>

                        <Row>

                            <Card>

                                <CardItem>
                                    <Text>Diet Score</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>

                                <CardItem>

                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={dietscore} />
                                    </View>

                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>Total Score: 68%</Text>
                                        <Text>Diet Bottomline: Obase</Text>
                                        <Text>Suggested By: P Singh</Text>
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 2</Text>
                                    <View style={{marginLeft:110}}><Icon name="md-download"/></View>
                                    <Right>
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>

                        </Row>

                        <Row>

                            <Card>

                                <CardItem>
                                    <Text>Wholesomeness</Text>
                                    <Right><Icon name="microphone" /></Right>
                                </CardItem>

                                <CardItem>

                                    <View style={{ width: 60, height: 50 }} >
                                        <Thumbnail source={wholesomeness} />
                                    </View>

                                    <Body style={{ paddingLeft: 20 }}>
                                        <Text>Real Age: 20</Text>
                                        <Text>Biological Age: 23</Text>
                                        
                                    </Body>
                                </CardItem>
                                <CardItem Footer>
                                    <Text>Attempts: 3</Text>
                                    <View style={{marginLeft:110}}><Icon name="md-download"/></View>
                                    <Right>
                                        <Button style={styles.attemptBtn}>
                                            <Text>Attempt</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>

                        </Row>


                    </Grid>
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

export default Assessment;
