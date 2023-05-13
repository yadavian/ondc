import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const SortComponent = (props) => {
    const { title } = props
    return (
        <View className="flex-row items-center justify-between" style={styles.sortItem}>
            <Ionicons name="filter-outline" size={10} color={COLORS.BLACK} />
            <Text className='px-2' style={styles.sortText}>{title}</Text>
            <AntDesign name="caretdown" size={10} color={COLORS.BLACK} />
        </View>
    )
}

export default SortComponent

const styles = StyleSheet.create({
    sortItem: {
        borderColor: COLORS.LIGHT_GREY2,
        borderWidth: 0.1,
        borderRadius: 10,
        backgroundColor: COLORS.WHITE,
        paddingVertical: 7,
        paddingHorizontal: 5,
        elevation: 5,
        marginHorizontal: 5,
    },
    sortText: {
        fontSize: 12,
        color: COLORS.BLACK,
        fontFamily: "Poppins-SemiBold"
    }
})