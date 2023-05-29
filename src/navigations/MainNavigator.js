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
import SorryScreen from '../screens/SorryScreen';
import { ROUTES } from '../constants/Routes';


const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.SplashScreen}>
                <Stack.Screen name={ROUTES.SplashScreen} component={SplashScreen} />
                <Stack.Screen name={ROUTES.LoginScreen} component={LoginScreen} />
                <Stack.Screen name={ROUTES.OTPVerification} component={OTPVerification} />
                <Stack.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
                <Stack.Screen name={ROUTES.FoodScreen} component={FoodScreen} />
                <Stack.Screen name={ROUTES.CartScreen} component={CartScreen} />
                <Stack.Screen name={ROUTES.AddressScreen} component={AddressScreen} />
                <Stack.Screen name={ROUTES.PaymentScreen} component={PaymentScreen} />
                <Stack.Screen name={ROUTES.SorryScreen} component={SorryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainNavigator


const styles = StyleSheet.create({})