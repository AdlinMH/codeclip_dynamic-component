import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

function ScrollView(props) {
  const { style } = props

  return (
    <ScrollView {...props} style={[styles.wrapper, style]}>
      {props.children}
    </ScrollView>
  )
}

ScrollView.Name = 'Scrollview'
ScrollView.ComponentType = 'scrollview-trail'
ScrollView.HasChild = true

export default ScrollView
