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
            marginBottom: getHeight(30)
        },
        mightLikeText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '700',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(30)
        },
        mightLikeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            backgroundColor: colors.white,
            paddingHorizontal: getWidth(15),
            paddingVertical: getHeight(12),
            borderRadius: getHeight(12),
            borderWidth: getHeight(1),
            borderColor: colors.inputBorderInactive,
            marginTop: getHeight(30)
        }
    })
}

export default styles;