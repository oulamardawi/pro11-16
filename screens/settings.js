import React from "react";
import { useState   } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ImageBackground,
    Alert,
    ScrollView,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker"
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
	'VirtualizedLists should never be nested',
])
LogBox.ignoreAllLogs();

const settings = ({ navigation }) => {
  const [visibleImage,setVisibleImage]=useState(true);
  const [imag, setImag] = useState("");
  function uploadImage(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log("image ===>>>>",image);
      setImag(image.path);
      setVisibleImage(false);
    });
  }

    const [name,setName]=useState("");
    const [img,setImg]=useState("");
    const [about,setAbout]=useState("");
    const [pass,setPass]=useState("");

    const [nameC,setNameC]=useState(false);
    const [imgC,setImgC]=useState(false);
    const [aboutC,setAboutC]=useState(false);
    const [passC,setPassC]=useState(false);


    const [passs,setPasss]=useState("");
    const [npass,setNpass]=useState("");
    const [cpass,setCpass]=useState("");


    const [CPass,setCPass]=useState('gray');
    const [NPass,setNPass]=useState('gray');
    const [CNPass,setCNPass]=useState('gray');

    const [CPas,setCPas]=useState(true);
    const [NPas,setNPas]=useState(true);
    const [CNPas,setCNPas]=useState(true);

   return(
       <ScrollView  style={
        {
            width:'100%',
            height:1500,
        }
    }>
       <ImageBackground
       source={images.back2}
       style={
           {
               width:'100%',
               height:1500,
           }
       }
       >
           
       
       <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image
           source={icons.next}
           style={{
            width:43,
            height:43,
            alignSelf:'flex-start',
            marginTop:10,
            marginLeft:10,
            tintColor:COLORS.white
           }}    
       /></TouchableOpacity>
       <View style={{
           alignContent:'center',
           justifyContent:'center',
           margin:'5%',
           marginTop:'15%'
       }}>
        
       <View style={{
           flexDirection:'row',
           alignSelf:'center'
       }}>
       <Image
           source={icons.settings}
           style={{
            width:35,
            height:35,
            tintColor:COLORS.white
           }}
           
       />
       <Text style={{...FONTS.h1,
           alignSelf:'center',
           color:COLORS.white,
           marginBottom:'15%'
       }}> Settings </Text>
       </View>
       
      <TouchableOpacity style={{
          width:'90%',
          height:50,
          alignSelf:'center',
          borderRadius:25,
          borderWidth:1,
          borderColor:COLORS.white,
          alignContent:'center',
          justifyContent:'center',
          marginBottom:'5%',
          flexDirection:'row'
      }}
      onPress={() =>setNameC(!nameC) }>
      <View
      style={{
          flexDirection:'row',flex:1,
          justifyContent:'center',alignContent:'center',alignSelf:'center',
          marginLeft:90,
      }}>
      <Image
           source={icons.name}
           style={{
            width:25,
            height:25,
            tintColor:COLORS.white,
          //  marginTop:7,
            marginRight:7,
            alignSelf:'center',
        
           // flex:1,
           }}
           
       />
        <Text style={{...FONTS.body3,
        alignSelf:'center',
        color:COLORS.white,flex:5,
      //  marginBottom:'5%'
       }}> Change Name </Text></View>
      </TouchableOpacity>
       {nameC&&(
           <View>
        <TextInput
            style={{ ...FONTS.body3 , color:COLORS.white , marginLeft:'5%',marginRight:'5%',marginBottom :'5%',marginTop:'-3%' ,borderBottomWidth:2,width :'90%' ,borderBottomColor:COLORS.white,alignSelf:'center'}}
            placeholder="New Name"
            placeholderTextColor={COLORS.white}
            onChangeText={(name) => setName(name)}
            />
            <TouchableOpacity style={{ borderRadius:25, backgroundColor:COLORS.white,alignContent:'center',justifyContent:'center'
            ,width:'90%',height:50,alignSelf:'center',marginBottom:'5%'}} onPress={()=> setNameC(!nameC)}> 
              <Text style={{...FONTS.body3,alignSelf:'center',
              color:COLORS.primary
              }}> Save</Text>
              </TouchableOpacity>
            </View>
       )}
    
      <TouchableOpacity style={{
          width:'90%',
          height:50,
          alignSelf:'center',
          borderRadius:25,
          borderWidth:1,
          borderColor:COLORS.white,
          alignContent:'center',
          justifyContent:'center',
          marginBottom:'5%',
          flexDirection:'row'
      }}
      onPress={() =>setImgC(!imgC) }
      >
  <View
      style={{
          flexDirection:'row',flex:1,
          justifyContent:'center',alignContent:'center',alignSelf:'center',
          marginLeft:90,
      }}>
      <Image
           source={icons.img}
           style={{
            width:25,
            height:25,
            tintColor:COLORS.white,
          //  marginTop:7,
            marginRight:7,
            alignSelf:'center',
        
           // flex:1,
           }}
           
       />
        <Text style={{...FONTS.body3,
        alignSelf:'center',
        color:COLORS.white,flex:5,
      //  marginBottom:'5%'
       }}> Change Image </Text></View>
      </TouchableOpacity>
      {imgC&&visibleImage&&(
        <View>
            <View style={
    {
        width:'90%',height:150,alignSelf:'center',backgroundColor:'gray',borderRadius:25,
        alignContent:'center',justifyContent:'center',marginBottom:'5%'
    }}>
            <TouchableOpacity
          style={{
              borderRadius:15,
              width:'50%',
              height:55,
              borderWidth:1,
              borderColor:'white',
              alignSelf:'center',
              alignContent:'center',
              justifyContent:'center'
          }}
          onPress={() =>uploadImage()}
          >
              <Text style={{...FONTS.body3,alignSelf:'center',
              color:'white'
              }}>Add Image</Text>
          </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ borderRadius:25, backgroundColor:COLORS.white,alignContent:'center',justifyContent:'center'
            ,width:'90%',height:50,alignSelf:'center',marginBottom:'5%'}} onPress={()=> setImgC(!imgC)}> 
              <Text style={{...FONTS.body3,alignSelf:'center',
              color:COLORS.primary
              }}> Save</Text>
              </TouchableOpacity>
        </View>
      )}
      {imgC&&!visibleImage&&<Image
  source={{uri : imag}}
  resizeMode='contain'
  style={{
    alignSelf:'center',
    borderRadius:25,
    marginBottom:'3%',
    width:'90%',height:150,
  }}
/>}
      <TouchableOpacity style={{
          width:'90%',
          height:50,
          alignSelf:'center',
          borderRadius:25,
          borderWidth:1,
          borderColor:COLORS.white,
          alignContent:'center',
          justifyContent:'center',
          marginBottom:'5%',
          flexDirection:'row'
      }}
      onPress={() =>setAboutC(!aboutC) }
      >
      <View
      style={{
          flexDirection:'row',flex:1,
          justifyContent:'center',alignContent:'center',alignSelf:'center',
          marginLeft:90,
      }}>
      <Image
           source={icons.edit}
           style={{
            width:25,
            height:25,
            tintColor:COLORS.white,
          //  marginTop:7,
            marginRight:7,
            alignSelf:'center',
        
           // flex:1,
           }}
           
       />
        <Text style={{...FONTS.body3,
        alignSelf:'center',
        color:COLORS.white,flex:5,
      //  marginBottom:'5%'
       }}> Change About </Text></View>
      </TouchableOpacity>
      {aboutC&&(
           <View>
        <TextInput
            style={{ ...FONTS.body3 , color:COLORS.white , marginLeft:'5%',marginRight:'5%',marginBottom :'5%',marginTop:'-3%' ,borderBottomWidth:2,width :'90%' ,borderBottomColor:COLORS.white,alignSelf:'center'}}
            placeholder="New Description"
            multiline={true}
            numberOfLines={1}
            placeholderTextColor={COLORS.white}
            onChangeText={(about) => setAbout(about)}
            />
            <TouchableOpacity style={{ borderRadius:25, backgroundColor:COLORS.white,alignContent:'center',justifyContent:'center'
            ,width:'90%',height:50,alignSelf:'center',marginBottom:'5%'}} onPress={()=> setAboutC(!aboutC)}> 
              <Text style={{...FONTS.body3,alignSelf:'center',
              color:COLORS.primary
              }}> Save</Text>
              </TouchableOpacity>
            </View>
       
       )}
      <TouchableOpacity style={{
          width:'90%',
          height:50,
          alignSelf:'center',
          borderRadius:25,
          borderWidth:1,
          borderColor:COLORS.white,
          alignContent:'center',
          justifyContent:'center',
          marginBottom:'5%',
          flexDirection:'row',
          
      }}
      onPress={() =>setPassC(!passC) }
      >
 <View
      style={{
          flexDirection:'row',flex:1,
          justifyContent:'center',alignContent:'center',alignSelf:'center',
          marginLeft:90,
      }}>
      <Image
           source={icons.lock}
           style={{
            width:25,
            height:25,
            tintColor:COLORS.white,
          //  marginTop:7,
            marginRight:7,
            alignSelf:'center',
        
           // flex:1,
           }}
           
       />
        <Text style={{...FONTS.body3,
        alignSelf:'center',
        color:COLORS.white,flex:5,
      //  marginBottom:'5%'
       }}> Change Password </Text></View>
      </TouchableOpacity>
      {passC&&(

           <View>

           <View style={{marginLeft:'5%',marginRight:'5%',marginBottom :'5%',marginTop:'-3%' ,borderBottomWidth:2,width :'90%' ,borderBottomColor:COLORS.white,alignSelf:'center',flexDirection:'row'}}>
            <TextInput
            style={{ ...FONTS.body3 , color:COLORS.white ,flex:10 }}
            placeholder="Current Password"
            secureTextEntry={CPas}
            placeholderTextColor={COLORS.white}
            onChangeText={(passs) => setPasss(passs)}
            />
            <TouchableOpacity 
            style={{
                flex:1,
            }}
            onPress={()=>{
                setCPas(!CPas);
            if (CPass==COLORS.white){
                setCPass('gray')
            }
            else setCPass(COLORS.white)

            }}
            >
             <Image
           source={icons.eye}
           style={{
            width:30,
            height:30,
            tintColor:CPass,
            marginTop:7,
            marginRight:7,
           }}/>
           </TouchableOpacity>
            </View>

            <View style={{marginLeft:'5%',marginRight:'5%',marginBottom :'5%',marginTop:'-3%' ,borderBottomWidth:2,width :'90%' ,borderBottomColor:COLORS.white,alignSelf:'center',flexDirection:'row'}}>
            <TextInput
            style={{ ...FONTS.body3 , color:COLORS.white ,flex:10 }}
            placeholder="New Password"
            secureTextEntry={NPas}
            placeholderTextColor={COLORS.white}
            onChangeText={(npass) => setNpass(npass)}
            />
            <TouchableOpacity 
            style={{
                flex:1,
            }}
            onPress={()=>{
                setNPas(!NPas);
            if (NPass==COLORS.white){
                setNPass('gray')
            }
            else setNPass(COLORS.white)

            }}
            >
             <Image
           source={icons.eye}
           style={{
            width:30,
            height:30,
            tintColor:NPass,
            marginTop:7,
            marginRight:7,
           }}/>
           </TouchableOpacity>
            </View>

            <View style={{marginLeft:'5%',marginRight:'5%',marginBottom :'5%',marginTop:'-3%' ,borderBottomWidth:2,width :'90%' ,borderBottomColor:COLORS.white,alignSelf:'center',flexDirection:'row'}}>
            <TextInput
            style={{ ...FONTS.body3 , color:COLORS.white,flex:10 }}
            placeholder="Confirm Password"
            secureTextEntry={CNPas}
            placeholderTextColor={COLORS.white}
            onChangeText={(cpass) => setCpass(cpass)}
            />
            <TouchableOpacity 
            style={{
                flex:1,
            }}
            onPress={()=>{
                setCNPas(!CNPas);
            if (CNPass==COLORS.white){
                setCNPass('gray')
            }
            else setCNPass(COLORS.white)

            }}
            >
             <Image
           source={icons.eye}
           style={{
            width:30,
            height:30,
            tintColor:CNPass,
            marginTop:7,
            marginRight:7,
           }}/>
           </TouchableOpacity>
            </View>

           
           

            <TouchableOpacity style={{ borderRadius:25, backgroundColor:COLORS.white,alignContent:'center',justifyContent:'center'
            ,width:'90%',height:50,alignSelf:'center',marginBottom:'5%'}} onPress={()=> {
            if (npass!=cpass){
          Alert.alert(
          "Invalid Input",
          "The new password and confirmation did not match!!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
            }
            else {
                setPassC(!passC);
            }
            }}> 
              <Text style={{...FONTS.body3,alignSelf:'center',
              color:COLORS.primary
              }}> Save</Text>
              </TouchableOpacity>
            </View>
       
       )}
      
      </View>
      </ImageBackground>
      </ScrollView>
   );}
export default settings;
