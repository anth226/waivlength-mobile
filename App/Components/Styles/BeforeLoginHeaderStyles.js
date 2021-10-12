import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            paddingHorizontal: getWidth(20),
        },
        titleText: {
            ...Fonts.style.helvetica_neue_bold_36,
            color: colors.textPrimary,
            fontWeight: '700',
            lineHeight: getHeight(38)
        },
        headerMain: {
            paddingTop: getHeight(22.5),
            paddingBottom: getHeight(12.5)
        }
    })
}

export default styles;