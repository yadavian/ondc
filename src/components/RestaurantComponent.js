import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../redux/slices/loginSlice';
import { setCart } from '../redux/slices/cartSlice';

const { width, height } = Dimensions.get('window')

const RestaurantComponent = (props) => {
  const { imgSrc, title } = props
  const navigation = useNavigation();

  const dispatch = useDispatch()

  return (

    <TouchableOpacity onPress={() => {
      dispatch(setIsLoggedIn(true))
      dispatch(setCart({ id: 111 }))
      navigation.navigate("FoodScreen")
    }} style={styles.restaurantItem}>
      <Image
        source={imgSrc}
        resizeMethod='auto'
        style={styles.restaurantImage}
      />
      <View style={styles.restaurantDesc}>
        <View className='flex-row justify-between'>
          <Text style={styles.restaurantTitle}>{title}</Text>
          <View className="flex-row items-center justify-between" style={styles.restaurantRating}>
            <Text style={styles.restaurantRatingText}>3.4</Text>
            <AntDesign name="star" size={10} color={COLORS.WHITE} />
          </View>
        </View>
        <Text>Pizza - Italian - 3000 for one</Text>
        {/* <Text>50 - 70 min - 3km - Free Delivery</Text> */}
        {/* <Text>30 - 40 min | Free Caramal Custard</Text> */}
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantComponent

const styles = StyleSheet.create({

  restaurantItem: {
    backgroundColor: COLORS.WHITE,
    // height: height / 3,
    marginVertical: 10,
    elevation: 5,
    borderColor: COLORS.LIGHT_GREY2,
    borderWidth: 0.5,
    borderRadius: 30,
  },
  restaurantImage: {
    height: 220,
    maxWidth: "100%",
    // maxHeight: "50%",
    // maxHeight: 200,
    // minHeight: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  restaurantTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.BLACK,
    fontSize: 24
  },
  restaurantRating: {
    backgroundColor: COLORS.GREEN,
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 20
  },
  restaurantRatingText: {
    color: COLORS.WHITE,
    fontSize: 12
  },
  restaurantDesc: {
    paddingHorizontal: 15,
    paddingVertical: 10
  }
})