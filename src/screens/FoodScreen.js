import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import SortComponent from '../components/SortComponent'
import { COLORS } from '../constants/Colors';
import FoodComponent from '../components/FoodComponent';
import { IMAGES } from '../constants/Images';


const FoodScreen = () => {

    let foodData = [
        { id: 1, title: "Chainese Wok", orderTime: "22 min", tags: "American, Indian", restLocaion: "Mulund East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMAGES.FOODS[0].CHAINESE_WOK },
        { id: 2, title: "Paneer biryani", orderTime: "40 min", tags: "Italian, Tibetan", restLocaion: "Bhandup East", distance: "10 km", isFreeDelivery: true, imgSrc: IMAGES.FOODS[0].PANEER_BIRYANI },
        { id: 3, title: "Veg biryani", orderTime: "25 min", tags: " Asian, Tibetan", restLocaion: "Nahur East", distance: "3 km", isFreeDelivery: true, imgSrc: IMAGES.FOODS[0].VEG_BIRYANI },
        { id: 4, title: "Chicken Tikka", orderTime: "10 min", tags: "Jerman, Desserts", restLocaion: "Ghatkopar East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMAGES.FOODS[0].CHICKEN_TIKKA },
        { id: 5, title: "Paneer Tikka", orderTime: "32 min", tags: "Indian, Asian", restLocaion: "Kurla East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMAGES.FOODS[0].PANEER_TIKKA },
        { id: 6, title: "Chicken Dum", orderTime: "50 min", tags: "Asian, Indian", restLocaion: "Parel East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMAGES.FOODS[0].CHICKEN_DUM },
    ]
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
                <Text className="py-5 px-5" style={styles.remainingRestaurantText}>153 restaurants to explore</Text>
                <View style={styles.foodContainer}>
                    {/* FOOD COMPONENT */}

                    <FlatList
                        data={foodData}
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
        color: COLORS.BLACK
    }
})