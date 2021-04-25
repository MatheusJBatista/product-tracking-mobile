import { Divider, Text } from 'react-native-elements'
import React, { useState } from 'react'
import Container from '../../components/container/container'
import { StyleSheet, View, Picker } from 'react-native'

import Collapse from '../../components/collapse/collapse'
import GoogleButton from './components/google-button/google-button'
import FacebookButton from './components/facebook-button/facebook-button'

const Settings = () => {
  const [selectedNotification, setSelectedNotification] = useState()
  return (
    <Container>
      <GoogleButton />
      <FacebookButton />
      <Divider style={styles.divider} />

      <Collapse
        customTitle={
          <View style={styles.titleContainer}>
            <Text>Configurar notificação</Text>
          </View>
        }
      >
        <View style={styles.collapseContent}>
          <Picker style={styles.picker} selectedValue={selectedNotification} onValueChange={setSelectedNotification}>
            <Picker.Item label="Todas notificações" value="0" />
            <Picker.Item label="Apenas em rota de entrega" value="1" />
            <Picker.Item label="Apenas para pegar na agência" value="2" />
            <Picker.Item label="Nunca mandar notificação" value="3" />
          </Picker>
        </View>
      </Collapse>
    </Container>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  divider: {
    marginVertical: 20,
  },
  collapseContent: {
    margin: 30,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'black',
  },
})

export default Settings
