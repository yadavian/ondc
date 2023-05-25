import { StyleSheet } from 'react-native'
import { COLORS } from './constants/Colors'


const globalStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    mainTitle: {
        fontSize: 22,
        color: COLORS.BLACK,
        fontFamily: "Poppins-Bold",
    },
    desc: {
        fontSize: 16,
        color: COLORS.BLACK,
        fontFamily: "Poppins-Regular",
    },
    shadowBox: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
        elevation: 10
    },
    horizonalLine: {
        borderWidth: 3,
        width: "100%",
        marginVertical: 20,
    }
})


export { globalStyle }