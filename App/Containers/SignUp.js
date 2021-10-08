import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, Input, FloatingButton } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/SignUpStyles';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
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
        const { email } = this.state;
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <BeforeLoginHeader title={'Create\nyour account'} />
                <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <Input
                        value={email}
                        placeholder={'Enter your email'}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <FloatingButton onPress={() => navigation.navigate('VerifyEmail')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)