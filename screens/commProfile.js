import React from "react";
import { useState   } from "react";
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
    Alert,
    
} from "react-native";

import { MenuProvider } from 'react-native-popup-menu';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { ScrollView } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
LogBox.ignoreLogs([
	'VirtualizedLists should never be nested',
])

const Home = ({ navigation }) => {
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
const [search, setSearch] = useState("");

const [EventFull, setEventFull] = useState(COLORS.primary);
const [MediaFull, setMediaFull] = useState(COLORS.secondary);
const [FollowersFull, setFollowersFull] = useState(COLORS.secondary);
const [Eventc, setEventc] = useState(COLORS.white);
const [Mediac, setMediac] = useState(COLORS.primary);
const [Followersc, setFollowersc] = useState(COLORS.primary);
const [visiblePost, setVisiblePost] = useState(false);
        
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
    var obj=null;  
const publish =()=>{
   setVisiblePost(true);
    obj = {
     id :5,
     text : search.toString(),
     icon :'',
     like :COLORS.white,
   };
   posts.push(obj);
   console.log(posts);
}
const addImage =()=>{
    
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
          
            <Menu >
    <MenuTrigger>
    <Image
      source={icons.list}
      resizeMode="contain"
      style={{
          width: 30,
          height: 30,
          tintColor:COLORS.primary,
          top:7,
          right:5,
      }}
     />
     </MenuTrigger> 
    <MenuOptions style={{
        alignSelf:'center',marginLeft:-5
    }}
    optionsContainerStyle=
   {{height:'100%',width:200,
  // borderRadius:25
   }}
    >
     <MenuOption  
     style={styles.menuItem}>
      <View>
        <Image
        source={icons.list}
        style={{
          tintColor:COLORS.primary,
          alignSelf:'center',
          width:35,height:35,
        }}
        ></Image>
      </View>
      </MenuOption>
      <MenuOption onSelect={()=>navigation.navigate('settings')}  style={
        styles.menuItem}>
      <View ><Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold',alignSelf:'center', }}>Settings</Text></View>
      </MenuOption>
      <MenuOption onSelect={() =>navigation.navigate('about')} style={ styles.menuItem}>
        <Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold',alignSelf:'center', }}>About Us</Text>
      </MenuOption>
      <MenuOption onSelect={() =>navigation.navigate('terms')} style={ styles.menuItem}>
        <Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold',alignSelf:'center', }}>Terms & Conditions</Text>
      </MenuOption>
      <MenuOption onSelect={() =>{
       Alert.alert(
    "Log Out",
    "Do you want to log out?",
    [
      {
        text: "Cancel",
        onPress: () => {return;}
      },
      { text: "Log Out", onPress: () => navigation.navigate('SignInScreen')}
    ]
  );
     }} style={ styles.menuItem}>
        <Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold',alignSelf:'center', }}>Log Out</Text>
      </MenuOption>
    </MenuOptions>
  </Menu>
    </View>
   
        
    )
}
function renderAddPost() {
    return (
        <View style={{ flexDirection: 'row', height: 200,backgroundColor:'white',alignContent:'center',justifyContent:'center',marginBottom:'5%' }}>
        <View style={{
            borderRadius:25,
            borderWidth:2,
            borderColor:COLORS.secondary,
            backgroundColor:COLORS.lightGray,
            width:'90%',
            justifyContent:'center',
            alignContent:'center',
        }}>
        <ScrollView style={{
         
        }}>
            <TextInput
                style={{ ...FONTS.body2 , color:'#005e66' , paddingLeft:'3%',marginLeft:'3%',marginRight:'3%', marginTop:'3%',backgroundColor:COLORS.lightGray3,height:120,borderRadius:25}}
                placeholder=" What is new in your community?  "
                multiline={true}
                numberOfLines={1}
                placeholderTextColor="#005e66"
                onChangeText={(search) => setSearch(search)}
                />
        </ScrollView>
        <View style={{
            flexDirection:'row',
        }}>
        <TouchableOpacity style={{
            //width:'90%',
            flex:3,
            height:50,
            backgroundColor:COLORS.primary,
            borderRadius:25,
            margin:SIZES.padding*0.5,
            alignSelf:'center',
            justifyContent:'center',
            alignContent:'center',
        }}
        onPress={publish}>
         <Text style={{ ...FONTS.h2, color:COLORS.white ,alignSelf:'center'}}>Publish Post</Text>   
        </TouchableOpacity>
        <TouchableOpacity style={{
            //width:'90%',
            flex:1,
            height:50,
            backgroundColor:COLORS.primary,
            borderRadius:25,
            margin:SIZES.padding*0.5,
            alignSelf:'center',
            justifyContent:'center',
            alignContent:'center',
        }}
        onPress={addImage}>
          <Image
            source={icons.image}
            style={{
                alignSelf:'center',
                width : 30,
                height:30,
                tintColor: COLORS.white,
            }}
        />
        </TouchableOpacity></View>
        </View>
        </View>
    )
}
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
        height:'75%',
        width:'100%',
        
      },
      headerContainer: {
        backgroundColor:'white',
        height:500,

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
       borderWidth:3,
       height: 150,
       marginBottom: 15,
       width: 150,
     //  position:'absolute',
      // top:140,
     //  left:'75%',
     
      
  
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
        marginRight:'4%',   
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
     menuItemPost: {
        backgroundColor:COLORS.white,
        width:130,
        marginTop:7,
        marginLeft:-30,
        marginRight:-30,
        marginBottom:7,
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:COLORS.secondary
      },
      menuItem: {
        backgroundColor:COLORS.white,
        width:170,
        marginTop:7,
        marginLeft:-30,
        marginRight:-30,
        marginBottom:7,
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:COLORS.secondary
      },
    })
    const restaurantData = [
        {
            id: 1,
            name: "Think Like a Programmer",
            people: 18,// num of att 
            categories: 'IEEE', // comm  
            photo: images.think,
           
           
        },
        {
            id: 2,
            name: "Devfest",
            people: 48,// num of att 
            categories: 'IEEE', // comm  
            photo: images.devfest,
           
           
        },

    ]

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
 

    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
   
    

   

    function renderMainCategories() {
        return (
          
   <View style={styles.headerContainer}>
                
   
   <ImageBackground
     style={styles.headerBackgroundImage}
     blurRadius={10}
     source={require('../assets/images/ieee.jpg')}
     
   >
   
   
  
     <View style={styles.headerColumn}>
     
       <Image
         style={styles.userImage}
         source={require('../assets/images/ieee.jpg')}
       />
       
      
       <View style={styles.userAddressRow}>
       <Image
                 name="place"
                 underlayColor={COLORS.primary}
                 iconStyle={styles.placeIcon}     
       /> 
       </View>
     </View>
   </ImageBackground>
   
     
   <Text style={{
           //flex:1,
            fontSize:SIZES.h2,
            fontWeight:"bold",
            color:COLORS.primary,
            position:'absolute',
            top:'52%',
            marginLeft:'3%',
            //marginBottom:'%',
            
       }}>
           IEEE Najah Student Branch 
       </Text>
   <View style={{
     
         alignContent:'center',
         justifyContent:'center',
         marginTop:'-27%',
         marginLeft:'3%',
         height:200,

       }}>
    <View
    style={{
      marginBottom:'10%',
      //height:0,
    }}>
  
    <Text style={{
      fontSize:SIZES.body3,
      paddingLeft:4,
      paddingRight:10,
      color:COLORS.black,
      
    }}>
      IEEE Najah Student Branch IEEE Najah Student Branch IEEE Najah Student Branch IEEE Najah Student Branch IEEE Najah Student Branch IEEE Najah Student Branch  
    </Text>
</View>

       <View
       style={
           {
             flexDirection:'row',
             justifyContent:'center',
             width:'100%',
             //marginTop:'10%',
             flexDirection:'row',
             flexWrap:'wrap',
             height:7,
             top:-20,
            // marginBottom:30,
             
           }
         }>
         
       <TouchableOpacity  style={styles.scrollbtnEvent}
       onPress={handleEventFull}>
         <Text style={styles.textbtnE}>Events</Text>
       </TouchableOpacity>

       <TouchableOpacity  style={styles.scrollbtnFollowers}
       onPress={handleFollowersFull}>
         <Text style={styles.textbtnF}>Followers</Text>
       </TouchableOpacity>

       <TouchableOpacity  style={styles.scrollbtnMedia}
       onPress={handleMediaFull}>
         <Text style={styles.textbtnM}>Media</Text>
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
          marginTop:'-10%',
        }}>
        {renderFollowers()}
        </SafeAreaView>
      )
      }
      else if (Eventc==COLORS.white){
      return(
        <SafeAreaView style={{
          backgroundColor:'white',
         marginTop:'-10%',
        }}>
        {renderRestaurantList()}
        </SafeAreaView>
      )
      }
     
      else if (Mediac==COLORS.white){
        return(
          <SafeAreaView style={{
            backgroundColor:'white',
            marginTop:'-10%',
          }}>
          {renderPosts()}
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
              <View style={{flexDirection:'row'}}>

                <View style={{flex:5}}></View>
                <Menu >
    <MenuTrigger>
    <Image
      source={icons.menu}
      resizeMode="contain"
      style={{
          width: 30,
          height: 30,
          tintColor:COLORS.primary,
          top:5,
          right:2,
      }}
     />
     </MenuTrigger> 
    <MenuOptions style={{
        alignSelf:'center',marginLeft:-5
    }}
    optionsContainerStyle=
   {{height:120,width:150,borderRadius:25}}
    >
      <MenuOption onSelect={()=> alert('edit')}  style={
        styles.menuItemPost}>
      <View ><Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold',alignSelf:'center', }}>Edit</Text></View>
      </MenuOption>
      <MenuOption onSelect={() => alert(`Delete`)} style={ styles.menuItemPost}>
        <Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold',alignSelf:'center', }}>Delete</Text>
      </MenuOption>
    
    </MenuOptions>
  </Menu>
              </View>
    
               <Text style={{ ...FONTS.body2 , color:COLORS.primary, margin:'5%',marginBottom:'7%'}}>{item.text}</Text>
                    {img(item.icon)}
                  <View
                      style={{
                          position: 'absolute',
                          bottom: 0,
                          height: 50,
                          left:289,
                          //paddingTop:'5%',
                          width: SIZES.width * 0.2,
                          backgroundColor: COLORS.primary,
                          borderTopLeftRadius: SIZES.radius,
                          borderBottomRightRadius: SIZES.radius,
                         // paddingTop:'15%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          ...styles.shadow
                      }}
                  >
                   <View
                    style={{ flexDirection:'row',justifyContent:'center',alignContent:'center'}}
                   >
                   <Text style={{ ...FONTS.h4 , color:COLORS.white }}> 15 </Text>
                      <Image
                          source={icons.like}
                          style={{
                              width : 30,
                              height:30,
                              tintColor: 'red',
                          }} 
                          

                      />
                      </View>
                  </View>
                  
              </View>            
          </View>
      )

      return (
      <View>
      {renderAddPost()}
       { visiblePost&& ( <View
              style={{ marginBottom: SIZES.padding * 2, backgroundColor:'white' }}
          >
              <View
                  style={{
                      marginBottom: SIZES.padding/2,
                      backgroundColor:COLORS.lightGray3,
                      borderRadius:25,
                      paddingBottom:'6%',
                      width:'90%',
                      alignSelf:'center'
                  }}
              >
    <Menu >
    <MenuTrigger>
    <Image
    source={icons.menu}
    style={{
        marginTop:'3%',
        marginRight:'3%',
        alignSelf:'flex-end',
        width :25,
        height:25,
        tintColor:COLORS.primary,
    }} /></MenuTrigger> 
    <MenuOptions style={{
        alignSelf:'center'
    }}
    optionsContainerStyle=
   {{height:80,width:80}}
    >
      <MenuOption onSelect={()=> alert('edit')} >
      <Text style={{...FONTS.body2 , color:COLORS.primary,fontWeight:'bold' }}>Edit</Text>
      </MenuOption>
      <MenuOption onSelect={() => alert(`Delete`)} >
        <Text style={{...FONTS.body2 , color:'red',fontWeight:'bold' }}>Delete</Text>
      </MenuOption>
    </MenuOptions>
  </Menu>
               <Text style={{ ...FONTS.body2 , color:COLORS.primary, margin:'5%',marginBottom:'7%'}}>{search}</Text>
                  
                  <View
                      style={{
                          position: 'absolute',
                          bottom: 0,
                          height: 50,
                          left:289,
                          //paddingTop:'5%',
                          width: SIZES.width * 0.2,
                          backgroundColor: COLORS.primary,
                          borderTopLeftRadius: SIZES.radius,
                          borderBottomRightRadius: SIZES.radius,
                         // paddingTop:'15%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          ...styles.shadow
                      }}
                  >
                   <View
                    style={{ flexDirection:'row',justifyContent:'center',alignContent:'center'}}
                   >
                   <Text style={{ ...FONTS.h4 , color:COLORS.white }}> 15 </Text>
                      <Image
                          source={icons.like}
                          style={{
                              width : 30,
                              height:30,
                              tintColor: 'red',
                          }} 
                          

                      />
                      </View>
                  </View>
                  
              </View>  
                    
          </View>)}
        <FlatList  
              data={posts}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              extraData={posts}
              refreshing={refreshing}
              onRefresh={onRefresh}
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding * 2,
                  paddingBottom: 30
              }}
          /></View>
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
              onPress={() => navigation.navigate("studentPageC", {
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
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
           
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("eventProfile", {
                    item,
                })}
            >
            
                {/* Image */}
                
                <View
                    style={{
                        marginBottom: SIZES.padding/2
                    }}
                > 
               

                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 250,
                            borderRadius: SIZES.radius
                        }}
                    />
                     
                   
                    
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 60,
                            left:289,
                            width: SIZES.width * 0.2,
                            backgroundColor: COLORS.primary,
                            borderTopLeftRadius: SIZES.radius,
                            borderBottomRightRadius: SIZES.radius,
                            flexDirection:'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                    <Text style={{ ...FONTS.h4 , color:COLORS.white }}> 15 </Text>
                        <Image
                            source={icons.rate}
                            style={{
                                width :20,
                                height:20,
                                tintColor: 'gold',
                            }} 
                            

                        />
                       
                    </View>
                    
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 , color:COLORS.primary , fontWeight:'bold'}}>{item.name}</Text>

                <View
                    style={{
                       // marginTop: SIZES.padding,
                        flexDirection: 'row',
                        marginBottom:'10%',
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.people}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10,
                            marginTop :4,
                        }}
                    />
                    <Text style={{ ...FONTS.body3 , color:COLORS.primary }}>{item.people} Joined</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                           
              <View
                  style={{ flexDirection: 'row' }}
                 
              >
                  <Text style={{ ...FONTS.body3 , color:COLORS.primary }}>{item.categories} Community</Text>
                  
              </View>
        
                        }

                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
         <View style={{flexDirection:'column'}}>
        
          <FlatList  
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
            </View>
        )
    }

    return (
        <MenuProvider>
        <SafeAreaView style={styles.container}
        > 
        <ScrollView style={styles.container}
         showsVerticalScrollIndicator={false}
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {renderHeader()}
            {renderMainCategories()}
            {ret()}
        </ScrollView>
        </SafeAreaView>
        </MenuProvider>
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

   
})

export default Home;