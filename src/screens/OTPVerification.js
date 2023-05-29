import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants/Colors'
import { ROUTES } from '../constants/Routes';

const OTPVerification = ({ navigation }) => {

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     })
    // }, [])

    setTimeout(() => {
        navigation.navigate(ROUTES.HomeScreen)
    }, 1000);

    return (

        <>
            <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
            <View className='flex-1 items-center justify-start py-10' style={styles.container}>
                <Text className="py-1 " style={{ color: "black" }}>We have sent a verification code to</Text>
                <Text className="py-1 font-bold text-2xl" style={{ color: "black" }} >+91-9594371397</Text>
                <TextInput
                    style={styles.input}
                    // onChangeText={setNumber}
                    // value={number}
                    placeholder="Enter OTP"
                    keyboardType="numeric"
                    placeholderTextColor={COLORS.LIGHT_GREY}
                    maxLength={10}
                />
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => navigation.navigate(ROUTES.HomeScreen)}>
                    {/* <Icon name="rocket" size={30} color="#900" /> */}
                    <Text className="text-white" style={styles.buttonText}>Resend SMS in 15</Text>
                </TouchableOpacity>
                <Text className="py-10" style={{ fontFamily: 'Poppins-Bold', color: COLORS.RED }}>Try other login methods</Text>
            </View >
        </>
    )
}

export default OTPVerification

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        backgroundColor: COLORS.WHITE
    },
    input: {
        height: 60,
        marginVertical: 25,
        borderWidth: 1,
        width: "100%",
        padding: 10,
        color: COLORS.LIGHT_GREY,
        fontSize: 18,
        borderRadius: 5,
        borderColor: COLORS.LIGHT_GREY,
    },

    continueButton: {
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: COLORS.RED,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'Poppins-Bold'
    }
})