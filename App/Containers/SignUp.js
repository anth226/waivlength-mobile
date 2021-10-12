import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, View, Text } from 'react-native'
import { BeforeLoginHeader, Input, FloatingView, Button } from '../Components';
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
                <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                    <FloatingView isDark={isDark} content={
                        <>
                            <BeforeLoginHeader title={'Let’s get\nstarted'} />
                            <View style={styles.container}>
                                <Text style={styles.descText}>Please enter your email</Text>
                                <Input
                                    value={email}
                                    placeholder={'Enter your email'}
                                    onChangeText={(email) => this.setState({ email })}
                                    inputContainerStyle={styles.inputContainerStyle}
                                />
                                <Button title={'Next'} hasArrow onPress={() => navigation.navigate('VerifyEmail')} />
                            </View>
                        </>
                    } />
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