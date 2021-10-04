import React, { Component } from 'react';
import { View, Text, } from 'react-native'
import { LoadingSpinner, } from '../Components';
import { connect } from 'react-redux';

class SignUp extends Component {
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

        return (
            <View>
                <Text>Sign up</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)