import React from "react";
import { useState   } from "react";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TouchableHighlight,
    TextInput,
    RefreshControl
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { ScrollView } from "react-native-gesture-handler";
const Tab = createBottomTabNavigator();
const eventwait = ({ navigation }) => {
const [search, setSearch] = useState("");
const [joinText, setJoinText] = useState("JOINED");
const [star, setStar] = useState(COLORS.secondary);

const handleStar = () => { 
    if (star==COLORS.secondary)
    setStar('gold');
    else setStar(COLORS.secondary);
    }


    const restaurantData = [
        {
            id: 1,
            name: "IEEE XTREME",
            people: 18,// num of att 
            categories: 'IEEE', // comm  
            photo: images.xtreme,
        },
        {
            id: 2,
            name: "Devfest",
            people: 48,// num of att 
            categories: 'GDG', // comm  
            photo: images.devfest,
        },
        {
            id: 3,
            name: "Iternational Woman Day",
            people: 18,// num of att 
            categories: 'GDG', // comm  
            photo: images.wtm,
        },

    ]
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
            
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

   
    function renderRestaurantList() {
        const renderItem = ({ item }) => (

            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("eventPage")}
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
                                        key={item.id}
                                    >
                                        <Text style={{ ...FONTS.body3 , color:COLORS.primary }}>{item.categories} Community</Text>
                                        
                                    </View>
                                
                        }
                        <View
                        style={{
                           // position: 'absolute',
                           // bottom: 0,
                            height:50,
                            width:50,
                            top:-25,
                            right:"-135%",
                           // width: SIZES.width * 0.15,
                           // backgroundColor: COLORS.secondary,
                           // marginTop:4,
                           borderRadius:100,
                         //  borderWidth:3,
                         //  borderColor:COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf:'center',
                            
                          
                        }}
                    >
                     <TouchableOpacity
                     onPress={handleStar}
                     style={{
                       alignSelf:'center',
                       alignContent:'center',
                       justifyContent:'center'
                     }}
                     >
                        <Image
                            source={icons.rate}
                            style={{
                                width :35,
                                height:35,
                                tintColor: star,
                                alignSelf:'center'
                            }} 
                            

                        />
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}
        >
        <ScrollView
        showsVerticalScrollIndicator={false}
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
            {renderHeader()}
            
            <Text style={{
             margin:'3%',
            // marginBottom:'5%',
             fontSize:SIZES.h1,
             fontWeight:"bold",
             color:COLORS.primary
            }}>Joined Events</Text>
            {renderRestaurantList()}
            </ScrollView>
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
   
})

export default eventwait;