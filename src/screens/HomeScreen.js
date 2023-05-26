import { StatusBar, StyleSheet, Text, View, TextInput, FlatList, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants/Colors'
import CategoryComponent from '../components/CategoryComponent';
import SortComponent from '../components/SortComponent';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import IMG_CAKE from '../assets/images/categories/cake.jpg'
import IMG_PIZZA from '../assets/images/categories/pizza.jpg'
import IMG_DOSA from '../assets/images/categories/dosa.jpg'
import IMG_CHOLE from '../assets/images/categories/chole.jpg'
import IMG_SANDWITCH from '../assets/images/categories/sandwitch.jpg'

import IMG_WHITEDOSA from '../assets/images/restaurant/white_dosa.jpg'
import IMG_PIZZAHOT from '../assets/images/restaurant/pizza_hut.jpg'
import IMG_DOSA1 from '../assets/images/restaurant/dosa.jpg'
import IMG_DOMINOSPIZZA from "../assets/images/restaurant/domino_s_pizza.jpg"
import IMG_CURRY from '../assets/images/restaurant/curry.jpg'
import RestaurantComponent from '../components/RestaurantComponent';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';

const { width, height } = Dimensions.get('window')


const HomeScreen = ({ navigation }) => {

  // const login = useSelector(state => state.login)
  // console.log('login', login)

  // console.log('--------Store.getState()', store.getState())


  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  let categoryData = [
    { id: 1, title: "Cake", imgSrc: IMG_CAKE },
    { id: 2, title: "dosa", imgSrc: IMG_DOSA },
    { id: 3, title: "Sandwitch", imgSrc: IMG_SANDWITCH },
    { id: 4, title: "Chole", imgSrc: IMG_CHOLE },
    { id: 5, title: "Pizza", imgSrc: IMG_PIZZA },
  ]

  let restData = [
    { id: 1, title: "White Dosa", imgSrc: IMG_WHITEDOSA },
    { id: 2, title: "Pizza hut", imgSrc: IMG_PIZZAHOT },
    { id: 3, title: "Dosa", imgSrc: IMG_DOSA1 },
    { id: 4, title: "Domino's pizza", imgSrc: IMG_DOMINOSPIZZA },
    { id: 5, title: "Curry", imgSrc: IMG_CURRY },
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
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <ScrollView className='flex-1' style={styles.container}>

        {/* HEADER */}
        <View style={styles.header} className='flex-row justify-between items-center'>
          <View className='flex-row justify-start items-center'>
            <Ionicons name="ios-location-sharp" size={40} color={COLORS.RED} />
            <View style={{ width: width - 100 }}>
              <Text style={styles.headerText} className="font-bold">Azad Nagar </Text>
              <Text style={styles.headerText}>Nav Indraprasth CHS, Mulund East, Mumbai</Text>
            </View>
          </View>
          <FontAwesome name="user-circle" size={40} color={COLORS.LIGHT_GREY} />
        </View>

        {/* SEARCH */}
        <View style={styles.searchContainer} >
          <View style={styles.serachView} className="flex-row items-center justify-between">
            <TextInput
              style={styles.input}
              onChangeText={() => navigation.navigate('FoodScreen')}
              // value={number}
              placeholder="Search for dishes, resturants & groceries"
              // keyboardType="numeric"
              placeholderTextColor={COLORS.LIGHT_GREY}
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
            {restData.map((d, i) => <RestaurantComponent title={d.title} key={i} imgSrc={d.imgSrc} />)}
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
    color: COLORS.BLACK
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

})