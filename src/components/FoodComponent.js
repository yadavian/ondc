import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import IMG_CHICKEN from '../assets/images/foods/chicken.jpg'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const FoodComponent = ({ foodItem }) => {
  console.log('foodItem', foodItem)
  return (
    <View style={styles.foodItem}>
      <Image
        source={foodItem.imgSrc}
        resizeMethod='auto'
        style={styles.restaurantImage}
      />
      <View className="py-5 px-5 flex-col justify-between">
        <View className="">
          <Text style={styles.remainingRestaurantText}>{foodItem.title}</Text>
          <View className="flex-row items-center">
            <AntDesign name="star" size={10} color={COLORS.RED} style={{ marginTop: -4 }} />
            <Text className="pl-1" style={{ color: COLORS.BLACK, fontFamily: "Poppins-Medium" }}>{foodItem.orderTime}</Text>
          </View>
          <Text>{foodItem.tags}</Text>
          <Text>{foodItem.restLocaion}  •{foodItem.distance}</Text>
        </View>
        <View className='flex-row items-center justify-start'>
          <View style={styles.freeDelivery} className="items-center">
            <AntDesign name="star" size={10} color={COLORS.GREEN} />
            <Text style={styles.freeDeliveryText}>FREE DELIVERY</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FoodComponent

const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: COLORS.LIGHT_GREY1,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: COLORS.WHITE,
    elevation: 5
  },
  remainingRestaurantText: {
    fontSize: 22,
    color: COLORS.BLACK,
    fontFamily: "Poppins-Bold",
  },
  restaurantImage: {
    height: 180,
    width: 150,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30
  },
  freeDelivery: {
    backgroundColor: COLORS.LIGHT_PURPLE,
    borderRadius: 25,
    padding: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start'
  },
  freeDeliveryText: {
    fontFamily: "Poppins-Bold",
    color: COLORS.DARK_PURPLE,
    paddingHorizontal: 5
  }
})