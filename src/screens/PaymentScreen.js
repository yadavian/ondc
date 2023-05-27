import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { TEXTS } from '../constants/TEXTS'
import { globalStyle } from '../Styles'
import CartComponent from '../components/CartComponent'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { IMAGES } from '../constants/Images'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const PaymentScreen = ({ navigation }) => {

    let paymentData = [
        {
            id: 1,
            title: "MRP Total",
            price: "₹250.00"
        },
        {
            id: 2,
            title: "Product Discount",
            price: "- ₹50..00"
        },
        {
            id: 3,
            title: "Delivery Fee",
            price: "₹40.00"
        },
        {
            id: 4,
            title: "total",
            price: "₹150.00"
        },
    ]

    return (
        <View style={globalStyle.container}>

            <ScrollView>
                <View style={{ padding: 25 }}>
                    <Text style={globalStyle.mainTitle}>{TEXTS.delAddr}</Text>
                </View>

                <View style={globalStyle.shadowBox}>
                    <Text style={globalStyle.mainTitle}>Ankit Yadav</Text>
                    <Text style={[globalStyle.desc, { marginTop: 5 }]}>Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi</Text>
                </View>

                <View style={[globalStyle.horizonalLine, { borderColor: COLORS.WHITE }]} />

                <View style={[globalStyle.shadowBox, { paddingHorizontal: 0 }]}>
                    <View className="flex-row justify-between items-center px-5">
                        <Text style={globalStyle.mainTitle}>Food Items (5)</Text>
                        <Text style={globalStyle.mainTitle}>₹ 500</Text>
                    </View>

                    {/* <View> */}
                    {[1].map((d, i) => {
                        return (
                            <View key={i}>
                                <View className="flex-row px-5" style={styles.cartComp}>
                                    <View>
                                        <Image
                                            source={{
                                                uri: IMAGES.FOODS[0].PANEER_BIRYANI,
                                            }}
                                            resizeMethod='auto'
                                            style={styles.restaurantImage}
                                        />
                                    </View>
                                    <View className="flex-row justify-start items-center pl-5 " style={{ flex: 1 }}>
                                        <View>
                                            <Text style={styles.remainingRestaurantText}>Paneer</Text>
                                            <Text style={{ color: COLORS.BLACK }}>12.00</Text>
                                            <Text>Foods, DELIVERY</Text>
                                            <Text>MULUND  • 2km</Text>
                                        </View>
                                    </View>
                                    {/* </View> */}
                                </View>
                                {i != 0 && <View style={[globalStyle.horizonalLine, { borderColor: COLORS.LIGHT_GREY2 }]} />}
                            </View>
                        )
                    })}


                </View>

                <View style={[globalStyle.shadowBox, { paddingHorizontal: 0, marginVertical: 25 }]}>
                    <View >
                        <Text className="px-5 mb-5" style={globalStyle.mainTitle}>Payment Details</Text>

                        {paymentData.map((d, i) => {
                            return (
                                <View key={i}>
                                    <View className="flex-row justify-between items-center px-5"  >
                                        <Text style={globalStyle.desc}>{d.title}</Text>
                                        <Text style={[globalStyle.desc,
                                        {
                                            color: `${i == 1 ? COLORS.LIGHT_GREEN : COLORS.BLACK}`,
                                            fontWeight: `${i == 3 || i == 1 ? 800 : 500}`
                                        }]}>{d.price}</Text>
                                    </View>
                                    {i != paymentData.length - 1 && <View style={[globalStyle.horizonalLine, { borderColor: COLORS.LIGHT_GREY2, backgroundColor: COLORS.LIGHT_GREY2, borderWidth: 0.1, marginVertical: 8 }]} />}
                                </View>
                            )
                        })}

                        <View className="flex-row justify-end items-center px-5" >
                            <Text style={[globalStyle.mainTitle, { color: COLORS.LIGHT_GREEN, fontSize: 16, marginTop: 5 }]}>You Saved ₹66.00</Text>
                        </View>
                    </View>



                </View>

            </ScrollView>

            <View>
                <TouchableOpacity style={styles.foodCancel} className="flex-row items-center justify-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SorryScreen")}
                        className='flex-row items-center justify-center'
                        style={{ backgroundColor: COLORS.RED, width: "100%", paddingVertical: 20 }}>
                        <Text className="text-white text-2xl font-bold uppercase">Proceed To Pay</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.grez
    },
    cartComp: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        marginVertical: 10
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

    foodCancel: {
        marginTop: 20,
        borderRadius: 20
    },
})