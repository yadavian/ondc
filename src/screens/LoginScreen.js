import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { COLORS } from '../constants/Colors';
import IMG_Ondc from '../assets/images/icons/logo.jpg'
import IMG_google from '../assets/images/icons/google.jpg'
import { TEXTS } from '../constants/TEXTS';
import { ROUTES } from '../constants/Routes';


const LoginScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 1000);
    }, [])

    return (
        <>
            <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
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
                    <Text>{TEXTS.loginOrSign}</Text>
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
                        onPress={() => navigation.navigate(ROUTES.OTPVerification)}
                    >
                        {/* <Icon name="rocket" size={30} color="#900" /> */}
                        <Text className="text-white text-2xl" style={{ fontFamily: 'Poppins-ExtraBold' }}>{TEXTS.continue}</Text>
                    </TouchableOpacity>

                    <View style={styles.hrLine} />

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.OTPVerification)}>
                        <Image
                            source={IMG_google}
                            resizeMethod='auto'
                            style={styles.googleIcon}
                        />
                    </TouchableOpacity>


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
        width: "80%",
        height: "80%",
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
        marginBottom: 25,
    },
    googleIcon: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderColor: COLORS.LIGHT_GREY,
        borderWidth: 1,
        padding: 15
    }
})