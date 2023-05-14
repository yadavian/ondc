import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../constants/Colors';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        setTimeout(() => {
            navigation.navigate('LoginScreen')
        }, 1000);
    }, [])


    return (
        <>
            <StatusBar backgroundColor={COLORS.RED} barStyle="light-content"/>
            <View style={styles.container} className="flex-col justify-center items-center">
                <Text className="text-white font-extrabold italic text-9xl" style={{fontFamily : "Poppins"}} >ONDC</Text>
            </View>
        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.RED
    }
})