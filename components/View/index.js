import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { getColor } from '../../utils/jsonHelper'

import styles from './styles'

function View(props) {
  const { style } = props

  return (
    <View
      {...props}
      style={[
        styles.wrapper,
        style,
        getColor(style?.backgroundColor) && {
          backgroundColor: getColor(style?.backgroundColor),
        },
      ]}>
      {props.children}
    </View>
  )
}

View.propsDescription = [
  {
    prop: 'style',
    type: PropTypes.objectOf(PropTypes.any),
    description: '{}',
    example: '{}',
  },
]

View.Name = 'View'
View.ComponentType = 'view-trail'
View.HasChild = true

export default View
