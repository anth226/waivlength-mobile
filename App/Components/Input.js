import React from 'react';
import { TextInput, View, Pressable } from 'react-native';
import dynamicStyles from './Styles/InputStyles';
import { EyeIconClose } from '../Assets/svg'
import { Colors } from '../Resources';
import { useState } from 'react';

const Input = ({
    value, onChangeText, isSecure, placeholder, inputStyle, showText, onRightButtonPress, isDark, isEditable = true, keyboardType, maxLength, onFocus, onEndEditing }) => {
    const [active, setActive] = useState(false)
    const styles = dynamicStyles(isDark);
    const colors = Colors(isDark);
    return (
        <View style={[styles.mainContainer, active && styles.activeInput]}>
            <TextInput
                editable={isEditable}
                placeholderTextColor={colors.textTertiary}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={showText}
                style={[styles.textInput, inputStyle]}
                autoCapitalize={'none'}
                keyboardType={keyboardType ?? 'default'}
                maxLength={maxLength}
                onFocus={() => {
                    onFocus && onFocus()
                    setActive(true)
                }}
                onEndEditing={() => {
                    onEndEditing && onEndEditing()
                    setActive(false)
                }}
            />
            {isSecure ?
                <Pressable onPress={onRightButtonPress}>
                    {showText ? <EyeIconClose /> : <EyeIconClose />}
                </Pressable>
                :
                null
            }
        </View>
    )
}

export default Input;