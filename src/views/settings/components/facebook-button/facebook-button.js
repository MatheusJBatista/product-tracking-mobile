import { Button, Icon } from 'react-native-elements'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import VinculatedProfile from '../vinculated-profile/vinculated-profile'

const FacebookButton = () => {
  const [hasVinculated, setHasVinculated] = useState(false)

  const handlerOnUnvinculate = () => setHasVinculated(!hasVinculated)

  return (
    <>
      {hasVinculated ? (
        <VinculatedProfile icon="facebook" iconColor="blue" title={'Bem vindo Matheus'} onUnvinculate={handlerOnUnvinculate} />
      ) : (
        <Button
          title="Vincular com facebook"
          color="#1E6738"
          titleStyle={styles.title}
          buttonStyle={styles.facebookButton}
          onPress={handlerOnUnvinculate}
          icon={<Icon iconStyle={styles.icon} type="font-awesome" name={'facebook'} color="#fff" size={25} />}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  facebookButton: {
    height: 60,
    marginTop: 20,
    marginBottom: 20,
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

export default FacebookButton
