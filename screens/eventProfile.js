import React from "react";
import { useState   } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    FlatList,
    TextInput,
    RefreshControl,
    Linking,
} from "react-native";

import * as Animatable from 'react-native-animatable';
import CountDown from 'react-native-countdown-component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { ScrollView } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
	'VirtualizedLists should never be nested',
])

const Home = ({ navigation }) => {
const [search, setSearch] = useState("");
const [joinText, setJoinText] = useState("JOIN");


const [like, setLike] = useState('white');
const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const [EventFull, setEventFull] = useState(COLORS.secondary);

const [MediaFull, setMediaFull] = useState(COLORS.primary);
const [FollowersFull, setFollowersFull] = useState(COLORS.secondary);

const [Eventc, setEventc] = useState(COLORS.primary);
const [Mediac, setMediac] = useState(COLORS.white);
const [Followersc, setFollowersc] = useState(COLORS.primary);

    const handleLike = () => { 
      if (like=='white')
      setLike('red');
      else setLike('white');
      }
     
const handleEventFull = () => { 
      setFollowersFull(COLORS.secondary);
      setMediaFull(COLORS.secondary);
      setEventFull(COLORS.primary);
      setEventc(COLORS.white);
      setFollowersc(COLORS.primary);
      setMediac(COLORS.primary);
    }

const handleMediaFull = () => { 
      setFollowersFull(COLORS.secondary);
      setMediaFull(COLORS.primary);
      setEventFull(COLORS.secondary);
      setEventc(COLORS.primary);
      setFollowersc(COLORS.primary);
      setMediac(COLORS.white);
    }
    const handleFollowersFull = () => { 
      setFollowersFull(COLORS.primary);
      setMediaFull(COLORS.secondary);
      setEventFull(COLORS.secondary);
      setEventc(COLORS.primary);
      setFollowersc(COLORS.white);
      setMediac(COLORS.primary);
    }
      
  const followers = [
    {
        id: 1,
        name: "Ala Saqa",
        icon: images.ala,
    },
    {
      id: 2,
      name: "Wala Saqa",
      icon: images.wala,
    },
    {
        id: 3,
        name: "Oula Mardawi",
        icon: images.oula,
    },
    {
        id: 4,
        name: "Layan Saqa",
        icon: images.layan,
    },

]
  
    const links = [
      {
        id :1 ,
        link : 'https://www.youtube.com/watch?v=vWfjlIMiqBg&ab_channel=AmandaGenz',
        text: 'first video description first video description first video description first video description first video description ',
      },
      {
        id :2 ,
        link : 'https://www.youtube.com/watch?v=vWfjlIMiqBg&ab_channel=AmandaGenz',
        text: 'second video description second video description second video description ',
      },
      {
        id :3 ,
        link : 'https://www.youtube.com/watch?v=vWfjlIMiqBg&ab_channel=AmandaGenz',
        text: 'third video description ',
      },

    ];
    const posts = [
      {
          id: 1,
          text: "first post with image first post with image first post with image first post with image first post with image first post with image first post with image first post with image first post with image first post with image ",
          icon: '',
          like:COLORS.white,
      },
      {
          id: 2,
          text: "second post with image second post with image second post with image second post with image second post with image second post with image second post with image second post with image second post with image second post with image second post with image ",
          icon: images.ieee,
          like:COLORS.white,
      },
      {
          id: 3,
          text: "third post with image ",
          icon: images.dsc,
          like:COLORS.white,
      },
      {
          id: 4,
          text: "forth post  image ",
          icon: '',
          like:COLORS.white,
      },

  ]
  function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', height: 50,backgroundColor:'white' }}>
          
        <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
            
            <Image
                    source={icons.next}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor:COLORS.primary,
                        paddingTop :'3%',

                    }}
                />
            </TouchableOpacity>
        
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("not")}
            >
            
            <Image
                    source={icons.bell}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor:COLORS.primary,
                        paddingTop :'3%',

                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , flexDirection:'row',marginRight:'2%'}}>
                    <View
                        style={{
                            width: '95%',
                            height: "85%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            marginTop:"3%",
                            marginLeft:'3%',
                            flexDirection:'row',
                            marginBottom:"3%",
                            flex:1,
                           
                        }}
                    >
                        
                        <TextInput
                        style={{ ...FONTS.body3 , color:'#005e66' , paddingLeft:'3%',flex:4 }}
                        placeholder=" search "
                        placeholderTextColor="#005e66"
                        onChangeText={(search) => setSearch(search)}
                        />
                        <TouchableOpacity style={{alignSelf:'flex-end',
                        //backgroundColor:'gray',
                        width:40,height:40,borderRadius:25,alignContent:'center',justifyContent:'center',marginRight:'1%'}}
                        onPress={()=>navigation.navigate('search')}
                        >
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: COLORS.primary,
                                alignSelf:'center'
                            }}
                        />
                        </TouchableOpacity>
                    </View>
                </View>

        </View>
    )
}

