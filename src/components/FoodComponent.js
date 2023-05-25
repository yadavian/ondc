import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import BottomSheetCmp from './BottomSheetCmp';
import FoodDescCmp from './FoodDescCmp';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
const FoodComponent = ({ foodItem }) => {

  const [isVisible, setIsVisible] = useState(false);
  const handle_OpenFoodDesc = () => {
    setIsVisible(true)
  }

  const handle_onBackdropPress = () => {
    setIsVisible(false)
  }


  return (
    <>
      <TouchableOpacity onPress={()=>setIsVisible(true)} style={styles.foodItem}>

        <View className="py-5 pl-5 flex-col justify-between flex-1">
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
              <AntDesign name="checkcircle" size={10} color={COLORS.WHITE} />
              <Text style={styles.freeDeliveryText}>FREE DELIVERY</Text>
            </View>
          </View>
        </View>

        <View className="flex-col justify-center">
          <Image
            source={foodItem.imgSrc}
            resizeMethod='auto'
            style={styles.restaurantImage}
          />
          <TouchableOpacity onPress={handle_OpenFoodDesc} className='flex-row items-center justify-center' style={styles.AddToCart}>
            <Text>ADD</Text>
            <AntDesign name="plussquare" size={15} color={COLORS.RED} style={{ marginTop: -3, marginLeft: 5 }} />
          </TouchableOpacity>
        </View>

      </TouchableOpacity>
      <BottomSheetCmp isVisible={isVisible} setIsVisible={setIsVisible} onBackdropPress={handle_onBackdropPress}>
        <FoodDescCmp foodItem={foodItem} isVisible={isVisible} setIsVisible={setIsVisible} />
      </BottomSheetCmp>
    </>
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
    elevation: 5,
    paddingHorizontal: 10
  },
  remainingRestaurantText: {
    fontSize: 22,
    color: COLORS.BLACK,
    fontFamily: "Poppins-Bold",
  },
  restaurantImage: {
    height: WIDTH - 273,
    width: WIDTH - 273,
    borderRadius: 30,

    // borderTopRightRadius: 30,
    // borderBottomRightRadius: 30
  },
  freeDelivery: {
    backgroundColor: COLORS.LIGHT_GREEN,
    borderRadius: 25,
    paddingVertical: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginTop: 3
  },
  freeDeliveryText: {
    fontFamily: "Poppins-Bold",
    color: COLORS.WHITE,
    paddingHorizontal: 5
  },
  AddToCart: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.RED,
    paddingVertical: 5,
    marginHorizontal: 25,
    marginTop: -20,
    elevation: 10



  }
})