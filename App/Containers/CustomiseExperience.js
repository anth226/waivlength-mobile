import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native'
import { BeforeLoginHeader, CustomiseExperienceCard, FloatingButton, LoadingSpinner } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/CustomiseExperienceStyles';

class CustomiseExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            switch1: true,
            switch2: false
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
        const { switch1, switch2 } = this.state;
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <BeforeLoginHeader title={'Customise\nyour experience'} />
                <View style={styles.container}>
                    <Text style={styles.descText}>{'Your username is unique. You can change it later.'}</Text>
                    <CustomiseExperienceCard
                        title={'Get more out of Waivlength'}
                        subtitle={'Receive emails about your Waivlength activity and recommendations.'}
                        isSwitch={switch1}
                        onSwitchValueChange={(switch1) => this.setState({ switch1 })}
                    />
                    <CustomiseExperienceCard
                        title={'Connect with people you know'}
                        subtitle={'Let others find your Waivlength account by your email address.'}
                        isSwitch={switch2}
                        onSwitchValueChange={(switch2) => this.setState({ switch2 })}
                    />
                    <Text style={styles.helpText}>{'For more details about these settings, visit '}<Text onPress={() => alert('help center')} style={styles.helpText2}>{'Help Centre'}</Text></Text>
                    <FloatingButton hasSkip onPress={() => navigation.navigate('ConnectAddress')} />
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark: state.app.colorScheme == 'dark',
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CustomiseExperience)