import { StyleSheet, Platform } from 'react-native'

import { sizes, globalStyles } from '../../themes'

export default StyleSheet.create({
  imgWrapper: {
    padding: sizes.spaces.tiny,
    marginTop: sizes.spaces.tiny,
    marginBottom: sizes.spaces.medium,
    borderRadius: sizes.radius.standard,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '88%',
    overflow: 'hidden',
    ...(Platform.OS === 'ios' && globalStyles.boxShadow),
  },
  img: {
    // width: '100%',
    ...(Platform.OS === 'ios' && { borderRadius: sizes.radius.standard }),
  },
})
