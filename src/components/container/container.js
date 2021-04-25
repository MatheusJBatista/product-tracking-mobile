import React from 'react'
import { View, StyleSheet } from 'react-native'
import { footerSize } from '../footer/footer-style'

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: footerSize + 30,
  },
})

export default Container
