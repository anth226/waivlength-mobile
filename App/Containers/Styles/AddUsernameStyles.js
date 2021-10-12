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
        descText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '400',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(20)
        },
        suggestionView: {
            flexDirection: 'row',
            alignItems: 'center',
            height: getHeight(48),
            width: '100%',
            backgroundColor: colors.white,
            paddingHorizontal: getWidth(15),
            borderRadius: getHeight(12),
            borderWidth: getHeight(1),
            borderColor: colors.inputBorderInactive,
            marginTop: getHeight(10),
            marginBottom: getHeight(20)
        },
        recommendedText: {
            ...Fonts.style.helvetica_neue_medium_14,
            fontWeight: '400',
            lineHeight: getHeight(22),
            color: colors.buttonPrimary,
            textDecorationColor: colors.buttonPrimary,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline'
        },
        blackText: {
            color: colors.textPrimary
        },
        skipButton: {
            ...Fonts.style.helvetica_neue_bold_16,
            fontWeight: '700',
            lineHeight: getHeight(20),
            color: colors.textPrimary,
            marginTop: getHeight(15),
            alignSelf: 'center'
        }
    })
}

export default styles;