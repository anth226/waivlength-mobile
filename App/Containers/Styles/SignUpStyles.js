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
    })
}

export default styles;