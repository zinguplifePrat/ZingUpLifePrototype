import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Body,
    Left,
    Right,
    Grid,
    Row,
    Col,
    Thumbnail,
    ListItem,
    View,
    H3,
    Footer
} from "native-base";
import styles from "./styles";
import IconFooter from "../../screens/footer/iconFooter";

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
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={strengthnenergy} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Strength & Energy</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={relationandintimacy} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Relationship & Intimacy</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>

                    </Grid>
                    <Grid>
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={zestforlife} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Zest For Life</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={thoughtcontrol} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Thought Control</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>

                    </Grid>
                    <Grid>
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={bioAge} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Biological Age</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={dietscore} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Diet Score</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>

                    </Grid>
                    <Grid>
                        <Col style={styles.colStyle}>

                            <Header style={{ backgroundColor:"#ffff",height:100 }}>
                                <Left>
                                    <Thumbnail square large source={wholesomeness} style={styles.mb35} />
                                </Left>
                                <Right>
                                    <View style={{ width: 80 }}>
                                        <H3 style={{ fontSize: 12, }}>Wholesomeness</H3>
                                    </View>
                                </Right>
                            </Header>

                            <Body style={styles.timeCounterBody}>

                                <Row style={[styles.shadowColor]}>
                                    <Left style={{ flex: 1, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "powderblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "skyblue" }}>00</Text>
                                        <Text style={{ fontSize: 12, flex: 1, backgroundColor: "steelblue" }}>00</Text>
                                    </Left>
                                    <Right>
                                        <Button transparent info>
                                            <Text style={{ fontSize: 10 }} onPress={
                                                () => this.props.navigation.navigate('StrengthandEnergy')
                                            }>Lets Go</Text>
                                        </Button>
                                    </Right>

                                </Row>
                            </Body>
                        </Col>


                    </Grid>

                </Content>


                <IconFooter />
            </Container>
        );
    }
}


export default Assessment;
