import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.normalBlue
        },
        backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        main: {
            flex: 1,
            alignItems: 'center',
        },
        titleText: {
            ...Fonts.style.helvetica_neue_bold_20,
            fontWeight: '700',
            lineHeight: getHeight(24),
            color: colors.white,
            textAlign: 'center',
            marginTop: getHeight(8)
        },
        policyText: {
            ...Fonts.style.helvetica_neue_medium_14,
            fontWeight: '400',
            paddingHorizontal: getWidth(86),
            color: colors.white,
            textAlign: 'center',
            marginTop: getHeight(34)
        },
        andText: {
            ...Fonts.style.helvetica_neue_medium_14,
            fontWeight: '400',
            color: colors.white,
        },
        textDec: {
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            textDecorationColor: colors.white,
            ...Fonts.style.helvetica_neue_medium_14,
            fontWeight: '400',
            color: colors.white,
            textAlign: 'center',
        },
        tandcView: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: getHeight(25)
        },
        logo: {
            width: getWidth(253),
            height: getHeight(46),
            marginTop: getHeight(63)
        },
        graphic: {
            width: getWidth(375)
        },
        loginButton: {
            ...Fonts.style.helvetica_neue_bold_18,
            fontWeight: '700',
            color: colors.white,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: getHeight(23)
        },
        buttonContainer: {
            width: '100%',
            paddingHorizontal: getWidth(27),
        }
    })
}

export default styles;