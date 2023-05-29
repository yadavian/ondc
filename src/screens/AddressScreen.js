import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/Colors'
import { TEXTS } from '../constants/TEXTS'
import AddressCmp from '../components/AddressCmp'
import { ROUTES } from '../constants/Routes'


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const AddressScreen = ({ navigation }) => {

    const [selectedAddress, setSelectedAddress] = useState(1)

    let address = [
        {
            id: 1,
            title: 'Home',
            icon: 'home',
            location: `Clover Infotech, B-702 Floor, Reliable Tech Part, Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
        },
        {
            id: 2,
            title: 'Office',
            icon: 'office-building-marker',
            location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
        },
        {
            id: 3,
            title: 'Use current location',
            icon: 'map-marker-circle',
            location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
        },
        {
            id: 4,
            title: 'hotel',
            icon: 'home-city-outline',
            location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
        },
        {
            id: 5,
            title: 'Other',
            icon: 'map-marker-radius-outline',
            location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
        },
        {
            id: 6,
            title: 'Add New',
            icon: 'map-marker-radius-outline',
            location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
        }

    ]

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cartContainer}>
                    {/* Cart Items */}
                    {address.map((d, i) => {
                        return (
                            <AddressCmp address={d} key={i} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} />
                        )
                    })}
                </View>

            </ScrollView>

            <View>
                <TouchableOpacity style={styles.foodCancel} className="flex-row items-center justify-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.PaymentScreen)}
                        className='flex-row items-center justify-center'
                        style={{ backgroundColor: COLORS.RED, width: "100%", paddingVertical: 20 }}>
                        <Text className="text-white font-bold uppercase">{TEXTS.continue} To Pay</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddressScreen

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

})