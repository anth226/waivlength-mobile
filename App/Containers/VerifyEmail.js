import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, Button, FloatingView, LoadingSpinner } from '../Components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/VerifyEmailStyles'
import AppActions from '../Redux/AppRedux';
import { STRING_UTILS } from '../Utils';

class VerifyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            isvalidEmail: true
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onVerifyEmailByToken = async () => {
        const { code } = this.state;
        const { verifyEmail, navigation } = this.props;
        const { params } = this.props.route;
        const email = params.email

        if (email === '' || !STRING_UTILS.validateEmail(email)) {
            this.setState({ isvalidEmail: false })
        }
        setTimeout(() => {
            const { isvalidEmail } = this.state;
            if (isvalidEmail) {
                verifyEmail(email, code)
            }
        }, 300)
    }

    componentDidUpdate(prevProps) {
        const { params } = this.props.route;
        const email = params.email
        const { verifyEmailSuccess, errorMessage, navigation } = this.props;
        if (verifyEmailSuccess != prevProps.verifyEmailSuccess && verifyEmailSuccess != null) {
            if (verifyEmailSuccess) {
                navigation.navigate('AddPassword', { email: email })
            } else {
                alert(`${errorMessage}`)
            }
        }
    }

    render() {
        const { isDark, navigation, isLoading } = this.props;
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
                                    pinCount={7}
                                    style={styles.otpView}
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    codeInputHighlightStyle={styles.focusedInput}
                                    onCodeFilled={value => {
                                        this.setState({ code: value })
                                        console.log(value);
                                    }}
                                />
                                <Text style={styles.resendButton} onPress={() => alert('Resend')}>{'Didn’t receive an email?'}</Text>
                                <Button title={'Next'} hasArrow onPress={() => this.onVerifyEmailByToken()} />
                            </View>
                        </>
                    }
                    />
                </Pressable>
                <LoadingSpinner isDark={isDark} isLoading={isLoading} />
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark: state.app.colorScheme == 'dark',
    isLoading: state.app.isLoading,
    verifyEmailSuccess: state.app.verifyEmailSuccess,
    errorMessage: state.app.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
    verifyEmail: (email, token) => dispatch(AppActions.verifyEmail(email, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail)