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
            paddingTop: getHeight(30)
        },
        descText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '400',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(20)
        },
        helpText: {
            ...Fonts.style.helvetica_neue_medium_12,
            fontWeight: '400',
            lineHeight: getHeight(20),
            color: colors.textTertiary,
        },
        helpText2: {
            color: colors.textPrimary,
            textDecorationColor: colors.textPrimary,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline'
        }
    })
}

export default styles;