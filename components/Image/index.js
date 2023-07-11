import React, { useEffect, useState, useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
// import Image from 'react-native-scalable-image'
import AutoHeightImage from 'react-native-auto-height-image'
import { CacheManager } from 'react-native-expo-image-cache'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import PropTypes from 'prop-types'

import { onNavigateHandler } from '../../utils/navigationHelper'

import { sizes } from '../../themes'
import styles from './styles'

function Image(props) {
  const {
    source,
    disabled,
    onPress,
    clickable,
    style,
    blurRadius,
    capInsets,
    // defaultSource,
    loadingIndicatorSource,
    resizeMethod,
    width,
    borderRadius,

    navigation,
  } = props

  const [cachedUri, setCachedUri] = useState(source)

  useEffect(() => {
    let isCancelled = false

    async function getCachePath(src) {
      const path = await CacheManager.get(src).getPath()
      if (!isCancelled) setCachedUri(path)
    }

    if (typeof source === 'string') getCachePath(source)

    return () => {
      isCancelled = true
    }
  }, [])

  const borderRadiusStyle = useMemo(
    () =>
      borderRadius !== undefined && { borderRadius: sizes.radius[borderRadius] || borderRadius },
    [borderRadius]
  )

  return (
    <TouchableOpacity
      style={[styles.imgWrapper, borderRadiusStyle, style]}
      onPress={() => onNavigateHandler({ navigation, onPress })}
      disabled={!clickable || disabled}>
      <AutoHeightImage
        style={[styles.img, borderRadiusStyle]}
        source={typeof source === 'string' ? { uri: cachedUri } : source}
        // {...(defaultSource && { defaultSource })}
        width={width || responsiveWidth(92)}
        {...(blurRadius && { blurRadius })}
        {...(capInsets && { capInsets })}
        {...(loadingIndicatorSource && { loadingIndicatorSource })}
        {...(resizeMethod && { resizeMethod })}
      />
      {/* <Image style={{ height: 100, width: responsiveWidth(92) }} {...{ preview, uri: source }} /> */}
    </TouchableOpacity>
  )
}

Image.propsDescription = [
  {
    prop: 'source',
    type: PropTypes.any,
    description: 'image source url',
    example: 'https://...',
  },
  {
    prop: 'clickable',
    type: PropTypes.bool,
    description: 'enable/disable clickable image',
    example: false,
  },
  {
    prop: 'disabled',
    type: PropTypes.bool,
    description: 'enable/disable image',
    example: false,
  },
  {
    prop: 'onPress',
    type: PropTypes.object,
    description: '{ type: navigation/payment, key: screenname/fix/sub }',
    example: { type: 'navigation/payment', key: 'screenname/fix/sub' },
  },
  {
    prop: 'navigation',
    type: PropTypes.object,
    description: 'react navigation props',
    example: {},
  },
]

Image.propTypes = Image.propsDescription.reduce((acc, curr) => {
  acc[curr.prop] = curr.type
  return acc
}, {})

Image.Name = 'Image'
Image.ComponentType = 'image-trail'
Image.HasChild = false

Image.defaultProps = {
  clickable: false,
  disabled: false,
  onPress: {},
}

export default Image
