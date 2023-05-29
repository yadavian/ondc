import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import BottomSheetCmp from './BottomSheetCmp';
import FoodDescCmp from './FoodDescCmp';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodCount } from '../redux/slices/homeSlice';
import { setAddCartItem, setCartReset, setRemoveCartItemById } from '../redux/slices/cartSlice';
import { store } from '../redux/store';
import { FONT_SIZE } from '../constants/Font';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
const FoodComponent = ({ foodItem }) => {

  // console.log('foodItem', foodItem)

  const { foods } = useSelector(state => state.home)
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [count, setCount] = useState(foodItem.count)
  const [isVisible, setIsVisible] = useState(false);


  const handle_OpenFoodDesc = () => {
    setIsVisible(true)
  }

  const handle_onBackdropPress = () => {
    setIsVisible(false)
  }


  useEffect(() => {
    const index = foods.findIndex(food => food.id == foodItem.id)

    // let prevFoods = []

    // prevFoods = JSON.parse(JSON.stringify(foods));

    // if (prevFoods[index].hasOwnProperty("count")) {
    //     prevFoods[index].count = count
    //     console.log('in prevFoods', prevFoods[index])
    // }

    dispatch(setFoodCount({ index, count }))
    // dispatch(setAddCartItem({ index, count }))


  }, [count])


  return (
    <>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.foodItem}>

        <View className="py-5 pl-5 flex-col justify-between flex-1">
          <View className="">
            <Text style={styles.remainingRestaurantText}>{foodItem.title}</Text>
            <View className="flex-row items-center">
              <AntDesign name="star" size={10} color={COLORS.RED} style={{ marginTop: -4 }} />
              <Text className="pl-1" style={{ color: COLORS.DESC_COLOR, fontFamily: "Poppins-Medium" }}>{foodItem.orderTime}</Text>
            </View>
            <Text style={{ color: COLORS.DESC_COLOR }}>{foodItem.tags}</Text>
            <Text style={{ color: COLORS.DESC_COLOR }}>{foodItem.restLocaion} • {foodItem.distance}</Text>
          </View>
          <View className='flex-row items-center justify-start pt-2'>
            <View style={styles.freeDelivery} className="items-center">
              <AntDesign name="checkcircle" size={10} color={COLORS.WHITE} />
              <Text style={styles.freeDeliveryText}>FREE DELIVERY</Text>
            </View>
          </View>
        </View>

        <View className="flex-col justify-center">
          <Image
            // source={foodItem.imgSrc}
            source={{ uri: foodItem.imgSrc }}
            resizeMethod='auto'
            style={styles.restaurantImage}
          />
          <View className='flex-row items-center justify-center' style={styles.AddToCart}>
            {count > 0 ?
              // <IncDcrCom count={count} setCount={setCount} foodId={foodItem.id} />
              <TouchableOpacity className="flex-row items-center justify-center" onPress={() => {
                dispatch(setRemoveCartItemById({ foodId: foodItem.id }))
                setCount(0);
              }}>
                <Text style={{ fontSize: 12, color: COLORS.BLACK, fontWeight: 700, marginRight: 5 }}>Cancel</Text>
                <AntDesign name="minussquare" size={20} color={COLORS.RED} />
              </TouchableOpacity>
              :
              <TouchableOpacity className="flex-row items-center justify-center" onPress={() => {
                setCount(count + 1);
                // dispatch(setCartReset([]))
                dispatch(setAddCartItem(foodItem))
              }}>
                <Text style={{ fontSize: 12, color: COLORS.BLACK, fontWeight: 700, marginRight: 5 }}>ADD</Text>
                <AntDesign name="plussquare" size={20} color={COLORS.RED} />
              </TouchableOpacity>
            }
          </View>

        </View>

      </TouchableOpacity>
      <BottomSheetCmp isVisible={isVisible} setIsVisible={setIsVisible} onBackdropPress={handle_onBackdropPress}>
        <FoodDescCmp foodItem={foodItem} count={count} setCount={setCount} isVisible={isVisible} setIsVisible={setIsVisible} />
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
    fontSize: FONT_SIZE.h1,
    color: COLORS.TITLE_COLOR,
    fontFamily: "Poppins-Medium",
  },
  restaurantImage: {
    height: WIDTH - 250,
    width: WIDTH - 250,
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
    fontFamily: "Poppins-Medium",
    color: COLORS.WHITE,
    paddingHorizontal: 5
  },
  AddToCart: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.RED,
    marginTop: -30,
    elevation: 10,
    paddingVertical: 5,
    marginHorizontal: 10



  }
})