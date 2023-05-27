import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { IMAGES } from '../constants/Images';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
const CartComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <View className="flex-row mx-2 my-3" style={styles.cartComp}>
            <View>
                <Image
                    source={{
                        uri: IMAGES.FOODS[0].PANEER_BIRYANI,
                    }}
                    resizeMethod='auto'
                    style={styles.restaurantImage}
                />
            </View>
            <View className="flex-row justify-between items-center pl-5 " style={{ flex: 1 }}>
                <View>
                    <Text style={styles.remainingRestaurantText}>Paneer</Text>
                    <Text style={{ color: COLORS.BLACK }}>12.00</Text>
                    <Text>Foods, DELIVERY</Text>
                    <Text>MULUND  • 2km</Text>
                </View>
                <View>
                    <View className="flex-row items-center justify-between">
                        <AntDesign name="minussquare" size={25} color={COLORS.RED} style={{ marginTop: -3 }} onPress={() => { if (count > 0) { setCount(count - 1) } }} />
                        <Text style={{ fontSize: 22, color: COLORS.BLACK, fontWeight: 700, paddingHorizontal: 15, marginTop: -3 }}>{count}</Text>
                        <AntDesign name="plussquare" size={25} color={COLORS.RED} style={{ marginTop: -3 }} onPress={() => setCount(count + 1)} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartComponent

const styles = StyleSheet.create({

    cartComp: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        padding: 20
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
})