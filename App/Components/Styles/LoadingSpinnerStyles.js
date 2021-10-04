import { StyleSheet } from 'react-native'
import { Colors } from '../../Resources'

const styles = (isDark = false) => {
  const colors = Colors(isDark);
  return StyleSheet.create({
    absoluteFill: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: colors.transparent_4,
      zIndex: 999,
      alignItems: 'center',
      justifyContent: 'center'
    },
  })
}

export default styles;