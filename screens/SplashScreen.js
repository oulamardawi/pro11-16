import React from 'react';
import { 
    View,  
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar';


const SplashScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#005e66' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="zoomIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        
        
            <Animatable.View 
            style={styles.button}
            animation="fadeInUpBig"
            >
                 
                 <TouchableOpacity
                 onPress={()=>navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#fff',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Next</Text>
                </TouchableOpacity>

        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.34;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#005e66'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },

  logo: {
      width: height_logo,
      height: height_logo
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
signIn: {
    width: '30%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 7,
    marginBottom:8,
    fontSize:17
}
});

