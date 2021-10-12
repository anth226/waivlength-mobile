import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import { connect } from 'react-redux';
import dynamicStyles from './Styles/WelcomeStyles';
import { graphic, logo } from '../Assets'
import { Button } from '../Components';
import { Colors } from '../Resources';

class Welcome extends Component {

    render() {
        const { navigation, isDark } = this.props;
        const styles = dynamicStyles(isDark);
        const colors = Colors(isDark);
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <SafeAreaView style={styles.main}>
                    <Image source={logo} style={styles.logo} resizeMode={'contain'} />
                    <Text style={styles.titleText}>{'Social media you can trust'}</Text>
                    <Image source={graphic} style={styles.graphic} resizeMode={'contain'} />
                    <Text style={styles.policyText}>By continuing you agree to our</Text>
                    <View style={styles.tandcView}>
                        <Text onPress={() => alert('Terms of use')} style={styles.textDec}>Terms of use</Text>
                        <Text style={styles.andText}>{' and '}</Text>
                        <Text onPress={() => alert('Privacy Policy')} style={styles.textDec}>Privacy Policy</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title={'Create account'} backgroundColor={colors.white} color={colors.textPrimary} onPress={() => navigation.navigate('SignUp')} />
                    </View>
                    <Text style={styles.loginButton} onPress={() => navigation.navigate('Login')}>{'Login'}</Text>
                </SafeAreaView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark: state.app.colorScheme == 'dark',
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)