import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import rootStore from './src/redux/root-store'

// import { Image } from 'react-native-elements'
import { View, Image } from 'react-native'

import Footer from './src/components/footer/footer'
import Tracking from './src/views/tracking/tracking'
import Settings from './src/views/settings/settings'
import Routes from './src/models/routes'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const initialState = {}
const store = rootStore(initialState)

import Logo from './assets/logo-white.png'

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <Footer {...props} />}>
    <Tab.Screen name={Routes.tracking} options={{ title: 'Rastreio' }} component={Tracking} />
    <Tab.Screen name={Routes.settings} options={{ title: 'Configurações' }} component={Settings} />
  </Tab.Navigator>
)

const HeaderTitle = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={Logo} style={{ width: 250, height: 50 }} />
  </View>
)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen name="stack" component={TabNavigator} options={{ headerTitle: () => <HeaderTitle /> }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
