import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { globalStyle } from '../Styles'
import { ROUTES } from '../constants/Routes'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const SorryScreen = ({ navigation }) => {

    let sorryData = [
        {
            id: 1,
            title: "We are Updating App",
            desc: "We appreciate your patience and understanding as we put in the final touches to make the app the best it can be. Our development team has been working tirelessly to ensure a seamless and enjoyable user experience, and we are confident that the wait will be worth it."
        },
        {
            id: 2,
            title: "Dear Valued Users",
            desc: "We want to express our heartfelt gratitude for your unwavering support and enthusiasm for our upcoming mobile app. We understand that you have been eagerly anticipating its release, and we want to assure you that it's coming soon."
        },

    ]

    return (
        <View style={globalStyle.container}>

            <ScrollView>
                <View style={{ padding: 25 }}>
                    <Text style={[globalStyle.mainTitle, { fontSize: 25, textAlign: 'center' }]}>Coming soon</Text>
                </View>

                {sorryData.map((d, i) => {
                    return <View key={i}>
                        <View style={globalStyle.shadowBox} >
                            <Text style={globalStyle.mainTitle}>{d.title}</Text>
                            <Text style={[globalStyle.desc, { marginTop: 5 }]}>{d.desc}</Text>
                        </View>
                        <View style={[globalStyle.horizonalLine, { borderColor: COLORS.WHITE }]} />
                    </View>
                })}






            </ScrollView>

            <View>
                <TouchableOpacity style={styles.foodCancel} className="flex-row items-center justify-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.HomeScreen)}
                        className='flex-row items-center justify-center'
                        style={{ backgroundColor: COLORS.RED, width: "100%", paddingVertical: 20 }}>
                        <Text className="text-white  font-bold uppercase">Home</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SorryScreen

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