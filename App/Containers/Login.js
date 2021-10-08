import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import { LoadingSpinner } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    componentWillUnmount() {

    }

    onLogin = async () => {

    }

    render() {

        return (
            <ImageBackground source={bg} style={{ flex: 1, resizeMode: 'cover', backgroundColor: '#fff' }} >
                <Text>Login</Text>
            </ImageBackground>
        )
    }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
