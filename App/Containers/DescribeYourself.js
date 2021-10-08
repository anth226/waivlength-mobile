import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, Input, FloatingButton } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/DescribeYourselfStyles';

class DescribeYourself extends Component {
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
                <BeforeLoginHeader title={'Describe\nyourself'} />
                <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.descText}>{'What makes you special?\nDon’t think too hard, just have fun with it.'}</Text>
                    <Input
                        value={email}
                        placeholder={'Your bio...'}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <Text style={styles.limitText}>{'Maximum 160 characters'}</Text>
                    <FloatingButton hasSkip onPress={() => navigation.navigate('AddUsername')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DescribeYourself)