import React from 'react'
import styled from 'styled-components/native'

import { Button } from 'react-native-elements'
import GlobalStyle from './global-style'

const PrimaryButton = ({ buttonStyle, ...props }) => (
  <Button buttonStyle={[buttonStyle && buttonStyle, { backgroundColor: GlobalStyle.primaryColor }]} {...props} />
)

const Bold = styled.Text`
  font-weight: bold;
`

export { PrimaryButton, Bold }
