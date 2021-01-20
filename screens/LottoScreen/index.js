import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Table, Row, Rows } from 'react-native-table-component';
import HomeScreen from '../HomeScreen'
import firebase from 'react-native-firebase';

export default class LoginScreen extends Component{

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    createNumbers = () => {
        if(this.state.tableData.length  > 4){
            return false;
        }
        // const { tableData } = this.state;

        // 6개의 로또 번호를 저장할 배열
        var lotto = new Array(6);

        var lotto_entry = [];

        // 추첨된 로또번호의 갯수
        var count = 0;
        // 번호중복 방지용 변수
        var mFlag = true;
        // 6개의 로또번호를 얻을때까지 반복
        while(count < 6) {
            var number;
            // 랜덤번호 추출
            number = parseInt(Math.random()*45)+1
            // 중복확인
            for(var i=0; i<count; i++){
                if(lotto[i] == number) mFlag = false;
            }
            // 중복된 번호가 아니면 로또 번호배열에 추가
            if(mFlag){
                lotto[count] = number;
                count++;
            }
            mFlag = true;
        }

        this.setState({
            tableData: this.state.tableData.concat([lotto])
        });
    }
    
    render(){

        const Banner = firebase.admob.Banner;
        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
    
        const unitId = 'ca-app-pub-8632141287861541/6859969937';

        return (
                <LinearGradient colors={['#77A1D3', '#79CBCA', '#E684AE']} style={styles.container}>
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>로또 번호를 알려드려요</Text>
                        <Text style={styles.second_title}>(아래 행운 돼지를 눌러주세요!)</Text>
                    </View>
                    <TouchableHighlight onPress={this.createNumbers} underlayColor="none" style={styles.imageTouchableArea}>
                        <Image style={styles.imageArea}
                            source={require('../../img/money_pig.png')} 
                        />
                    </TouchableHighlight>
                    <HomeScreen greeting={this.state.tableData}/>
                    <Banner
                        unitId={unitId}
                        size={'SMART_BANNER'}
                        request={request.build()}
                        onAdLoaded={() => {
                            console.log('Advert loaded');
                        }}
                        />
                </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleArea: {
        width: '100%',
        marginTop: wp('20%'),
        alignItems: 'center'
    },
    title: {
        fontSize: wp('7%'),
    },
    second_title: {
        fontSize: wp('4%'),
    },
    imageArea: {
        paddingTop: wp('10%'),
        alignItems: 'center'
    },
    imageTouchableArea: {
        flex: 1,
        marginLeft: wp('30%'),
        marginRight: wp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: wp('10%')
    },    
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
})