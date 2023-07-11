import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

import { fonts, colors, sizes } from '../../themes'

export default StyleSheet.create({
  textContainer: {
    width: '100%',
  },
  textSubContainer: {
    marginBottom: sizes.spaces.small,
    marginTop: sizes.spaces.standard,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  h1: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.big,
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(4),
    marginHorizontal: responsiveWidth(1),
    color: colors.niceBlack,
  },
  h2: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.upsize,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    color: colors.niceBlack,
  },
  h3: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.medium,
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    color: colors.niceBlack,
  },
  h4: {
    fontFamily: fonts.fontFamily.InterBold,
    fontSize: fonts.sizes.normal,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: colors.niceBlack,
  },
  h5: {
    fontFamily: fonts.fontFamily.InterExtraBold,
    fontSize: fonts.sizes.small,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: colors.niceBlack,
  },

  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  justify: {
    textAlign: 'justify',
  },

  text: {
    fontFamily: fonts.fontFamily.InterRegular,
    fontSize: fonts.sizes.normal,
    marginTop: sizes.spaces.micro,
    marginRight: sizes.spaces.micro,
    color: colors.niceBlack,
  },
  subText: {
    fontSize: fonts.sizes.smallUp,
    fontFamily: fonts.fontFamily.InterRegular,
    color: colors.darkerGray,
    marginVertical: responsiveWidth(1),
    textAlign: 'justify',
  },
  rowSubText: {
    fontFamily: fonts.fontFamily.InterRegular,
    fontSize: fonts.sizes.normal - 1,
    color: colors.niceBlack,
    marginBottom: responsiveHeight(2.6),
    marginHorizontal: responsiveWidth(3),
  },
})
