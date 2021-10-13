import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isDark } from '../Utils/common'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    rehydrationComplete: null,
    signup: ['email', 'password', 'code'],
    signupSuccess: ['access_token', 'userId', 'data'],
    signupFailure: ['errorMessage'],
    login: ['username', 'password'],
    loginSuccess: ['access_token', 'userId', 'data'],
    loginFailure: ['errorMessage'],
    forgotPassword: ['username'],
    forgotPasswordSuccess: null,
    forgotPasswordFailure: null,
    uploadImage: null,
    uploadImageSuccess: null,
    uploadImageFailure: null,
    updateAppState: ['appState'],
    updateFirstLaunch: null,
    signOut: null,
    signOutSuccess: null,
    enterBackground: null,
    tokenRefresh: ['access_token']
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const stepOneInitialData = {
    first: '',
    last: '',
}
export const INITIAL_STATE = Immutable({
    loginSuccess: null,
    signupSuccess: null,
    rehydrated: false,
    signedIn: false,
    isLoading: false,
    access_token: null,
    userInfo: null,
    languageCode: null,
    isFirstTimeAppLaunch: true,
    isFirstTimeSignedIn: true,
    colorScheme: isDark() ?? 'light',
    imageUploaded: null,
    fileUploaded: null,
    userId: null,
    errorMessage: null,
    profileData: null,
})

/* ------------- Selectors ------------- */

export const AppSelectors = {
    // isSignedIn: state => state.app.signedIn,
    // getAccessToken: state => state.app.access_token,
    // getAppLanguage: state => state.app.languageCode,
    // getUserId: state => state.app.userId
}

/* ------------- Reducers ------------- */

export const rehydrationComplete = (state) =>
    state.merge({ rehydrated: true })

export const signup = (state) =>
    state.merge({ isLoading: true, signupSuccess: null })

export const signupSuccess = (state, { access_token, userId, data }) =>
    state.merge({ access_token, userId, profileData: data, isLoading: false, signupSuccess: true, signedIn: true, })

export const signupFailure = (state, { errorMessage }) =>
    state.merge({ isLoading: false, signupSuccess: false, errorMessage })

export const login = (state) =>
    state.merge({ isLoading: true, loginSuccess: null })

export const loginSuccess = (state, { access_token, userId, data }) =>
    state.merge({ signedIn: true, access_token, userId, isLoading: false, loginSuccess: true, profileData: data })

export const loginFailure = (state, { errorMessage }) =>
    state.merge({ signedIn: false, isLoading: false, loginSuccess: false, errorMessage })

export const forgotPassword = (state) =>
    state.merge({ passwordSent: null })

export const forgotPasswordSuccess = (state) =>
    state.merge({ passwordSent: true })

export const forgotPasswordFailure = (state) =>
    state.merge({ passwordSent: false })

export const updateAppState = (state, { appState }) => {
    if (appState == 'inactive' || appState == 'background') {
        return state.merge({ appState })
    } else {
        return state.merge({ appState })
    }
}
export const signOutSuccess = (state) =>
    state.merge({ signedIn: false, access_token: null, isLoading: false })

export const enterBackground = (state) =>
    state.merge({})

export const updateFirstLaunch = (state) =>
    state.merge({ isFirstTimeAppLaunch: false })

export const updateFirstSignIn = (state) =>
    state.merge({ isFirstTimeSignedIn: false })

export const uploadImage = (state) =>
    state.merge({ isLoading: true, imageUploaded: null })

export const uploadImageSuccess = (state) =>
    state.merge({ isLoading: false, imageUploaded: true })

export const uploadImageFailure = (state) =>
    state.merge({ isLoading: false, imageUploaded: false })


export const tokenRefresh = (state, { access_token }) =>
    state.merge({ access_token })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.REHYDRATION_COMPLETE]: rehydrationComplete,
    [Types.SIGNUP]: signup,
    [Types.SIGNUP_SUCCESS]: signupSuccess,
    [Types.SIGNUP_FAILURE]: signupFailure,
    [Types.LOGIN]: login,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.FORGOT_PASSWORD]: forgotPassword,
    [Types.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
    [Types.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,
    [Types.UPDATE_APP_STATE]: updateAppState,
    [Types.SIGN_OUT_SUCCESS]: signOutSuccess,
    [Types.ENTER_BACKGROUND]: enterBackground,
    [Types.UPDATE_FIRST_LAUNCH]: updateFirstLaunch,
    [Types.UPLOAD_IMAGE]: uploadImage,
    [Types.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
    [Types.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,
    [Types.TOKEN_REFRESH]: tokenRefresh
})
