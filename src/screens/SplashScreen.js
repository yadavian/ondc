import { StatusBar, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../constants/Colors';
// import IMG_LOGO from '../assets/images/icons/logo.jpg'
import { TEXTS } from '../constants/TEXTS';
import { ROUTES } from '../constants/Routes';
import { FONT_FAMILY } from '../constants/Font';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        setTimeout(() => {
            navigation.replace(ROUTES.HomeScreen)
        }, 1000);
    }, [])


    return (
        <>
            <StatusBar backgroundColor={COLORS.RED} barStyle="light-content" />
            {/* <View style={styles.container} className="flex-col justify-center items-center">
                <View style={{ flex: 0.5, width: "100%" }} className="flex-col justify-center items-center">
                    <Image
                        source={IMG_LOGO}
                        resizeMethod='resize'
                        style={{ height: WIDTH - 100, width: WIDTH - 100 }}
                    />
                </View>
                <View className="flex-col justify-center items-center">
                    <Text className="text-white" style={styles.logoText} >{TEXTS.foodRest}</Text>
                    <Text className="text-white text-3xl" style={styles.logoDescText} >{TEXTS.letsPay}</Text>
                </View>
            </View> */}

            <View style={styles.container} className="flex-col justify-center items-center">
                <View style={{ flex: 0.5, width: "100%" }} className="flex-col justify-center items-center">
                    <Text style={styles.mainText}>ONDC</Text>
                    <Text style={styles.mainSubText}>Online Network Digital Chain</Text>
                </View>
                <View className="flex-col justify-center items-center">
                    <Text className="text-white" style={styles.logoText} >{TEXTS.letsPay}</Text>
                    <Text className="text-white text-3xl" style={styles.logoDescText} >Using ONDC Network</Text>
                </View>
            </View>

        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    logoText: {
        fontFamily: "Abel-Regular",
        color: COLORS.LIGHT_BLUE,
        fontSize: 28,
        fontWeight: 700
    },
    logoDescText: {
        fontFamily: "Abel-Regular",
        color: COLORS.LIGHT_GREY3,
        fontSize: 18,
        fontWeight: 700,
    },
    imgBanner: {
        width: "100%",
        height: "100%",
    },
    mainText:{
        fontSize : WIDTH/3.5,
        color : COLORS.RED,
        fontFamily : FONT_FAMILY.POPPINNS.EXTRA_BOLD_ITALIC,
    },
    mainSubText:{
        color : COLORS.DESC_COLOR,
        fontFamily : FONT_FAMILY.POPPINNS.BOLD_ITALIC,
        fontSize : WIDTH/19,
        marginTop : -50
    }
})