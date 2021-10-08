import React from 'react';
import { Pressable, Text } from 'react-native';
import dynamicStyles from './Styles/ButtonStyles';

const Button = ({ title, onPress, style, textStyle, isDark, containerStyle }) => {
    const styles = dynamicStyles(isDark);
    return (
        <Pressable onPress={onPress} style={[styles.button, containerStyle]}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default Button;
