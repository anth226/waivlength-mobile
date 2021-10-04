import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Colors } from '../Resources'
import dynamicStyles from './Styles/LoadingSpinnerStyles'

function LoadingSpinner(props) {
  const isDark = props.isDark
  const styles = dynamicStyles(isDark);
  const colors = Colors(isDark)

  if (!props.isLoading) {
    return null
  }
  return (
    <View style={[styles.absoluteFill]}>
      <ActivityIndicator
        color={colors.white}
        size={'large'}
      />
    </View>
  )
}

export default LoadingSpinner