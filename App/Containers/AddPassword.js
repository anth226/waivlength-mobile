import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, Input, FloatingView, Button, LoadingSpinner } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/AddPasswordStyles';
import { STRING_UTILS } from '../Utils';
import AppActions from '../Redux/AppRedux';
class AddPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            showText: false,
            isvalidEmail: true
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onRegisterPassword = async () => {
        const { password } = this.state;
        const { registerPassword } = this.props;
        const { params } = this.props.route;
        const email = params.email

        if (email === '' || !STRING_UTILS.validateEmail(email)) {
            this.setState({ isvalidEmail: false })
        }
        setTimeout(() => {
            const { isvalidEmail } = this.state;
            if (isvalidEmail) {
                registerPassword(email, password)
            }
        }, 300)
    }

    componentDidUpdate(prevProps) {
        const { registerPasswordSuccess, errorMessage, navigation } = this.props;
        if (registerPasswordSuccess != prevProps.registerPasswordSuccess && registerPasswordSuccess != null) {
            if (registerPasswordSuccess) {
                navigation.navigate('ProfilePicture')
            } else {
                alert(`${errorMessage}`)
            }
        }
    }

    render() {
        const { password, showText } = this.state;
        const { isDark, navigation, isLoading } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                    <FloatingView isDark={isDark} content={
                        <>
                            <BeforeLoginHeader title={'You’ll need\na password'} />
                            <View style={styles.container}>
                                <Text style={styles.descText}>{'Make sure it’s 8 character or more.'}</Text>
                                <Input
                                    value={password}
                                    placeholder={'Enter password'}
                                    onChangeText={(password) => this.setState({ password })}
                                    isSecure
                                    showText={!showText}
                                    onRightButtonPress={() => this.setState({ showText: !showText })}
                                    inputContainerStyle={styles.inputContainerStyle}
                                />
                                <Button isDark={isDark} title={'Next'} hasArrow onPress={() => this.onRegisterPassword()} />
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
    registerPasswordSuccess: state.app.registerPasswordSuccess,
    errorMessage: state.app.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
    registerPassword: (email, password) => dispatch(AppActions.registerPassword(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPassword)