import { StatusBar, StyleSheet, Text, View, TextInput, FlatList, ScrollView, Dimensions, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants/Colors'
import CategoryComponent from '../components/CategoryComponent';
import SortComponent from '../components/SortComponent';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

// import IMG_CAKE from '../assets/images/categories/cake.jpg' 

import RestaurantComponent from '../components/RestaurantComponent';
import { IMAGES } from '../constants/Images';
import { useDispatch, useSelector } from 'react-redux';
import { setReset } from '../redux/slices/homeSlice';
import { ROUTES } from '../constants/Routes';
import AwesomeAlertCmp from '../components/AwesomeAlertCmp';
import { FONT_FAMILY, FONT_SIZE } from '../constants/Font';

const { width, height } = Dimensions.get('window')


const HomeScreen = ({ navigation }) => {
  // console.log('--------Store.getState()', store.getState().cart)
  const { restaurants, foods } = useSelector(state => state.home)
  const dispatch = useDispatch()
  const [showAlert, setShowAlert] = useState(true)

  useEffect(() => {
    dispatch(setReset())
    // Alert.alert( 'Development Version',  
    // `This is development verioon, We are coming soon. You won't able to order any food for now. we are launching this app very soon.`,  

    // [  
    //     {  
    //         text: 'Cancel',  
    //         onPress: () => console.log('Cancel Pressed'),  
    //         style: 'cancel',  
    //     },  
    //     // {text: 'OK', onPress: () => console.log('OK Pressed')},  
    // ]  )
  }, [])


  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  let categoryData = [
    { id: 1, title: "Cake", imgSrc: IMAGES.CATEGORIES[0].CAKE },
    { id: 2, title: "Dosa", imgSrc: IMAGES.CATEGORIES[0].DOSA },
    { id: 3, title: "Sandwitch", imgSrc: IMAGES.CATEGORIES[0].SANDWITCH },
    { id: 4, title: "Chole", imgSrc: IMAGES.CATEGORIES[0].CHOLE },
    { id: 5, title: "Pizza", imgSrc: IMAGES.CATEGORIES[0].PIZZA },
  ]

  let soringData = [
    { id: 1, title: "Sort" },
    { id: 2, title: "Nearest" },
    { id: 3, title: "Great Offers" },
    { id: 4, title: "Rating 4.0+" },
    { id: 5, title: "Pure Veg" },
    { id: 6, title: "More" },
  ]

  return (

    <>
      <AwesomeAlertCmp
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        messageStyle={styles.messageStyle}
        titleStyle={styles.titleStyle}
        title="Development version"
        confirmText= "Close"
        message={`App is in Development phase. You won't able to order any food for now.\n\nWe are launching this App very soon.`}
      />
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <ScrollView className='flex-1' style={styles.container}>

        {/* HEADER */}
        <View style={styles.header} className='flex-row justify-between items-center'>
          <View className='flex-row justify-start items-center'>
            <Ionicons name="ios-location-sharp" size={40} color={COLORS.RED} />
            <View style={{ width: width - 100 }}>
              <Text style={styles.headerText} className="font-bold">CSTM Terminus</Text>
              <Text style={[styles.headerText, { color: COLORS.DESC_COLOR }]}>Nav Indraprasth CHS, Kolaba </Text>
            </View>
          </View>
          <FontAwesome name="user-circle" size={40} color={COLORS.LIGHT_GREY} />
        </View>

        {/* SEARCH */}
        <View style={styles.searchContainer} >
          <View style={styles.serachView} className="flex-row items-center justify-between">
            <TextInput
              style={styles.input}
              onChangeText={() => navigation.navigate(ROUTES.FoodScreen)}
              // value={number}
              placeholder="Search for dishes, resturants & groceries"
              // keyboardType="numeric"
              placeholderTextColor={COLORS.DESC_COLOR}
              maxLength={10}
            />
            <FontAwesome name="search" size={20} color={COLORS.RED} />
          </View>
        </View>

        {/* CATEGORIES */}
        <View style={styles.categoryContainer} className="flex-col items-center justify-center" >
          <Text> WHATS'S ON YOUT MIND</Text>
          <View style={styles.categoryBox} className="flex-row items-center justify-center">

            <FlatList horizontal
              data={categoryData}
              renderItem={({ item }) => <CategoryComponent title={item.title} imgSrc={item.imgSrc} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        {/* ALL RESTURANRTS */}
        <View style={{}}>
          <Text className='text-center mb-6' style={{ color: COLORS.BLACK, fontFamily: "Poppins-Medium" }}>ALL RESTURANT</Text>

          {/* SORTING SECTION */}
          <View className="px-3">
            <FlatList horizontal
              data={soringData}
              renderItem={({ item }) => <SortComponent title={item.title} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: 15 }}
            />
          </View>

          {/* FOODS CONTAINER */}
          <View style={styles.restaurantContainer}>
            {restaurants?.map((d, i) => <RestaurantComponent restItem={d} key={i} />)}
          </View>

        </View>

      </ScrollView>
    </>
  )
}


export default HomeScreen


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREY1
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  headerText: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: COLORS.TITLE_COLOR
  },
  searchContainer: {
    // backgroundColor: COLORS.RED,
    paddingHorizontal: 15
  },
  serachView: {
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    elevation: 5
  },
  input: {
    flex: 1,
    color: COLORS.RED,
    fontSize: 18,
  },
  categoryContainer: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  categoryBox: {
    marginTop: 20
  },
  restaurantContainer: {
    marginHorizontal: 15,
    marginTop: 0,
    backgroundColor: COLORS.LIGHT_GREY1
  },
  messageStyle: {
    fontSize: FONT_SIZE.p,
    color: COLORS.DESC_COLOR,
    fontFamily: FONT_FAMILY.POPPINNS.BOLD
  },
  titleStyle: {
    fontSize: FONT_SIZE.h1,
    color: COLORS.RED,
    fontFamily: FONT_FAMILY.POPPINNS.EXTRA_BOLD_ITALIC
    
  }

})