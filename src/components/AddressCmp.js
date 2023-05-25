import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const AddressCmp = ({ address, selectedAddress, setSelectedAddress }) => {
    return (

        <TouchableOpacity
            onPress={() => setSelectedAddress(address.id)}
            className="flex-row mx-2 my-3 items-center"
            style={[styles.cartComp, { backgroundColor: `${selectedAddress == address.id ? COLORS.LIGHT_GREY : COLORS.WHITE}` }]}>
            <View>
                <MaterialCommunityIcons name={address.icon} size={50} color={COLORS.RED} style={{ marginTop: -3 }} />
            </View>
            <View className="flex-row justify-between items-center pl-5 " style={{ flex: 1 }}>
                <View>
                    <Text style={styles.remainingRestaurantText}>{address.title}</Text>
                    <Text style={{ color: COLORS.BLACK }}>{address.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default AddressCmp

const styles = StyleSheet.create({

    remainingRestaurantText: {
        fontSize: 22,
        color: COLORS.BLACK,
        fontFamily: "Poppins-Bold",
    },
    cartComp: {

        borderRadius: 10,
        padding: 20,
    },
})