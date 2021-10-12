import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, View } from 'react-native'
import { BeforeLoginHeader, Input, FloatingView, Button } from '../Components';
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
                <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                    <FloatingView isDark={isDark} content={
                        <>
                            <BeforeLoginHeader title={'Describe\nyourself'} />
                            <View style={styles.container}>
                                <Text style={styles.descText}>{'What makes you special?\nDon’t think too hard, just have fun with it.'}</Text>
                                <Input
                                    value={email}
                                    placeholder={'Your bio...'}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                                <Text style={styles.limitText}>{'Maximum 160 characters'}</Text>
                                <Button isDark={isDark} title={'Next'} hasArrow onPress={() => navigation.navigate('AddUsername')} />
                                <Text style={styles.skipButton}>{'Not now'}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DescribeYourself)