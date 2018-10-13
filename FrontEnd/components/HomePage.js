import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import { Container, Header, Content, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomePage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content >
          <Grid>
            <Row>
              <Text style={styles.titleText}>Place-Holder</Text>
            </Row>
            <Row style={{position: 'relative', alignItems: 'center', alignSelf: 'center', marginTop: 120 }}>
              <Button transparent onPress={() => this.props.navigation.navigate('AudioRecorder')}>
                <Icon name='md-arrow-dropright-circle' style ={{fontSize: 120, color: 'tomato', }}/>
              </Button>
            </Row>
            <Row  style={{alignItems: 'center', alignSelf: 'center', marginTop: 100 }}>
              <Button transparent onPress={() => this.props.navigation.navigate('History')}>
                <Icon name='ios-archive' style ={{fontSize: 40, color: 'tomato', }}/>
              </Button>
              <Button transparent onPress={() => this.props.navigation.navigate('Feedback')}>
                <Icon name='ios-stats' style ={{fontSize: 40, color: 'tomato', }}/>
              </Button>
              <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
                <Icon name='cog' style ={{fontSize: 40, color: 'tomato', }}/>
              </Button>
            </Row>
          </Grid>
        </Content>
     </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: '#cecece',
  },
  titleText: {
    marginTop: 100 ,
    color: 'black',
    fontSize: 60 ,
  },
});