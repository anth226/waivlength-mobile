import React, { useState, useEffect } from "react";
import { Keyboard, View } from "react-native";
import dynamicStyles from './Styles/FloatingViewStyles';

const FloatingView = ({ isDark, content }) => {
    const [keyboardOn, setkeyboardOn] = useState(false);
    const [keyboardHeight, setkeyboardHeight] = useState(0);
    const styles = dynamicStyles(isDark);
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
            setkeyboardHeight(e.endCoordinates.height);
            setkeyboardOn(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
            setkeyboardHeight(0);
            setkeyboardOn(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={[styles.container, keyboardOn && { bottom: keyboardHeight - 10 }]}>
            {content}
        </View>
    );
}

export default FloatingView;