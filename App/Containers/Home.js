import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
