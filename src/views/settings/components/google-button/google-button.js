import React, { useState } from 'react'

import { Button, Icon } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'

import VinculatedProfile from '../vinculated-profile/vinculated-profile'

const GoogleButton = () => {
  const [hasVinculated, setHasVinculated] = useState(false)

  const handlerOnUnvinculate = () => setHasVinculated(!hasVinculated)

  return (
    <View style={{ marginTop: 30 }}>
      {hasVinculated ? (
        <VinculatedProfile icon="google" iconColor="red" title={'Bem vindo Nalfu'} onUnvinculate={handlerOnUnvinculate} />
      ) : (
        <Button
          title="Vincular com google"
          color="#1E6738"
          titleStyle={styles.title}
          buttonStyle={styles.googleButton}
          onPress={handlerOnUnvinculate}
          icon={<Icon iconStyle={styles.icon} type="font-awesome" name={'google'} color="#fff" size={25} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: '#ff411f',
    height: 60,
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 30,
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
  },
})

export default GoogleButton
