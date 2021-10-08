import React, { useState, useEffect } from "react";
import { Keyboard, Pressable, Text } from "react-native";
import { ButtonNext } from "../Assets/svg";
import dynamicStyles from './Styles/FloatingButtonStyles';

const FloatingButton = ({ isDark, onPress, hasSkip, onSkip }) => {
    const [keyboardOn, setkeyboardOn] = useState(false);
    const styles = dynamicStyles(isDark);
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardWillShow", () => {
            setkeyboardOn(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
            setkeyboardOn(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <Pressable onPress={onPress} style={[styles.nextButton, keyboardOn && styles.floatButton]}>
            {hasSkip && <Text style={styles.skipText} onPress={onSkip}>{'Skip'}</Text>}
            <ButtonNext />
        </Pressable>
    );
}

export default FloatingButton;