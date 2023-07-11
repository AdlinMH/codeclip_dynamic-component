import { StyleSheet } from 'react-native'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'

import { fonts, colors, sizes } from '../../themes'

export default StyleSheet.create({
  btnDefault: {
    backgroundColor: colors.rushYellow,
    width: '100%',
    height: responsiveWidth(13),
    marginBottom: sizes.spaces.small,
    borderRadius: sizes.spaces.tiny,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnText: {
    fontFamily: fonts.fontFamily.InterBold,
    fontSize: fonts.sizes.normal,
    color: colors.black,
    fontWeight: '600',
  },
  btnRound: {
    borderRadius: responsiveWidth(6),
  },
  btnDefaultDisabled: {
    backgroundColor: colors.disabled,
  },
  btnModeOutlined: {
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white,
  },
  btnModeText: {
    borderWidth: 0,
    shadowColor: colors.transparent,
    backgroundColor: colors.transparent,
  },
  btnAutoWidth: {
    height: responsiveHeight(5),
    width: 'auto',
    paddingHorizontal: sizes.spaces.standard,
    alignSelf: 'flex-end',
    margin: 0,
    right: 0,
  },
})
