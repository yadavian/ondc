import { StatusBar, StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants/Colors'
import CategoryComponent from '../components/CategoryComponent';
import SortComponent from '../components/SortComponent';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import IMG_CAKE from '../assets/images/categories/cake.png'
import IMG_PIZZA from '../assets/images/categories/pizza.png'
import IMG_DOSA from '../assets/images/categories/dosa.png'
import IMG_CHOLE from '../assets/images/categories/chole.png'
import IMG_SANDWITCH from '../assets/images/categories/sandwitch.png'

import IMG_WHITEDOSA from '../assets/images/restaurant/white-dosa.png'
import IMG_PIZZAHOT from '../assets/images/restaurant/pizza-hut.png'
import IMG_DOSA1 from '../assets/images/restaurant/dosa.png'
import IMG_DOMINOSPIZZA from "../assets/images/restaurant/domino's-pizza.png"
import IMG_CURRY from '../assets/images/restaurant/curry.png'
import RestaurantComponent from '../components/RestaurantComponent';

const { width, height } = Dimensions.get('window')


const HomeScreen = ({ navigation }) => {
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
    { id: 5, title: "Chole", imgSrc: IMG_CAKE },
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
            <View>
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
              // onChangeText={setNumber}
              // value={number}
              placeholder="Search for dishes, resturants & groceries"
              keyboardType="numeric"
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
          <Text className='text-center mb-6' style={{color : COLORS.BLACK, fontFamily:"Poppins-Medium"}}>ALL RESTURANT</Text>

          {/* SORTING SECTION */}
          <View className="px-3">
            <FlatList horizontal
              data={soringData}
              renderItem={({ item }) => <SortComponent title={item.title} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{paddingBottom : 15}}
            />
          </View>

          {/* FOODS CONTAINER */}
          <View style={styles.restaurantContainer}>
            <RestaurantComponent title="Pizza Hut" imgSrc={IMG_PIZZAHOT} />
            <RestaurantComponent title="PLS Restaurant" imgSrc={IMG_DOMINOSPIZZA} />
            <RestaurantComponent title="McDonald's" imgSrc={IMG_CURRY} />
            <RestaurantComponent title="Simply South" imgSrc={IMG_DOSA1} />
            <RestaurantComponent title="Domino's Pizza" imgSrc={IMG_DOMINOSPIZZA} />
            <RestaurantComponent title="Curry Mahal" imgSrc={IMG_CURRY} />
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
    color : COLORS.BLACK
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
    borderRadius: 5,
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