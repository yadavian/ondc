import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import OTPVerification from '../screens/OTPVerification';
import FoodScreen from '../screens/FoodScreen';
import CartScreen from '../screens/CartScreen';
import AddressScreen from '../screens/AddressScreen';
import PaymentScreen from '../screens/PaymentScreen';


const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="OTPVerification" component={OTPVerification} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="FoodScreen" component={FoodScreen} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
                <Stack.Screen name="AddressScreen" component={AddressScreen} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainNavigator


const styles = StyleSheet.create({})