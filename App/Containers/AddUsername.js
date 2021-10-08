import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, Input, FloatingButton } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/AddUsernameStyles';
import { ArrowDown } from '../Assets/svg';

class AddUsername extends Component {
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
                <BeforeLoginHeader title={'What should\nwe call you?'} />
                <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.descText}>{'Your username is unique. You can change it later.'}</Text>
                    <Input
                        value={email}
                        placeholder={'User name'}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <View style={styles.suggestionView}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, paddingRight: 20 }}>
                            <Text style={styles.recommendedText}>recommend<Text style={styles.blackText}>{', '}</Text></Text>
                            <Text style={styles.recommendedText}>recommend<Text style={styles.blackText}>{', '}</Text></Text>
                            <Text style={styles.recommendedText}>recommend</Text>
                        </View>
                        <ArrowDown />
                    </View>
                    <FloatingButton hasSkip onPress={() => navigation.navigate('VerifyEmail')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUsername)