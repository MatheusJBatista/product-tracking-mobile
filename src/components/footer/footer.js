import React, { useState } from 'react'

import { Icon } from 'react-native-elements'
import { FooterItem, Footer as FooterStyle, FooterItemText } from './footer-style'
import Routes from '../../models/routes'

const icons = {
  [Routes.tracking]: 'search',
  [Routes.settings]: 'cogs',
}

const Footer = ({ state, descriptors, navigation }) => {
  const tabs = state.routes.map((route, index) => {
    const { options } = descriptors[route.key]
    const selected = state.index === index

    const handlerOnPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      })

      if (!selected && !event.defaultPrevented) {
        navigation.navigate(route.name)
      }
    }

    return {
      route: route.name,
      title: options.title,
      selected,
      handlerOnPress,
      icon: icons[route.name],
    }
  })

  return (
    <FooterStyle>
      {tabs.map(tab => (
        <FooterItem key={tab.route} onPress={tab.handlerOnPress} selected={tab.selected} accessibilityRole="button" accessibilityLabel={tab.route}>
          <Icon type="font-awesome" name={tab.icon} color="#fff" />
          <FooterItemText>{tab.title}</FooterItemText>
        </FooterItem>
      ))}
    </FooterStyle>
  )
}

export default Footer
