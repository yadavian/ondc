import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import OTPVerification from '../screens/OTPVerification';
import FoodScreen from '../screens/FoodScreen';


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
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainNavigator


const styles = StyleSheet.create({})