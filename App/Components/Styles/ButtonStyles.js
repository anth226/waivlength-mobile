import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        button: {
            height: getHeight(54),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.buttonPrimary,
            alignSelf: 'center',
            width: getWidth(320),
            borderRadius: getHeight(27)
        },
        buttonText: {
            ...Fonts.style.helvetica_neue_bold_18,
            color: colors.white,
            fontWeight: '700',
        },
    })
}

export default styles;