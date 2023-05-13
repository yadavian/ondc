import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import IMG_CHICKEN from '../assets/images/foods/chicken.png'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const FoodComponent = () => {
  return (
  <View style={styles.foodItem}>
    <Image
        source={IMG_CHICKEN}
        resizeMethod='auto'
        style={styles.restaurantImage}
    />
    <View className="py-5 px-5 flex-col justify-between">
        <View className="">
            <Text style={styles.remainingRestaurantText}>Chinese Wok</Text>
            <View className="flex-row">
                <View>
                    <AntDesign name="star" size={10} color={COLORS.WHITE} />
                </View>
                <Text>22 min</Text>
            </View>
            <Text>Chinese, Asian, tibetan, Desserts</Text>
            <Text>MULUND EAST - 0.9 km</Text>
        </View>
        <View className='flex-row items-center justify-start'>
            <View  style={styles.freeDelivery} className="items-center">
                <AntDesign name="star" size={10} color={COLORS.WHITE} />
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
      marginVertical : 10,
      borderColor : COLORS.LIGHT_GREY1,
      borderWidth : 1,
      borderRadius : 30,
      backgroundColor : COLORS.WHITE,
      elevation : 5
  },
  remainingRestaurantText: {
      fontSize: 22,
      color: COLORS.BLACK,
      fontFamily: "Poppins-Bold"
  },
  restaurantImage: {
      height: 180,
      width: 150,
      borderTopLeftRadius : 30,
      borderBottomLeftRadius : 30
  },
  freeDelivery: {
      backgroundColor: COLORS.LIGHT_PURPLE,
      borderRadius: 25,
      padding : 5,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'flex-start'
  },
  freeDeliveryText:{
      fontFamily : "Poppins-Bold",
      color : COLORS.DARK_PURPLE,
      paddingHorizontal : 5
  }
})