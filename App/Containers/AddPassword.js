import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, Input, FloatingView, Button } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/AddPasswordStyles';

class AddPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            showText: false
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
        const { password, showText } = this.state;
        const { isDark, navigation } = this.props;
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
                                <Button isDark={isDark} title={'Next'} hasArrow onPress={() => navigation.navigate('ProfilePicture')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPassword)