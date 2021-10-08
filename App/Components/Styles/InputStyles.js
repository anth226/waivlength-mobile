import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        mainContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            height: getHeight(48),
            width: '100%',
            backgroundColor: colors.white,
            paddingHorizontal: getWidth(20),
            borderRadius: getHeight(24),
            borderWidth: getHeight(1),
            borderColor: colors.inputBorderInactive
        },
        textInput: {
            ...Fonts.style.helvetica_neue_medium_16,
            color: colors.textPrimary,
            fontWeight: '400',
            flex: 1,
            paddingRight: getWidth(20)
        },
        activeInput: {
            borderColor: colors.inputBorderActive
        }
    })
}

export default styles;