import React from 'react'
import { StyleSheet, Text } from 'react-native'

import CollapsibleView from '@eliav2/react-native-collapsible-view'
import { Divider } from 'react-native-elements'

const Collapse = ({ children, title, customTitle }) => {
  const titleView = title ? <Text style={styles.collapseTitle}>{title}</Text> : customTitle
  return (
    <CollapsibleView title={titleView} style={styles.collapse} arrowStyling={{ rounded: true, marginTop: 5 }} isRTL>
      <Divider />
      {children}
    </CollapsibleView>
  )
}

const styles = StyleSheet.create({
  collapse: {
    backgroundColor: '#fff',
    paddingBottom: 2,
    paddingTop: 7,
    marginRight: 0,
    marginLeft: 0,
  },
  collapseTitle: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
})

export default Collapse
