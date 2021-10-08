import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        nextButton: {
            position: 'absolute',
            right: getWidth(17),
            bottom: getHeight(54),
            flexDirection: 'row',
            alignItems: 'center',
        },
        floatButton: {
            bottom: getHeight(340)
        },
        skipText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '500',
            color: colors.textPrimary,
            marginRight: getWidth(13)
        }
    })
}

export default styles;