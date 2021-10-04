import { StyleSheet } from 'react-native';
import Colors from './Colors'
import { getWidth, getHeight } from '../Utils/size';

const ApplicationStyles = (isDark = false) => {
    const colors = Colors(isDark)
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        },
        col: {
            flex: 1,
            paddingHorizontal: getWidth(16),
            backgroundColor: colors.background
        },
        bottomContainer: {
            marginBottom: getHeight(30),
            paddingHorizontal: getWidth(16),
        },
        buttonBottomContainer: {
            marginBottom: getHeight(50)
        }
    })
}

export default ApplicationStyles