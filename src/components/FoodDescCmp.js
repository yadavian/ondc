import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native'; 
import { useDispatch } from 'react-redux';
import { setAddCartItem, setCartReset } from '../redux/slices/cartSlice';
import { ROUTES } from '../constants/Routes';
import { FONT_SIZE } from '../constants/Font';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const FoodDescCmp = ({ foodItem, isVisible, setIsVisible, count, setCount }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handle_goToCheckout = () => {
        setCount(count + 1)
        dispatch(setAddCartItem(foodItem))
        navigation.navigate(ROUTES.CartScreen)
    }

    return (
        <View style={styles.container}>
            <View
                className="flex-row justify-center items-center bg-white pt-1">
                <View
                    style={{
                        borderWidth: 3,
                        borderColor: COLORS.LIGHT_GREY2,
                        width: "20%",
                        borderRadius: 50
                    }}>
                </View>
            </View>

            <View className="flex-row items-center justify-between" style={styles.topDesc}>
                <View className='flex-row items-center justify-between' style={{ flex: 0.5 }}>
                    <Image
                        source={{ uri: foodItem.imgSrc }}
                        resizeMethod='auto'
                        style={styles.restaurantImageLogo}
                    />
                    <Text style={styles.foodTitle}>{foodItem.title}</Text>
                </View>

                {/* <View className="flex-row items-center justify-between">
                    <AntDesign name="minussquare" size={25} color={COLORS.RED} style={{ marginTop: -3 }} onPress={() => { if (count > 0) { setCount(count - 1) } }} />
                    <Text style={{ fontSize: 22, color: COLORS.BLACK, fontWeight: 700, paddingHorizontal: 15, marginTop: -3 }}>{count}</Text>
                    <AntDesign name="plussquare" size={25} color={COLORS.RED} style={{ marginTop: -3 }} onPress={() => setCount(count + 1)} />
                </View> */}

                {/* <IncDcrCom count={count} setCount={setCount} foodId={foodItem.id} /> */}
            </View>

            <ScrollView>

                <View style={styles.foodDesc}>
                    <Image
                        source={{ uri: foodItem.imgSrc }}
                        resizeMethod='auto'
                        style={styles.restaurantImage}
                    />
                </View>

                <View style={styles.foodDescription}>
                    <Text style={styles.remainingRestaurantText}>{foodItem.title}</Text>
                    <Text style={{color : COLORS.DESC_COLOR}} className="pl-1">{foodItem.orderTime}</Text>
                    <Text style={{color : COLORS.DESC_COLOR}}>{foodItem.tags}</Text>
                    <Text style={{color : COLORS.DESC_COLOR}}>{foodItem.restLocaion}  • {foodItem.distance}</Text>
                    <View style={styles.freeDelivery} className="items-center">
                        <AntDesign name="checkcircle" size={10} color={COLORS.WHITE} />
                        <Text style={styles.freeDeliveryText}>FREE DELIVERY</Text>
                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity style={styles.foodCancel} className="flex-row items-center justify-center">
                <TouchableOpacity
                    onPress={() => {
                        dispatch(setCartReset([]))
                        setIsVisible(false)
                        setCount(0)
                    }}
                    className='flex-row items-center justify-center'
                    style={{ backgroundColor: COLORS.RED, width: "50%", paddingVertical: 20 }}>
                    <Text className="text-white text-1xl font-bold uppercase">Clear </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handle_goToCheckout}
                    className='flex-row items-center justify-center'
                    style={{ backgroundColor: COLORS.LIGHT_GREEN, width: "50%", paddingVertical: 20 }}>
                    <Text className="text-white text-1xl font-bold uppercase">Proceed to Cart</Text>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
    )
}

export default FoodDescCmp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LIGHT_GREY4
    },
    topDesc: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    restaurantImageLogo: {
        height: WIDTH - 300,
        width: WIDTH - 300,
        borderRadius: 30,
    },
    restaurantImage: {
        height: WIDTH - 200,
        width: WIDTH - 50,
        borderRadius: 30,
    },
    foodTitle: {
        // fontWeight: 700,
        fontFamily : "Poppins-Medium",
        color: COLORS.TITLE_COLOR,
        marginLeft: 25,
        fontSize : FONT_SIZE.h1
    },
    foodDesc: {
        backgroundColor: COLORS.WHITE,
        marginTop: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodDescription: {
        backgroundColor: COLORS.WHITE,
        marginTop: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    foodCancel: {
        // backgroundColor: COLORS.RED,
        marginTop: 20,
        borderRadius: 20
    },

    remainingRestaurantText: {
        fontSize : FONT_SIZE.h1,
        color: COLORS.TITLE_COLOR,
        fontFamily: "Poppins-Medium",
    },
    freeDelivery: {
        backgroundColor: COLORS.LIGHT_GREEN,
        borderRadius: 25,
        paddingVertical: 3,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    freeDeliveryText: {
        fontFamily: "Poppins-Medium",
        color: COLORS.WHITE,
        paddingHorizontal: 5
    },
})