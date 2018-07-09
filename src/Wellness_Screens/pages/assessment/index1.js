import React from 'react';
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
    Body
  } from "native-base";
import {
    View,
    ListView,
    Dimensions,
} from 'react-native';
import PHOTOS from './data';
import { processImages, buildRows, normalizeRows } from './utils';
import PhotoGallery from './PhotoGallery';
import GridItem from './GridItem';

const maxWidth = Dimensions.get('window').width;

export default class App extends React.Component {
    componentWillMount() {
        const processedImages = processImages(PHOTOS);
        let rows = buildRows(processedImages, maxWidth);
        rows = normalizeRows(rows, maxWidth);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(rows)
        };
    }

    renderRow = (onPhotoOpen, row) =>
        <View
            style={{
                flexDirection: 'row',
                marginBottom: 5,
                justifyContent: 'space-between'
            }}
        >
            {row.map(item =>
                <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
            )}
        </View>;

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
                    <PhotoGallery
                        renderContent={({ onPhotoOpen }) =>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow.bind(this, onPhotoOpen)}
                            />}
                    />
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