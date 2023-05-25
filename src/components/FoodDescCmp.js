import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const FoodDescCmp = ({ foodItem, isVisible, setIsVisible }) => {
    const navigation = useNavigation()
    const handle_goToCheckout = () => {
        navigation.navigate("CartScreen")
    }

    const [count, setCount] = useState(0)

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
                        source={foodItem.imgSrc}
                        resizeMethod='auto'
                        style={styles.restaurantImageLogo}
                    />
                    <Text style={styles.foodTitle}>{foodItem.title}</Text>
                </View>

                <View className="flex-row items-center justify-between">
                    <AntDesign name="minussquare" size={25} color={COLORS.RED} style={{ marginTop: -3 }} onPress={() => { if (count > 0) { setCount(count - 1) } }} />
                    <Text style={{ fontSize: 22, color: COLORS.BLACK, fontWeight: 700, paddingHorizontal: 15, marginTop: -3 }}>{count}</Text>
                    <AntDesign name="plussquare" size={25} color={COLORS.RED} style={{ marginTop: -3 }} onPress={() => setCount(count + 1)} />
                </View>
            </View>

            <ScrollView>

                <View style={styles.foodDesc}>
                    <Image
                        source={foodItem.imgSrc}
                        resizeMethod='auto'
                        style={styles.restaurantImage}
                    />
                </View>

                <View style={styles.foodDescription}>
                    <Text style={styles.remainingRestaurantText}>{foodItem.title}</Text>
                    <Text className="pl-1" style={{ color: COLORS.BLACK }}>{foodItem.orderTime}</Text>
                    <Text>{foodItem.tags}</Text>
                    <Text>{foodItem.restLocaion}  •{foodItem.distance}</Text>
                    <View style={styles.freeDelivery} className="items-center">
                        <AntDesign name="checkcircle" size={10} color={COLORS.WHITE} />
                        <Text style={styles.freeDeliveryText}>FREE DELIVERY</Text>
                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity style={styles.foodCancel} className="flex-row items-center justify-center">
                <TouchableOpacity
                    onPress={() => setIsVisible(false)}
                    className='flex-row items-center justify-center'
                    style={{ backgroundColor: COLORS.RED, width: "50%", paddingVertical: 20 }}>
                    <Text className="text-white text-2xl font-bold uppercase">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handle_goToCheckout}
                    className='flex-row items-center justify-center'
                    style={{ backgroundColor: COLORS.LIGHT_GREEN, width: "50%", paddingVertical: 20 }}>
                    <Text className="text-white text-2xl font-bold uppercase">Add To Cart</Text>
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
        height: WIDTH - 353,
        width: WIDTH - 353,
        borderRadius: 30,
    },
    restaurantImage: {
        height: WIDTH - 200,
        width: WIDTH - 50,
        borderRadius: 30,
    },
    foodTitle: {
        fontWeight: 700,
        color: COLORS.BLACK,
        marginLeft: 25
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
        fontSize: 22,
        color: COLORS.BLACK,
        fontFamily: "Poppins-Bold",
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
})