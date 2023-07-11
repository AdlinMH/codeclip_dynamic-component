import React from 'react'
import { Pressable } from 'react-native'
import { responsiveWidth } from 'react-native-full-responsive'
import Image from 'react-native-scalable-image'

import { useTheme } from '../../hooks'

export type ImageProp = {
  onPress: () => void
  disabled: boolean
}

function Image({ disabled, onPress }: ImageProp) {
  const { Layout, Images, Gutters } = useTheme()

  return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[Gutters.marginTopHuge, Gutters.paddingTopLarge, Gutters.marginBottomLarge, Layout.center]}
      >
        <Image
          testID={'brand-img'}
          source={Images.logo}
          resizeMode="contain"
          width={responsiveWidth(55)}
        />
      </Pressable>
  )
}

export default React.memo(Image)
