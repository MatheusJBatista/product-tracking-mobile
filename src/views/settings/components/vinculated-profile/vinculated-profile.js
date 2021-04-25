import React from 'react'

import { Button, Icon } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native'

import Collapse from '../../../../components/collapse/collapse'

const VinculatedProfile = ({ icon, iconColor, title, onUnvinculate }) => {
  return (
    <Collapse
      customTitle={
        <View style={styles.vinculatedProfile}>
          <Icon type="font-awesome" name={icon} color={iconColor} size={25} />
          <Text style={styles.vinculatedProfileText}>{title}</Text>
        </View>
      }
    >
      <Button title="Desvincular conta" onPress={onUnvinculate} />
    </Collapse>
  )
}

const styles = StyleSheet.create({
  vinculatedProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  vinculatedProfileText: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 20,
  },
})

export default VinculatedProfile
