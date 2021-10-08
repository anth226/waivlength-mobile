import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            flex: 1,
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
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        topView: {
            paddingTop: getHeight(130)
        },
        bottomView: {
            paddingBottom: getHeight(54)
        },
        titleText: {
            ...Fonts.style.helvetica_neue_bold_24,
            fontWeight: '700',
            color: colors.white,
            textAlign: 'center',
            marginBottom: getHeight(25)
        },
        policyText: {
            ...Fonts.style.helvetica_neue_medium_14,
            fontWeight: '400',
            paddingHorizontal: getWidth(86),
            color: colors.white,
            textAlign: 'center',
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
            marginBottom: getHeight(20)
        },
        logo: {},
        loginButton: {
            ...Fonts.style.helvetica_neue_bold_18,
            fontWeight: '700',
            color: colors.white,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: getHeight(18)
        }
    })
}

export default styles;