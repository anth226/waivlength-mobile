import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, Input, FloatingButton, Button, FloatingView } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/AddUsernameStyles';
import { ArrowDown } from '../Assets/svg';
import { STRING_UTILS } from '../Utils';
import AppActions from '../Redux/AppRedux';

class AddUsername extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            isvalidEmail:true
        }
    }

    componentDidMount() {
     
    }

    componentWillUnmount() {
    }

   
  onRegisterEmail = async () => {
        const { username, isvalidEmail } = this.state;
        const { registerEmail, navigation } = this.props;
        const {params} = this.props.route;
        const email = params.email

        if (email === '' || !STRING_UTILS.validateEmail(email)) {
            this.setState({ isvalidEmail: false })
        }
        setTimeout(() => {
            const { isvalidEmail } = this.state;
            if (isvalidEmail) {
                registerEmail(email,username)
            }
        }, 300)  
  }
    componentDidUpdate(prevProps) {
        const {params} = this.props.route;
        const email = params.email
        const {registerEmailSuccess, errorMessage,navigation} = this.props;
        if(registerEmailSuccess != prevProps.registerEmailSuccess && registerEmailSuccess != null){
            if(registerEmailSuccess){
                navigation.navigate('VerifyEmail',{email:email})
            }else{
                alert(`${errorMessage}`)
            }
        }
    }

    render() {
        const { username } = this.state;
        const { isDark, navigation, isLoading } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                    <FloatingView isDark={isDark} content={
                        <>
                            <BeforeLoginHeader title={'What should\nwe call you?'} />
                            <View style={styles.container}>
                                <Text style={styles.descText}>{'Your username is unique. You can change it later.'}</Text>
                                <Input
                                    value={username}
                                    placeholder={'User name'}
                                    onChangeText={(username) => this.setState({ username })}
                                />
                                <View style={styles.suggestionView}>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, paddingRight: 20 }}>
                                        <Text style={styles.recommendedText}>recommend</Text><Text style={styles.blackText}>{', '}</Text>
                                        <Text style={styles.recommendedText}>recommend</Text><Text style={styles.blackText}>{', '}</Text>
                                        <Text style={styles.recommendedText}>recommend</Text>
                                    </View>
                                    <ArrowDown />
                                </View>
                                <Button hasArrow title={'Next'} onPress={() => this.onRegisterEmail()} />
                                <Text style={styles.skipButton}>{'Not now'}</Text>
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
    registerEmailSuccess: state.app.registerEmailSuccess,
    errorMessage: state.app.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
    registerEmail: (email,username) => dispatch(AppActions.registerEmail(email,username))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUsername)