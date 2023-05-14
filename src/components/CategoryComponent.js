import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'

const CategoryComponent = (props) => {
    const { imgSrc, title } = props;
    return (
        <View style={styles.categoriesItem}>
            <Image
                source={imgSrc}
                resizeMethod='scale'
                style={styles.image}
            />
            <Text className="font-black text-center py-2">{title}</Text>
        </View>
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
    categoriesItem:{
        marginTop : 20,
        marginHorizontal : 12
    }
})