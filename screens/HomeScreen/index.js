import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Table, Row, Rows } from 'react-native-table-component';

export default class HomeScreen extends Component{

    constructor(props) {
        super(props);
      }


    render(){
        
        return (
            <View style={styles.container}>
                { this.props.greeting.length < 1 ? 
                    <Table borderStyle={{borderWidth: 0, borderColor: '#c8e1ff'}}>
                        <Rows data={this.props.greeting} textStyle={styles.text}/>
                    </Table>
                    :
                    <Table borderStyle={{borderWidth: 2, borderColor: 'rgba(121, 203, 232, .4)' }}>
                        <Rows data={this.props.greeting} textStyle={styles.text}/>
                    </Table>                    
                }
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 16, paddingTop: 30,
    },
    wrapContent: {
        width: wp('90%'),
        height: wp('90%'),
        paddingBottom: wp('5%'),
        
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#46c3ad",
    },
    text: { textAlign: 'center' , fontSize: 22}
})