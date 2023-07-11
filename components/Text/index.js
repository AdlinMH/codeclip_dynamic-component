import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { getColor, getFontSize } from '../../utils/jsonHelper'

import { colors } from '../../themes'
import styles from './styles'

function Text(props) {
  const { title, subTitle, subRowTitle, fontSize, textAlign, text, size, style, color } = props

  if (text) {
    return (
      <Text
        style={[
          styles.text,
          style,
          getFontSize(size) && { fontSize: getFontSize(size) },
          { color: colors.niceBlack },
          getColor(color) && { color: getColor(color) },
        ]}>
        {text}
      </Text>
    )
  }

  return (
    <View style={styles.textContainer}>
      <View style={styles.textSubContainer}>
        <Text style={[styles.text, styles[fontSize], styles[textAlign]]}>{title}</Text>

        {Boolean(subRowTitle) && <Text style={[styles.rowSubText]}>{subRowTitle}</Text>}
      </View>

      {Boolean(subTitle) && <Text style={styles.subText}>{subTitle}</Text>}
    </View>
  )
}

Text.propsDescription = [
  {
    prop: 'title',
    type: PropTypes.string,
    description: 'text title',
    example: '',
  },
  {
    prop: 'subTitle',
    type: PropTypes.string,
    description: 'text sub title',
    example: '',
  },
  {
    prop: 'subRowTitle',
    type: PropTypes.string,
    description: 'text sub row title',
    example: '',
  },
  {
    prop: 'fontSize',
    type: PropTypes.string,
    description: "font size. ['h1', 'h2', 'h3', 'h4', 'none']. default: 'none'",
    example: '',
  },
  {
    prop: 'textAlign',
    type: PropTypes.string,
    description: "font size. ['left', 'center', 'right', 'justify']",
    example: 'left',
  },
  {
    prop: 'text',
    type: PropTypes.string,
    description: 'text',
    example: 'Lorem ipsum dolor sit amet',
  },
  {
    prop: 'size',
    type: PropTypes.string,
    description:
      "size type. ['tiny', 'small', 'normal', 'medium', 'big', 'bigger', 'huge', 'miniGiant', 'giant']",
    example: 'normal',
  },
  {
    prop: 'color',
    type: PropTypes.string,
    description: 'color',
    example: 'niceBlack',
  },
  {
    prop: 'style',
    type: PropTypes.object,
    description: '{}',
    example: '{}',
  },
]

Text.propTypes = Text.propsDescription.reduce((acc, curr) => {
  acc[curr.prop] = curr.type
  return acc
}, {})

Text.Name = 'Text'
Text.ComponentType = 'text-trail'
Text.HasChild = false

Text.defaultProps = {
  fontSize: 'none',
}

export default Text
