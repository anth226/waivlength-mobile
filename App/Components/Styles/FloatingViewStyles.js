import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        container: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            backgroundColor: colors.white,
            borderTopLeftRadius: getWidth(20),
            borderTopRightRadius: getWidth(20),
            overflow: 'hidden'
        },
        floatView: {
            bottom: getHeight(340)
        },
    })
}

export default styles;