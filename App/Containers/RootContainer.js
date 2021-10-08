import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import AppNavigation from '../Navigation'
import ReduxPersist from '@config/ReduxPersist'
import { MenuProvider } from 'react-native-popup-menu'
import { AppearanceProvider, AppStateHandler } from '../Components'
import Toast from 'react-native-toast-message';

class RootContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  componentDidUpdate(prevProps) {

  }

  componentWillUnmount() {

  }

  handleLocalizationChange = () => {

  };

  render() {
    return (
      <>
        <MenuProvider>
          <AppNavigation />
        </MenuProvider>
        <AppStateHandler />
        <AppearanceProvider />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  colorScheme: state.app.colorScheme,
  languageCode: state.app.languageCode
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)