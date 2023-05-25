import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const CategoryComponent = (props) => {
    const navigation = useNavigation()
    const { imgSrc, title } = props;
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("FoodScreen")}
            style={styles.categoriesItem}>
            <Image
                source={imgSrc}
                resizeMethod='scale'
                style={styles.image}
            />
            <Text className="font-black text-center py-2">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryComponent

const styles = StyleSheet.create({
    image: {
        height: 75,
        width: 75,
        borderRadius: 80,
        borderColor: COLORS.LIGHT_GREY,
        borderWidth: 1,
        padding: 15
    },
    categoriesItem: {
        marginTop: 20,
        marginHorizontal: 12
    }
})