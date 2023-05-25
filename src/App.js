import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigator from './navigations/MainNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
}


export default App


const styles = StyleSheet.create({})