const [join, setJoin] = useState("JOIN");
const [pay, setPay] = useState("15$");
const [place, setplace] = useState("11B10101");
const [start, setstart] = useState("sat, January 25, 2021 at 3:00 PM - Thu, January 30, 2021 at 2:00 Pm");
//const [end, setend] = useState(" 2021-11-02T16:33:00.000Z");
const [joinColor, setJoinColor] = useState(COLORS.white);
const [joinTextColor, setJoinTextColor] = useState(COLORS.primary);
const onPressJoinBotton= () => {
   if (join=='JOIN'){
       setJoin('JOINED');
   }
   else  if (join=='JOINED'){
    setJoin('JOIN');
}
if (joinColor==COLORS.white){
    setJoinColor(COLORS.primary);
}
else  if (joinColor==COLORS.primary){
    setJoinColor(COLORS.white);
}
if (joinTextColor==COLORS.primary){
    setJoinTextColor(COLORS.white);
}
else if (joinTextColor==COLORS.white){
    setJoinTextColor(COLORS.primary);
}
  };
    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3
    const styles = StyleSheet.create({
      cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
      },
      container: {
        flex: 1,
      },
      emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
      },
      headerBackgroundImage: {
        //paddingBottom: 70,
        paddingTop: 45,
        height:200,
        width:'100%',
        alignContent:'center',
        justifyContent:'center'
        
      },
      headerContainer: {
        backgroundColor:'white',
       // height:00,

      },
      footer: {
    
        paddingHorizontal: 20,
        paddingVertical: -50

    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 7
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
      headerColumn: {
        backgroundColor: 'transparent',
  
        ...Platform.select({
          ios: {
            alignItems: 'center',
            elevation: 1,
            marginTop: -1,
          },
          android: {
            alignItems: 'center',
          },
        }),
      },
      placeIcon: {
        color: 'white',
        fontSize: 26,
      },
      scroll: {
        backgroundColor: '#FFF',
      },
      telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
      },
      userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      userCityRow: {
        backgroundColor: 'transparent',
      },
      userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
      },
      userImage: {
        //borderColor: COLORS.white,
        borderRadius: 100,
        borderColor:COLORS.white,
        borderWidth:5,
        height: 200,
      //  marginBottom: 15,
        width: 200,
       // position:'absolute',
        top:-30,
        alignSelf:'center'
      
  
      },
      userNameText: {
        color: COLORS.primary,
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
        flex:1,
      },
      scrollView: {
       // backgroundColor: 'pink',
        marginHorizontal: 20,
      },
      scrollbtnEvent:{
              backgroundColor:EventFull,
              flex:1,
              borderRadius: 40,
              width:'100%',
              height:50,
              justifyContent:'center',
              alignContent:'center',
              marginRight:'2%', 
                
      },
      scrollbtnMedia:{
        backgroundColor:MediaFull,
        flex:1,
        borderRadius: 40,
        width:'100%',
        height:50,
        justifyContent:'center',
        alignContent:'center',
        marginRight:'2%',   
},

