import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { COLORS } from '../constants/Colors';
import IMG_Zomato from '../assets/images/splash/zomato.jpg'
import IMG_OndcRed from '../assets/images/splash/ondc_red.jpg'
import IMG_Ondc from '../assets/images/splash/ondc.jpg'
import IMG_google from '../assets/images/icons/google.jpg'


const LoginScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <>
            <StatusBar backgroundColor={COLORS.WHITE}  barStyle="dark-content" />
            <View className={`flex-1 bg-[${COLORS.WHITE}] `}>
                <View style={{ flex: 0.5, backgroundColor: "white" }} className="flex-col items-center pt-16">
                    <Image
                        source={IMG_Ondc}
                        resizeMethod='auto'
                        style={styles.imgBanner}
                    />
                </View>
                <View style={styles.container} className="flex-col items-center px-12">
                    <View style={styles.hrLine} />
                    <Text>Login in or Sign up</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={setNumber}
                        // value={number}
                        placeholder="Phone number"
                        keyboardType="numeric"
                        placeholderTextColor={COLORS.LIGHT_GREY}
                        maxLength={10}
                    />
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => navigation.navigate('OTPVerification')}>
                        {/* <Icon name="rocket" size={30} color="#900" /> */}
                        <Text className="text-white text-2xl" style={{ fontFamily: 'Poppins-ExtraBold' }}>Continue</Text>
                    </TouchableOpacity>
                    <View style={styles.hrLine} />

                    <Image
                        source={IMG_google}
                        resizeMethod='auto'
                        style={styles.googleIcon}
                    />

                </View>
            </View>
            {/* <View style={styles.container} className="flex-col justify-center items-center">
                <Text className="text-white font-bold text-9xl" >ONDC</Text>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="rocket" size={30} color="#900" />
                    <Text className="text-blue-400" style={{ fontFamily: 'Poppins-ExtraBold' }}>Skip</Text>
                </TouchableOpacity>
            </View> */}
        </>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: COLORS.WHITE
    },
    imgBanner: {
        width: "100%",
        height: "100%",
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
    hrLine: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LIGHT_GREY,
        width: "100%",
        marginVertical: 25,
    },
    googleIcon : {
        height : 50,
        width : 50,
        borderRadius : 50,
        borderColor : COLORS.LIGHT_GREY,
        borderWidth : 1,
        padding : 15
    }
})