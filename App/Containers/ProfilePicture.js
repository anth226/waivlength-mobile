import React, { Component } from 'react';
import { ImageBackground, Pressable, Keyboard, Text, Image, View } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, FloatingButton } from '../Components';
import { connect } from 'react-redux';
import { bg, addImage, imageContainer } from '../Assets';
import { CrossButton } from '../Assets/svg';
import dynamicStyles from './Styles/ProfilePictureStyles';
import * as ImagePicker from "react-native-image-picker"
import ActionSheet from 'react-native-actionsheet'


class ProfilePicture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fileUri: null,
        }
    }

    cameraLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
        };

        ImagePicker.launchCamera(options, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                const source = { uri: res.uri };
                console.log('response', JSON.stringify(res));
                this.setState({
                    fileUri: res.uri
                });
            }
        });
    }

    imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (res) => {

            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else {
                const source = { uri: res.uri };
                console.log('response', res);

                this.setState({
                    fileUri: res.assets[0].uri
                });
            }
        });
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
        const { fileUri } = this.state;
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <BeforeLoginHeader title={'Pick a\nprofile picture'} />
                <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.descText}>{'Have a favourite selfie? Upload it now.'}</Text>
                    <Pressable onPress={() => this.ActionSheet.show()}>
                        {fileUri ?
                            <View style={styles.selectedImageContainer}>
                                <ImageBackground source={imageContainer} style={styles.imagePlaceholder}>
                                    <Image source={{ uri: fileUri }} resizeMode={'cover'} style={styles.selectedImage} />
                                </ImageBackground>
                                {fileUri && <Pressable style={styles.closeButton} onPress={() => this.setState({ fileUri: null })}><CrossButton /></Pressable>}
                            </View>
                            :
                            <Image source={addImage} style={styles.imagePlaceholder} />
                        }
                    </Pressable>
                    <FloatingButton hasSkip onPress={() => { }} />
                </Pressable>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Choose Picture'}
                    options={['Camera', 'Photo Library', 'Cancel']}
                    cancelButtonIndex={2}
                    onPress={(index) => {
                        if (index == 0) {
                            this.cameraLaunch()
                        } else if (index == 1) {
                            this.imageGalleryLaunch()
                        }
                    }}
                />
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