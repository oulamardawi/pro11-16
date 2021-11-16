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
    FlatList,
    TextInput,
    RefreshControl
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { ScrollView } from "react-native-gesture-handler";
const communities = ({ navigation }) => {
const [search, setSearch] = useState("");
const [follow, setfollow] = useState("Followed");
const [followcoler, setfollowcoler] = useState(COLORS.primary);
const [followcoler2, setfollowcoler2] = useState('white');
const onPressFollow= () => {
    if (follow=='Follow'){
        setfollow("Followed");
    }
    else  if (follow=='Followed'){
      setfollow("Follow");
    }
   if (followcoler==COLORS.lightGray){
   
        setfollowcoler(COLORS.primary);}
    else{
          setfollowcoler(COLORS.lightGray);
       
        } 
        if (followcoler2==COLORS.primary){
          setfollowcoler2('white');
        }else {
          setfollowcoler2(COLORS.primary);
        }

    
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

    const categoryData = [
        {
            id: 1,
            name: "ANN",
            icon: images.ann,
        },
        {
            id: 2,
            name: "GDG",
            icon: images.gdg,
        },
        
        {
            id: 3,
            name: "IEEE",
            icon: images.ieee,
        },
        {
            id: 4,
            name: "DSC",
            icon: images.dsc,
        },

    ]

    const [categories, setCategories] = React.useState(categoryData)
    

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
function foll(){
      if (followcoler==COLORS.lightGray)
      {return (
        <Image
         style={{
           tintColor:COLORS.primary,
           width:20,
           height:20,
          marginRight:'7%',
           alignSelf:'center',
         }}
         source={require('../assets/icons/plus.png')}
       />
      )

      }}
    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                style={{  margin : SIZES.padding*0.5,
                width:'100%'
                }}
                onPress={() => navigation.navigate("commPage", {
                    item,
                })}
            >
                {/* Image */}
                
                <View
                    style={{
                        marginBottom: SIZES.padding,
                        width:'100%',
                        height:250,
                    }}
                >
                   <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: '98%',
                                height: 250,
                                resizeMode:'cover',
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,


                            }}
                        />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 200,
                            height: 50,
                            width: SIZES.width * 0.2,
                            backgroundColor: COLORS.primary,
                            borderBottomRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 , color:COLORS.white }}>{item.name}</Text>
                    </View>
                    <TouchableOpacity  style={{
                    position:'absolute',
                    top:190,
                    left:220,
                    backgroundColor:followcoler,
                    borderRadius:30,
                    width:'35%',
                    height:50,
                    alignContent:'center',
                    justifyContent:'center',
                    // borderColor:COLORS.secondary,
                    // borderWidth:2,
                    flexDirection:'row',
                

                }}
                onPress={onPressFollow}
                >
                
                {foll()}
                    <Text style={{color:followcoler2,fontSize:SIZES.body2, alignSelf:'center',fontWeight:'bold'}}
                    
                    >{follow}</Text>
                    
                </TouchableOpacity>
                </View>
            </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2,marginBottom:120 }}>
                <Text style={{ ...FONTS.h1 , color:COLORS.primary }}>Communities</Text>
                

                <FlatList
                    data={categories}
                    
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2}}
                />
            </View>
        )
    }

    
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
            {renderHeader()}
            {renderMainCategories()} 
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        //paddingBottom :'50%'
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
   
})

export default communities;