import React from "react";
import { Text, View, Switch } from "react-native";
import { Colors } from "../Resources";
import dynamicStyles from './Styles/CustomiseExperienceCardStyle';

const CustomiseExperienceCard = ({ isDark, title, subtitle, isSwitch, onSwitchValueChange }) => {
    const styles = dynamicStyles(isDark);
    const colors = Colors(isDark)
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subtitle}</Text>
            </View>
            <Switch
                trackColor={{ false: colors.switchInactive, true: colors.switchActive }}
                thumbColor={colors.white}
                ios_backgroundColor={colors.switchInactive}
                onValueChange={onSwitchValueChange}
                value={isSwitch}
            />
        </View>
    )
}

export default CustomiseExperienceCard;