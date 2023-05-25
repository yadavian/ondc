import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { TEXTS } from '../constants/TEXTS'
import CartComponent from '../components/CartComponent'


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const CartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.cartContainer}>
                    {/* Cart Items */}
                    <CartComponent />
                    {/* <CartComponent /> */}
                </View>

            </ScrollView>

            <View>
                <TouchableOpacity style={styles.foodCancel} className="flex-row items-center justify-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddressScreen")}
                        className='flex-row items-center justify-center'
                        style={{ backgroundColor: COLORS.RED, width: "100%", paddingVertical: 20 }}>
                        <Text className="text-white text-2xl font-bold uppercase">{TEXTS.placeOrder}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LIGHT_GREY4
    },
    cartContainer: {
    },
    foodCancel: {
        marginTop: 20,
        borderRadius: 20
    },
    restaurantImage: {
        height: WIDTH - 300,
        width: WIDTH - 300,
        borderRadius: 30,
    },
    remainingRestaurantText: {
        fontSize: 22,
        color: COLORS.BLACK,
        fontFamily: "Poppins-Bold",
    },
    cartComp: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        padding: 20
    }
})