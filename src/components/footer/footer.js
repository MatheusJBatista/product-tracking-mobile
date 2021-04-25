import React, { useState } from 'react'

import { ButtonGroup, Icon, Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { FooterItem, Footer as FooterStyle, FooterItemText } from './footer-style'

const Footer = () => {
  const footerItems = {
    tracking: 'tracking',
    config: 'config',
  }
  const [selectedItem, setSelectedItem] = useState(footerItems.tracking)

  const handlerOnPressTracking = () => {
    if (selectedItem === footerItems.tracking) return

    setSelectedItem(footerItems.tracking)
  }
  const handlerOnPressConfig = () => {
    if (selectedItem === footerItems.config) return

    setSelectedItem(footerItems.config)
  }

  return (
    <FooterStyle>
      <FooterItem onPress={handlerOnPressTracking} selected={selectedItem === footerItems.tracking}>
        <Icon type="font-awesome" name="search" color="#fff" />
        <FooterItemText>rastreio</FooterItemText>
      </FooterItem>
      <FooterItem onPress={handlerOnPressConfig} selected={selectedItem === footerItems.config}>
        <Icon type="font-awesome" name="cogs" color="#fff" />
        <FooterItemText>configurações</FooterItemText>
      </FooterItem>
    </FooterStyle>
  )
}

export default Footer
