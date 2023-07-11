import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { responsiveHeight } from 'react-native-responsive-dimensions'

import { onNavigateHandler } from '../../utils/navigationHelper'
import { getColor, getFontSize } from '../../utils/jsonHelper'

import Icon from '../Icon'

import { colors, fonts } from '../../themes'
import styles from './styles'

function Button(props) {
  const {
    title,
    topHintTitle,
    mode,
    color,
    bgColor,
    round,
    disabled,
    onPress,
    onPressCollection,

    loading,
    navigation,
    autoWidth,
    containerStyle,
    style,
    textSize,
    textStyle,

    renderIcon,
    iconSize,
    iconProps,
  } = props

  return (
    <View style={containerStyle}>
      {Boolean(topHintTitle) && (
        <View style={{ alignSelf: 'center', marginBottom: responsiveHeight(0.5) }}>
          <Text
            style={{
              fontSize: fonts.sizes.small,
              color: colors.niceBlack,
              fontFamily: fonts.fontFamily.InterSemiBold,
            }}>
            {topHintTitle}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.btnDefault,
          renderIcon ? { flexDirection: 'row', alignItems: 'center' } : { flexDirection: 'column' },
          (loading || disabled) && styles.btnDefaultDisabled,
          mode === 'outlined' && styles.btnModeOutlined,
          mode === 'text' && styles.btnModeText,
          round && styles.btnRound,
          getColor(bgColor) && { backgroundColor: getColor(bgColor) },
          autoWidth && styles.btnAutoWidth,
          style,
        ]}
        onPress={() => onNavigateHandler({ navigation, onPress, onPressCollection })}
        disabled={disabled}>
        {loading && <ActivityIndicator color={colors.rushBlack} />}

        {renderIcon && <Icon {...iconProps} size={iconSize} />}

        {!loading && (
          <Text
            numberOfLines={1}
            style={[
              styles.btnText,
              getColor(color) && { color: getColor(color) },
              getFontSize(textSize) && { fontSize: getFontSize(textSize) },
              textStyle,
            ]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

Button.propsDescription = [
  {
    prop: 'title',
    type: PropTypes.string,
    description: 'button title',
    example: 'Submit',
  },
  {
    prop: 'topHintTitle',
    type: PropTypes.string,
    description: 'button top hint title',
    example: '',
  },
  {
    prop: 'mode',
    type: PropTypes.string,
    description: "button mode. ['filled', 'outlined', 'text']. default: 'filled'",
    example: 'filled',
  },
  {
    prop: 'color',
    type: PropTypes.string,
    description: 'button color',
    example: colors.niceBlack,
  },
  {
    prop: 'bgColor',
    type: PropTypes.string,
    description: 'button color',
    example: colors.rushYellow,
  },
  {
    prop: 'round',
    type: PropTypes.bool,
    description: 'rounded style button',
    example: false,
  },
  {
    prop: 'disabled',
    type: PropTypes.bool,
    description: 'enable/disable button',
    example: false,
  },
  {
    prop: 'onPress',
    type: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    description: '`{ type: navigation/payment, key: screenname/fix/sub }` or `() => {}`',
    // example: { type: 'navigation/payment', key: 'screenname/fix/sub' },
  },
  {
    prop: 'onPressCollection',
    type: PropTypes.object,
    description: '{ fix: () => {}, sub: () => {} }',
    example: { fix: () => {}, sub: () => {} },
  },
  {
    prop: 'loading',
    type: PropTypes.bool,
    description: 'loading button',
    example: false,
  },
  {
    prop: 'navigation',
    type: PropTypes.object,
    description: 'react navigation props',
    example: {},
  },
  {
    prop: 'authWidth',
    type: PropTypes.bool,
    description: 'make button with follow its content',
    example: false,
  },
  {
    prop: 'containerStyle',
    type: PropTypes.object,
    description: 'button container style',
    example: {},
  },
  {
    prop: 'style',
    type: PropTypes.object,
    description: 'button style',
    example: {},
  },
  {
    prop: 'textStyle',
    type: PropTypes.object,
    description: 'button text style',
    example: {},
  },
]

Button.propTypes = Button.propsDescription.reduce((acc, curr) => {
  acc[curr.prop] = curr.type
  return acc
}, {})

Button.Name = 'Button'
Button.ComponentType = 'button-trail'
Button.HasChild = false

Button.defaultProps = {
  title: '',
  mode: 'filled',
  round: false,
  disabled: false,
  onPress: {},
}

export default Button
