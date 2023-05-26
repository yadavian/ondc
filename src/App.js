import React from 'react'
import MainNavigator from './navigations/MainNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}
export default App 