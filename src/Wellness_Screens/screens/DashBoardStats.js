import React,{Component} from 'react';
import {Button} from 'native-base';
import styles from '../screens/button/styles'
class DashBoardStats extends Component{
   render(){
       return(
        <Container>
        <Button rounded success style={styles.mb15}>
         <Text>All</Text>
        </Button>
        </Container>
       )
   }
    
}

export default DashBoardStats;