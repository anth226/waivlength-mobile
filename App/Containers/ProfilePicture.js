import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, Image } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, FloatingButton } from '../Components';
import { connect } from 'react-redux';
import { bg, addImage } from '../Assets';
import dynamicStyles from './Styles/AddPasswordStyles';

class ProfilePicture extends Component {
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
        const { } = this.state;
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <BeforeLoginHeader title={'Pick a\nprofile picture'} />
                <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.descText}>{'Have a favourite selfie? Upload it now.'}</Text>
                    <Pressable onPress={() => alert('add Image')}>
                        <Image source={addImage} style={styles.imagePlaceholder} />
                    </Pressable>
                    <FloatingButton hasSkip onPress={() => { }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture)