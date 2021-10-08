import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { BackIcon1 } from '../Assets/svg';
import dynamicStyles from './Styles/BeforeLoginHeaderStyles';
import { goBack } from '../Navigation/rootNavigation';

function BeforeLoginHeader({ title, isDark }) {
    const styles = dynamicStyles(isDark);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerMain}>
                    <Pressable onPress={() => goBack()}>
                        <BackIcon1 />
                    </Pressable>
                </View>
                <Text style={styles.titleText}>{title}</Text>
            </SafeAreaView>
        </View>
    )
}

export default BeforeLoginHeader;