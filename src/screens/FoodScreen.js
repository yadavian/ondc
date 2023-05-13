import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SortComponent from '../components/SortComponent'
import { COLORS } from '../constants/Colors';
import FoodComponent from '../components/FoodComponent';


const FoodScreen = () => {
    return (
        <View className='py-5'>
            <View className="flex-row items-center  pl-5" >
                <SortComponent title="Sort" />
                <SortComponent title="Nearest" />
                <SortComponent title="Great Offers" />
                <SortComponent title="Rating 4.0+" />
                <SortComponent title="Pure Veg" />
                <SortComponent title="More" />
            </View>

            <View className="px-5">
                <Text className="my-5" style={styles.remainingRestaurantText}>153 restaurants to explore</Text>
                <View style={styles.foodContainer}>
                    {/* FOOD COMPONENT */}
                    <FoodComponent />
                    <FoodComponent />
                    <FoodComponent />
                    <FoodComponent />
                </View>
            </View>
        </View>
    )
}

export default FoodScreen

const styles = StyleSheet.create({
   
})