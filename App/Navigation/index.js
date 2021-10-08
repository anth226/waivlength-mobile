import {
  Login, Welcome, SignUp, Home, VerifyEmail, AddPassword, ProfilePicture
} from '../Containers';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import { navigationRef } from './rootNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ signedIn }) => {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {signedIn ?
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
          :
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="AddPassword" component={AddPassword} />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  signedIn: state.app.signedIn,
})

export default connect(mapStateToProps, null)(AppNavigation)