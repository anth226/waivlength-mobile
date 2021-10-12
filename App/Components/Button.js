import React from 'react';
import { Pressable, Text } from 'react-native';
import { ArrowRight } from '../Assets/svg';
import dynamicStyles from './Styles/ButtonStyles';

const Button = ({ title, onPress, textStyle, isDark, containerStyle, backgroundColor, color, hasArrow }) => {
    const styles = dynamicStyles(isDark);
    return (
        <Pressable onPress={onPress} style={[styles.button, containerStyle, backgroundColor && { backgroundColor }]}>
            <Text style={[styles.buttonText, hasArrow && styles.hasArrow, textStyle, color && { color }]}>{title}</Text>
            {hasArrow && <ArrowRight />}
        </Pressable>
    )
}

export default Button;