scrollbtnFollowers:{
  backgroundColor:FollowersFull,
  flex:1,
  borderRadius: 40,
  width:'100%',
  height:50,
  justifyContent:'center',
  alignContent:'center',
  marginRight:'2%',   
},
      textbtnF:{
        color: Followersc,
        fontSize:SIZES.body4, 
        alignSelf:'center',
        fontWeight:'bold'
      },
      textbtnM:{
        color: Mediac,
        fontSize:SIZES.body4, 
        alignSelf:'center',
        fontWeight:'bold'
      },
      
      textbtnE:{
        color: Eventc,
        fontSize:SIZES.body4, 
        alignSelf:'center',
        fontWeight:'bold'
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      item: {
        margin: 10,
      },
      itemPhoto: {
        width: 200,
        height: 200,
      },
      itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
      },
    })   
    function renderfollowbtn() {
      return (
        <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, {
            backgroundColor: '#FFF'
        }]}
    >
         <TouchableOpacity
                  //  onPress={() => navigation.navigate('')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15,
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387',

                    }]}>Join Now</Text>
                </TouchableOpacity>
        </Animatable.View>
       
       ) }


    function renderMainCategories() {
        return (
         
        
   <View style={styles.headerContainer}>
    
   
   <ImageBackground style={styles.headerBackgroundImage} blurRadius={2.8}  source={images.think}>


   <CountDown
        size={30}
        until={60 * 60 * 60 * 1 + 60 * 60 * 1 + 60 * 1}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        timeLabelStyle={{...FONTS.h4 ,color: 'white',fontWeight:'bold'}}
        digitStyle={{backgroundColor: '#FFF'}}
      //  separatorStyle={{color: '#FFF'}}
        digitTxtStyle={{color:COLORS.primary}}
        //timeLabels={{}}

//        showSeparator

      />
     
   </ImageBackground>
<View style={{
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:50,
}}>
  
   <Text style={{

            fontSize:SIZES.h2,
            fontWeight:"bold",
            color:COLORS.primary,
            marginLeft:'-1%',
            marginBottom:20,
            
       }}>
          Think Like A Programmer               <FontAwesome name="usd" color='#000' size={17}/>
          <Text style={{fontSize:18,  color: '#000',  fontWeight:'normal'}}>15  </Text>
       <Text style={{fontSize:14,  color: '#666666',  fontWeight:'normal'}}> Organized by </Text>
          <Text style={{fontSize:14,  fontWeight:'bold', color: '#000'}}>IEEE Community</Text>

            </Text>
      
      
       

       <View style={{ flexDirection:'row',marginBottom:'2%'}}>
       <FontAwesome 
                    name="calendar"
                    color='#c4c8cf'
                    size={30}   
                    style={{
                    //  tintColor:COLORS.primary,
                     marginRight:'3%'
                      }} 
                />
       <Text style={{
           fontSize:16,
            color:'#000000',
            alignSelf:'center'
       }}>
           {start}
       </Text>
       </View>
       
       <View style={{ flexDirection:'row',marginBottom:'3%'}}>
       <FontAwesome 
                    name="map-marker"
                    color='#c4c8cf'
                    size={30}
                    style={{
                    //  tintColor:'#009387',
                     // flex:1,
                     marginRight:'3%'
                      }}        
                    
                />
           <Text>
           <Text style={{
           fontSize:16,
            color:'#000000',
            alignSelf:'center'
       }}>Conferance Hall</Text>
      

                <Text  style={{
           fontSize:13,
            color:'#666666',
            alignSelf:'center'
       }}> {'\nAn-Najah National University, Nablus'} 
                    </Text>
                
                </Text>
   
      
       </View>
       
       <View style={{ flexDirection:'row',marginBottom:'3%'}}>
       <FontAwesome 
                    name="microphone"
                    color='#c4c8cf'
                    size={30}   
                    style={{
                   //   tintColor:COLORS.primary,
                     marginRight:'3%'
                      }} 
                />
                <Text>
       <Text style={{
           fontSize:16,
            color:'#000000',
            alignSelf:'center'
       }}>
           Raed Qadi
       </Text>
       <Text  style={{
           fontSize:13,
            color:'#666666',
            alignSelf:'center'
       }}> {'\nProfessor In Computer Engineering Department'} 
         </Text>
      </Text>
    </View>
       
     
   <View style={{
     
         alignContent:'center',
         justifyContent:'center',
       //  marginTop:'-27%',
       //  marginLeft:'3%',
        // height:200,

       }}>
    <View
    style={{
     // marginBottom:'10%',
      //height:0,
    }}>
    <View style={{
        flexDirection:'row',
        marginBottom:'3%',
        justifyContent:'center',
        alignContent:'center'
    }}>
    <Text style={{
      fontSize:17,
      fontWeight:'bold',
      paddingRight:210,
     marginTop:'4%',
      color:COLORS.primary,}}>Event Description</Text>
      </View>
    <Text style={{
      fontSize:SIZES.body3,
      paddingLeft:4,
      paddingRight:10,
      color:COLORS.black,
      textAlign: "justify",
      borderBottomWidth: 1,
      borderBottomColor: '#c4c8cf',
      marginTop:'-1%'
      
    }}>
   The second edition of grow yourREGIOn conference is set to take place on 8-9 November
   in Valencia, Spain, with 350 participants from regional authorities that
   manage ERDF and INTERREG projects, clusters and the business community. 
   The event is jointly organised by the European Commission's Directorates-Generals for Internal Market,
   Industry, Entrepreneurship and SMEs (GROW) and for Regional and Urban Policy (REGIO), 
   in collaboration with the Valencia Regional Government. 
   {'\n'} 
  
     </Text>

</View>
</View>
       <View
       style={
           {
             flexDirection:'row',
             justifyContent:'center',
             width:'100%',
             marginTop:'5%',
             flexDirection:'row',
             flexWrap:'wrap',
             height:7,
             //top:-20,
             marginBottom:40,
             
           }
         }>
         
         <TouchableOpacity  style={styles.scrollbtnMedia}
       onPress={handleMediaFull}>
         <Text style={styles.textbtnM}>Media</Text>
       </TouchableOpacity>
      
       <TouchableOpacity  style={styles.scrollbtnEvent}
       onPress={handleEventFull}>
         <Text style={styles.textbtnE}>Links</Text>
       </TouchableOpacity>

       <TouchableOpacity  style={styles.scrollbtnFollowers}
       onPress={handleFollowersFull}>
         <Text style={styles.textbtnF}>Joined</Text>
       </TouchableOpacity>

       
       </View>
       
       </View>
       </View>
        )
    }
    
    function ret (){
      if (Followersc==COLORS.white){
      return(
        <SafeAreaView style={{
          backgroundColor:'white',
          marginTop:'-7%',
        }}>
        {renderFollowers()}
        </SafeAreaView>
      )
      }
      else if (Eventc==COLORS.white){
      return(
        <SafeAreaView style={{
          backgroundColor:'white',
         marginTop:'-7%',
        }}>
        {renderLinks()}
        </SafeAreaView>
      )
      }
     
      else if (Mediac==COLORS.white){
        return(
          <SafeAreaView style={{
            backgroundColor:'white',
            marginTop:'-7%',
          }}>
          {renderPosts()}
          {renderfollowbtn()}
          </SafeAreaView>
          )
      }
    }
    
  function img (icon){
    if (icon!='')
      return (
        <Image
        source={icon}
        //resizeMode="cover"
        style={{
            margin:'5%',
            marginBottom:'10%',
            width: '90%',
            height: 300,
            borderRadius: SIZES.radius
        }}
    />
      )
    }
    function renderPosts() {
     
      
      const renderItem = ({ item }) => (
        
         
          <View
              style={{ marginBottom: SIZES.padding * 2, backgroundColor:'white' }}
              
          >
          
              {/* Image */}
              
              <View
                  style={{
                      marginBottom: SIZES.padding/2,
                      backgroundColor:COLORS.lightGray3,
                      borderRadius:25,
                      paddingBottom:'6%'
                  }}
              >
               <Text style={{ ...FONTS.body2 , color:COLORS.primary, margin:'5%',marginBottom:'7%'}}>{item.text}</Text>
                    {img(item.icon)}
                  <View
                      style={{
                          position: 'absolute',
                          bottom: 0,
                          height: 50,
                          left:318,
                          //paddingTop:'5%',
                          width: SIZES.width * 0.13,
                          backgroundColor: COLORS.primary,
                          borderTopLeftRadius: SIZES.radius,
                          borderBottomRightRadius: SIZES.radius,
                          alignItems: 'center',
                          justifyContent: 'center',
                          ...styles.shadow
                      }}
                  >
                   <TouchableOpacity
                   onPress={handleLike}
                   >
                      <Image
                          source={icons.like}
                          style={{
                              width : 30,
                              height:30,
                              tintColor: like,
                          }} 
                          

                      />
                      </TouchableOpacity>
                  </View>
                  
              </View>    
                      
          </View>
          
      )

      return (
       
        <FlatList  
              data={posts}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding * 2,
                  paddingBottom: 30
              }}
          />
      )
  }

  function renderLinks() {
     
      
    const renderItem = ({ item }) => (
       <View style={{
         backgroundColor:COLORS.lightGray,
         borderRadius:25,
         marginLeft:'3%',
         marginRight:'3%',
         marginBottom:'3%',
         padding:'5%'

       }}>
         <Text style={{...FONTS.h3,color:COLORS.primary,marginLeft:'7%'}}>{item.text}</Text>
         <Text  style={{...FONTS.h3,color:COLORS.secondary,marginLeft:'10%',textDecorationLine: 'underline',marginTop:'3%'}}
              onPress={() => Linking.openURL(item.link)}>
          Video Link
        </Text>
       </View>
       
    )

    return (
     
      <FlatList  
            data={links}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30
            }}
        />
    )
}


    function renderFollowers() {
      const renderItem = ({ item }) => (

          <TouchableOpacity
              style={{ 
                backgroundColor:'white',justifyContent:'center',
                marginLeft:'-3%',
                marginRight:'-3%',
                alignContent:'center'}}
              onPress={() => navigation.navigate("studentPage", {
                  item,
              })}
          >
          
              {/* Image */}
              
              <View
                  style={{
                      marginBottom: SIZES.padding/2,
                      flex:1,
                      flexDirection:'row',
                      width:'100%',
                      height:100,
                      backgroundColor:COLORS.lightGray3,
                      borderRadius:25,
                      justifyContent:"center",
                      alignContent:"center",
                  }}
              >
               <View
               style={{
                margin:'3%',
                marginLeft:'10%',
                        width:50,
                        height: 50,
                        flex:1,
                        
                        
               }}>

                  <Image
                      source={item.icon}
                      resizeMode="cover"
                      style={{
                       width:80,
                       height:80,
                       borderRadius:100,
                       marginLeft:'-25%',
                      }}
                  />
                  </View>
                 
                   <Text style={{ ...FONTS.h4 , color:COLORS.primary ,flex:1,alignSelf:"center",
                   right:60,
                   }}
                      // onPress={onPressJoin}
                      >{item.name}</Text>
          <TouchableOpacity  style={{
        // position:'absolute',
         //top:200,
         left:'1%',
         top:22,
         //right:30,
        // backgroundColor:COLORS.primary,
         borderRadius:30,
         width:'27%',
         height:55,
         marginRight:15,
         alignContent:'center',
         justifyContent:'center',
       // borderColor:COLORS.secondary,
       //  borderWidth:1,
         flexDirection:'row',
       }}
       onPress={() => navigation.navigate("conversation")}
       >
       <Image
                      source={icons.conversation}
                     // resizeMode="cover"
                      style={{
                        tintColor:COLORS.primary,
                       width:35,
                       height:35,
                       right:-30,
                       top:9,
                      }}
                  />
        
         
       </TouchableOpacity>
                  

              </View>

              

          </TouchableOpacity>
      )

      return (
       
        <FlatList  
              data={followers}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              //showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding * 2,
                  paddingBottom: 30
              }}
          />
      )
  }
   
    return (
     
        <SafeAreaView style={styles.container}> 
        <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
        {renderHeader()}
            {renderMainCategories()}
            {ret()}
        </ScrollView>
        <TouchableOpacity
         onPress={()=>navigation.navigate('addEvent')}
       style={{
           backgroundColor:COLORS.primary,
           alignSelf:'center',
           width:"100%",
           height:60,
       
         
           alignContent:'center',
           justifyContent:'center'
       }}
       >
           <Text style={{
             fontSize:17,
             fontWeight:'bold',
             //fontWeight:'bold',
             color:COLORS.white,
             alignSelf:'center'
           }
           }> Edit </Text>
       </TouchableOpacity>
      
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    starPress:{
        tintColor:COLORS.gold
    },
  
    text_header: {
      color: '#005e66',
      fontWeight: 'bold',
      fontSize: 24,
  },
  text_footer1: {
      color: '#05375a',
      fontSize: 17,
      fontWeight: "bold",
   //   fontFamily: 'ZenKurenaido-Regular'


  },
  text_footer2: {
      color: '#666666',
      fontSize: 12,     
  },
})

export default Home;