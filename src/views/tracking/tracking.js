import React from 'react'

import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import * as ClickSelectors from '../../selectors/click/click-selector'
import * as ClickActions from '../../redux/click/click-action'
import Container from '../../components/container/container'
import CollapseTracking from './components/collapse-tracking/collapse-tracking'

const Tracking = () => {
  const dispatch = useDispatch()
  const clickCount = useSelector(ClickSelectors.clickQuantity)

  const handlerIncrementClickQuantity = () => dispatch(ClickActions.incrementClick())

  const mockData = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }]

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginTop: 20,
            }}
          />
        )}
        data={mockData}
        renderItem={({ item, index }) => <CollapseTracking track={item} firstItem={!index} />}
      />
    </Container>
  )
}

export default Tracking
