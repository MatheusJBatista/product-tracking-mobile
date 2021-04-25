import { Button } from 'react-native-elements'
import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as ClickSelectors from '../selectors/click/click-selector'
import * as ClickActions from '../redux/click/click-action'

export default function Home() {
  const dispatch = useDispatch()
  const clickCount = useSelector(ClickSelectors.clickQuantity)

  const handlerIncrementClickQuantity = () => dispatch(ClickActions.incrementClick())

  return (
    <>
      <Text style={styles.text}>{clickCount}</Text>
      <Button title="incrementar" onPress={handlerIncrementClickQuantity} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 50,
  },
})
