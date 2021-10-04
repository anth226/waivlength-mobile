import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { LoadingSpinner } from '../Components';
import { connect } from 'react-redux';


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
            <View >
                <Text>Login</Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
