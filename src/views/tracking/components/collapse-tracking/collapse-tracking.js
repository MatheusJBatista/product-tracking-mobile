import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import Collapse from '../../../../components/collapse/collapse'
import { Bold, PrimaryButton } from '../../../../global-style/default-elements'

const CollapseTracking = ({ track, firstItem }) => {
  return (
    <>
      {firstItem && <View style={{ marginTop: 30 }} />}
      <Collapse
        customTitle={
          <View style={styles.titleContainer}>
            <Icon type="font-awesome" name="truck" size={70} />
            <View style={styles.summaryContainer}>
              <Text numberOfLines={1} style={styles.title}>
                PU878270268BR
              </Text>
              <Text numberOfLines={1}>Objeto em trânsito</Text>
              <Text numberOfLines={1}>25/05/2021 às 14:44</Text>
            </View>
          </View>
        }
      >
        <Text style={styles.subTitle}>Ultima atualização: Objeto em trânsito</Text>
        <View style={styles.collapseContent}>
          <Text style={styles.eventText}>
            <Bold>Origem</Bold>: Centro de distribuição do Rio de janeiro.
          </Text>
          <Text style={styles.eventText}>
            <Bold>Destino</Bold>: Agência em são paulo.
          </Text>
          <Text style={styles.eventText}>
            <Bold>Horario</Bold>: 25/05/2021 às 14:44.
          </Text>
        </View>
        <PrimaryButton title="Ver todos eventos" buttonStyle={styles.vinculateButton} />
      </Collapse>
    </>
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
  summaryContainer: {
    marginLeft: 20,
    marginTop: 5,
    width: '70%',
  },
  collapseContent: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  eventText: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 15,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },

  vinculateButton: {
    marginVertical: 10,
  },
})

export default CollapseTracking
