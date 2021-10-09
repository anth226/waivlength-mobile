import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            width: '100%',
            backgroundColor: colors.white,
            paddingHorizontal: getWidth(15),
            paddingTop: getHeight(12),
            borderRadius: getHeight(12),
            borderWidth: getHeight(1),
            borderColor: colors.inputBorderInactive,
            marginTop: getHeight(10)
        },
        titleText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '700',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(10)
        },
        tagContainer: {
            borderRadius: getHeight(14),
            height: getHeight(28),
            paddingHorizontal: getWidth(15),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.buttonPrimary,
            marginRight: getWidth(10),
            marginBottom: getHeight(10)
        },
        unselectedTagContainer: {
            borderRadius: getHeight(14),
            height: getHeight(28),
            paddingHorizontal: getWidth(14),
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: colors.buttonPrimary,
            marginRight: getWidth(10),
            marginBottom: getHeight(10)
        },
        tagText: {
            ...Fonts.style.helvetica_neue_light_14,
            fontWeight: '500',
            lineHeight: getHeight(22),
            color: colors.white,
        },
        unselectedTagText: {
            ...Fonts.style.helvetica_neue_light_14,
            fontWeight: '500',
            lineHeight: getHeight(22),
            color: colors.buttonPrimary,
        }
    })
}

export default styles;