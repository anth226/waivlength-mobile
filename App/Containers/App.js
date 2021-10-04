import '@config'
import DebugConfig from '@config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import SplashScreen from 'react-native-splash-screen'
import Reactotron from '@config/ReactotronConfig'

// create our store
const store = createStore()

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500)
  }

  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default DebugConfig.useReactotron
  ? Reactotron.overlay(App)
  : App