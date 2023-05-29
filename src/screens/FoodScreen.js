import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import SortComponent from '../components/SortComponent'
import { COLORS } from '../constants/Colors';
import FoodComponent from '../components/FoodComponent';
import { useSelector } from 'react-redux';


const FoodScreen = () => {
    const { foods } = useSelector(state => state.home)

    return (
        <View className='py-5'>
            <View className="flex-row items-center pl-5" >
                <SortComponent title="Sort" />
                <SortComponent title="Nearest" />
                <SortComponent title="Great Offers" />
                <SortComponent title="Rating 4.0+" />
                <SortComponent title="Pure Veg" />
                <SortComponent title="More" />
            </View>

            <View className="">
                <Text className="pt-4  px-5" style={styles.remainingRestaurantText}>153 restaurants to explore</Text>
                <View style={styles.foodContainer}>
                    {/* FOOD COMPONENT */}

                    <FlatList
                        data={foods}
                        renderItem={({ item }) => <FoodComponent foodItem={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 15 }}
                    />

                </View>
            </View>
        </View>
    )
}

export default FoodScreen

const styles = StyleSheet.create({
    remainingRestaurantText: {
        color: COLORS.DESC_COLOR
    }
})