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
            ...Fonts.style.helvetica_neue_bold_34,
            color: colors.textPrimary,
            fontWeight: '700',
            fontSize: getHeight(34),
            lineHeight: getHeight(38)
        },
        headerMain: {
            paddingTop: getHeight(18),
            paddingBottom: getHeight(22)
        }
    })
}

export default styles;