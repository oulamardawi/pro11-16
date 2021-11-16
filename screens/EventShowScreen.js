import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
import CountDown from 'react-native-countdown-component';
const EventShowScreen = ({navigation}) => {

      const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#005e66' barStyle="light-content"/>
        <View style={styles.header}>
          
        <CountDown
        size={25}
        until={60 * 60 * 60 * 1 + 60 * 60 * 1 + 60 * 1}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        timeLabelStyle={{color: 'white'}}
        digitStyle={{backgroundColor: '#FFF'}}

      //  separatorStyle={{color: '#FFF'}}
        digitTxtStyle={{color: '#000'}}
        //timeLabels={{}}

//        showSeparator

      /> 
          </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <View style={styles.action}>
            <Text style={[styles.text_header, {
                color: colors.text,
                marginBottom:10
            }]}>Think Like a Programmer 
                </Text>
              </View>
              
            <View style={styles.action}>
                <FontAwesome 
                    name="calendar"
                    color='#c4c8cf'
                    size={24}       
                />
                <Text>
                <Text style={[styles.text_footer1, {
                color: colors.text,
                marginBottom:50       
            }]}>   Sat, May 25,2021</Text>

                <Text  style={[styles.text_footer2, {
             }]}> {'\n    10:00 AM - 9:00 PM'} 
                    </Text>
                
                </Text>
            </View>
       
            <View style={styles.action}>
                <FontAwesome 
                    name="map-marker"
                    color='#c4c8cf'
                    size={30}       
                />
                <Text>
                <Text style={[styles.text_footer1, {
                color: colors.text,
                marginBottom:50       
            }]}>    Conferance Hall</Text>

                <Text  style={[styles.text_footer2, {
             }]}> {'\n     An-Najah National University, Nablus'} 
                    </Text>
                
                </Text>
            </View>

            <View style={styles.action}>
                <FontAwesome 
                    name="microphone"
                    color='#c4c8cf'
                    size={30}       
                />
                <Text>
                <Text style={[styles.text_footer1, {
                color: colors.text,
                marginBottom:50       
            }]}>    Samer Arandi  </Text>

                <Text  style={[styles.text_footer2, {
             }]}> {'\n     Dean of Engineering College'} 
                    </Text>
                
                </Text>
            </View>

           
                <Text style={{color: '#000', marginTop:20, fontWeight: "bold", fontSize: 17}}>About</Text>
                <Text style={{color: '#000000', marginTop:4, fontSize: 15}}>
                Electric Cityis a new onshore and offshore wind event, with participants from wind and beyond heavy industry, mobility, district and domestic heating, storage, hybrids, hydrogen and many m
                ore to join the conversation on how we build a clean economy.</Text>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('eventPage')}
                >
                <LinearGradient
                    colors={['#005e66', '#005e70']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>View Event</Text>
                </LinearGradient>
                </TouchableOpacity>

                
            </View>
        </Animatable.View>
      </View>
    );
};

export default EventShowScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#005e66'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    text_header: {
        color: '#005e66',
        fontWeight: 'bold',
        fontSize: 20,
    },
    text_footer1: {
        color: '#05375a',
        fontSize: 17,
   
     //   fontFamily: 'ZenKurenaido-Regular'


    },
    text_footer2: {
        color: '#666666',
        fontSize: 12,     
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
       // borderBottomWidth: 1,
      //  borderBottomColor: '#f2f222',
      
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,

        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 7,
        marginBottom:40
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
