import React, { Component } from 'react';
import { ImageBackground, Text, View, Image } from 'react-native'
import { BeforeLoginHeader, FloatingView, Button } from '../Components';
import { connect } from 'react-redux';
import { bg, cuate } from '../Assets';
import dynamicStyles from './Styles/ConnectAddressStyles';

class ConnectAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <View style={{ flex: 1 }}>
                    <FloatingView isDark={isDark} content={
                        <>
                            <BeforeLoginHeader title={'Connect your\naddress book'} />
                            <View style={styles.container}>
                                <Text style={styles.descText}>{'To find people you may know on Waivlength.'}</Text>
                                <Image source={cuate} resizeMode={'contain'} style={styles.image} />
                                <View style={styles.contactDesc}>
                                    <Text style={styles.contactDescText}>{'Contacts from your address book will be uploaded to Waivlength on an ongoing basis to help connect you with your friends and personalise content, such as making suggestions for you and others. You can turn off syncing and remove previously uploaded contacts in your settings.'}</Text>
                                </View>
                                <Button hasArrow title={'Next'} onPress={() => navigation.navigate('YourInterest')} />
                                <Text style={styles.skipButton}>{'Not now'}</Text>
                            </View>
                        </>
                    }
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectAddress)