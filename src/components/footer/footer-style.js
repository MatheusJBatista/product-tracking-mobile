import styled, { css } from 'styled-components/native'
import GlobalStyle from '../../global-style/global-style'

const footerSize = 50

const Footer = styled.View`
  margin-top: 20px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #000;
  border-top-width: 1px;
  border-top-color: #696969;
`

const FooterItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: ${footerSize}px;
  background-color: #000;

  ${props =>
    props.selected &&
    css`
      background-color: ${GlobalStyle.primaryColor};
    `}
`

const FooterItemText = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
`
export { Footer, FooterItem, FooterItemText, footerSize }
