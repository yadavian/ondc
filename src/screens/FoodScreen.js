import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import SortComponent from '../components/SortComponent'
import { COLORS } from '../constants/Colors';
import FoodComponent from '../components/FoodComponent';


import IMG_CHICKEN2 from '../assets/images/foods/chicken2.png'
import IMG_FOOD from '../assets/images/foods/food.jpg'
import IMG_FOOD1 from '../assets/images/foods/food1.png'
import IMG_FOOD2 from '../assets/images/foods/food2.jpg'
import IMG_FOOD3 from '../assets/images/foods/food3.png'
import IMG_FOOD5 from '../assets/images/foods/food5.png'


const FoodScreen = () => {

    let foodData = [
        { id: 1, title: "Chainese Wok", orderTime: "22 min", tags: "Chinese, Asian, Tibetan, Desserts", restLocaion: "Mulund East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMG_CHICKEN2 },
        { id: 2, title: "Paneer biryani", orderTime: "40 min", tags: "Chinese, Asian, Tibetan", restLocaion: "Bhandup East", distance: "10 km", isFreeDelivery: true, imgSrc: IMG_FOOD },
        { id: 3, title: "Veg biryani", orderTime: "25 min", tags: "Chinese, Asian, Tibetan", restLocaion: "Nahur East", distance: "3 km", isFreeDelivery: true, imgSrc: IMG_FOOD1 },
        { id: 4, title: "Chicken Tikka Biryani 1 Containe", orderTime: "10 min", tags: "Chinese, Desserts", restLocaion: "Ghatkopar East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMG_FOOD2 },
        { id: 5, title: "Paneer Tikka Biryani 1 Container", orderTime: "32 min", tags: "Chinese, Asian, Desserts", restLocaion: "Kurla East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMG_FOOD3 },
        { id: 6, title: "Chicken Dum Biryani 1 Container", orderTime: "50 min", tags: "Asian, Tibetan, Desserts", restLocaion: "Parel East", distance: "0.9 km", isFreeDelivery: true, imgSrc: IMG_FOOD5 },
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
                        contentContainerStyle={{ paddingBottom: 15 }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15}}
                    />

                </View>
            </View>
        </View>
    )
}

export default FoodScreen

const styles = StyleSheet.create({

})