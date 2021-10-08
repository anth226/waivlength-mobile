import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import { connect } from 'react-redux';
import dynamicStyles from './Styles/WelcomeStyles';
import Video from 'react-native-video';
import { welcomeVideo, logo } from '../Assets'
import { Button } from '../Components';

class Welcome extends Component {

    render() {
        const { navigation, isDark } = this.props;
        const styles = dynamicStyles(isDark);
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <Video
                    source={welcomeVideo}
                    resizeMode={'cover'}
                    repeat
                    style={styles.backgroundVideo} />
                <View style={styles.container}>
                    <SafeAreaView style={styles.main}>
                        <View style={styles.topView}>
                            <Text style={styles.titleText}>{'Welcome to'}</Text>
                            <Image source={logo} style={styles.logo} />
                        </View>
                        <View style={styles.bottomView}>
                            <Text style={styles.policyText}>By continuing you agree to our</Text>
                            <View style={styles.tandcView}>
                                <Text onPress={() => alert('Terms of use')} style={styles.textDec}>Terms of use</Text>
                                <Text style={styles.andText}>{' and '}</Text>
                                <Text onPress={() => alert('Privacy Policy')} style={styles.textDec}>Privacy Policy</Text>
                            </View>
                            <Button title={'Create account'} onPress={() => navigation.navigate('SignUp')} />
                            <Text style={styles.loginButton} onPress={() => navigation.navigate('Login')}>{'Login'}</Text>
                        </View>
                    </SafeAreaView>
                </View>
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