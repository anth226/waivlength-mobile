import React, { Component } from 'react'
import { AppState, } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { connect } from 'react-redux'
import LoadingSpinner from './LoadingSpinner'
import AppActions from '../Redux/AppRedux'
import NavigationActions from '../Redux/NavigationRedux'
import { ERROR_TYPES } from '../Constants'

class AppStateHandler extends Component {
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange)
        this.unsubscribe = NetInfo.addEventListener(state => {
            if (state.isInternetReachable == false) {
                this.props.showError(ERROR_TYPES.NETWORK)
            } else {
                this.props.hideError()
            }
        })
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange)
        if (this.unsubscribe) {
            this.unsubscribe()
        }
    }

    _handleAppStateChange = nextAppState => {
        if (nextAppState == 'background') {
            this.props.enterBackground()
        } else if (nextAppState == 'active') {
            NetInfo.fetch().then(state => {
                if (state.isInternetReachable == false) {
                    this.props.showError(ERROR_TYPES.NETWORK)
                } else {
                    this.props.hideError()
                }
            })
        }
    }

    render() {
        const { isDark, isLoading } = this.props
        if (isLoading) {
            return <LoadingSpinner isDark={isDark} />
        }
        return null
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.nav.isLoading,
    isDark: state.app.colorScheme == 'dark'
})

const mapDispatchToProps = (dispatch) => ({
    enterBackground: () => dispatch(AppActions.enterBackground()),
    showError: (errorType) => dispatch(NavigationActions.showError(errorType)),
    hideError: () => dispatch(NavigationActions.hideError()),
    reset: () => dispatch(NavigationActions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppStateHandler)