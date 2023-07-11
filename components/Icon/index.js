import React from 'react'
import { Icon } from 'react-native-elements'

import { getColor, getFontSize } from '../../utils/jsonHelper'

import { sizes } from '../../themes'
import { onNavigateHandler } from '../../utils/navigationHelper'

function Icon(props) {
  const { color, size, onPress, iconStyle, navigation } = props

  return (
    <Icon
      {...props}
      {...(getColor(color) && { color: getColor(color) })}
      {...(getFontSize(size) && { size: getFontSize(size) })}
      iconStyle={{
        marginTop: sizes.spaces.tiny,
        marginRight: sizes.spaces.tiny,
        ...iconStyle,
      }}
      onPress={() => onNavigateHandler({ navigation, onPress })}
    />
  )
}

Icon.Name = 'Icon'
Icon.ComponentType = 'icon-trail'
Icon.HasChild = false

Icon.defaultProps = {
  size: 'normal',
}

export default Icon
