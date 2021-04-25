import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Footer from './src/components/footer/footer'
import rootStore from './src/redux/root-store'
import Home from './src/views/home'

const initialState = {}
const store = rootStore(initialState)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
      <Footer />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
})
