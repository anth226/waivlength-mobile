import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        background: {
            flex: 1,
            resizeMode: 'cover',
            backgroundColor: colors.white
        },
        container: {
            flex: 1,
            paddingHorizontal: getWidth(20),
            paddingTop: getHeight(20),
            paddingBottom: getHeight(44)
        },
        otpView: {
            width: '100%',
            height: getWidth(48),
        },
        underlineStyleBase: {
            ...Fonts.style.helvetica_neue_bold_20,
            fontWeight: '700',
            width: getWidth(48),
            height: getWidth(48),
            borderWidth: 1,
            color: colors.textPrimary,
            borderColor: colors.inputBorderInactive,
            backgroundColor: colors.white,
            borderRadius: getWidth(10)
        },
        focusedInput: {
            borderColor: colors.inputBorderActive,
        },
        descText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '400',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(20)
        },
        emailText: {
            color: colors.buttonPrimary
        },
        resendButton: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '500',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginTop: getHeight(20),
            marginBottom: getHeight(70),
            textDecorationColor: colors.textPrimary,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
        }
    })
}

export default styles;