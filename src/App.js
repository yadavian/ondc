import React from 'react'
import MainNavigator from './navigations/MainNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
export default App 