import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            height: getHeight(91),
            width: '100%',
            backgroundColor: colors.white,
            paddingHorizontal: getWidth(15),
            borderRadius: getHeight(12),
            borderWidth: getHeight(1),
            borderColor: colors.inputBorderInactive,
            marginBottom: getHeight(10)
        },
        subContainer: {
            flex: 1,
            paddingRight: getWidth(5)
        },
        title: {
            ...Fonts.style.helvetica_neue_bold_16,
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            fontWeight: '700',
            marginBottom: getHeight(5)
        },
        subTitle: {
            ...Fonts.style.helvetica_neue_medium_14,
            lineHeight: getHeight(20),
            color: colors.textSecondary,
            fontWeight: '400'
        }
    })
}

export default styles;