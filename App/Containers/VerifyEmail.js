import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, Button, FloatingView, LoadingSpinner } from '../Components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/VerifyEmailStyles'

class VerifyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onSignUp = async () => {

    }

    componentDidUpdate(prevProps) {

    }

    render() {
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                    <FloatingView isDark={isDark} content={
                        <>
                            <BeforeLoginHeader title={'Verify\nyour email'} />
                            <View style={styles.container}>
                                <Text style={styles.descText}>{'We sent you a code to '}<Text style={styles.emailText}>{'email@domain.com '}</Text>{'Enter it below to verify:'}</Text>
                                <OTPInputView
                                    pinCount={6}
                                    style={styles.otpView}
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    codeInputHighlightStyle={styles.focusedInput}
                                    onCodeFilled={value => {
                                        console.log(value);
                                    }}
                                />
                                <Text style={styles.resendButton} onPress={() => alert('Resend')}>{'Didn’t receive an email?'}</Text>
                                <Button title={'Next'} hasArrow onPress={() => navigation.navigate('AddPassword')} />
                            </View>
                        </>
                    }
                    />
                </Pressable>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark: state.app.colorScheme == 'dark',
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail)