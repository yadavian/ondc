import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../constants/Routes'

const CategoryComponent = (props) => {
    const navigation = useNavigation()
    const { imgSrc, title } = props;
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.FoodScreen)}
            style={styles.categoriesItem}>
            <Image
                source={{ uri: imgSrc }}
                resizeMethod='scale'
                style={styles.image}
            />
            <Text className=" text-center py-2" style={{ color: COLORS.DESC_COLOR }}>{title}</Text>
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