import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isDark } from '../Utils/common'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({

    registerEmail: ['email', 'username'],
    registerEmailSuccess: ['data'],
    registerEmailFailure: ['errorMessage'],
    registerPassword: ['email', 'password'],
    registerPasswordSuccess: ['data'],
    registerPasswordFailure: ['errorMessage'],
    verifyEmail: ['email', 'token'],
    verifyEmailSuccess: ['data'],
    verifyEmailFailure: ['errorMessage'],
    sendToken: ['username', 'email', 'password'],
    sendTokenSuccess: ['data'],
    sendTokenFailure: ['errorMessage'],
    refreshToken: ['token'],
    refreshTokenSuccess: ['data'],
    refreshTokenFailure: ['errorMessage'],
    rehydrationComplete: null,
    updateAppState: ['appState'],
    updateFirstLaunch: null,
    enterBackground: null,
    tokenRefresh: ['access_token']
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const stepOneInitialData = {
    email: '',
    username: '',
    password: '',
}
export const INITIAL_STATE = Immutable({
    registerEmailSuccess: null,
    registerPasswordSuccess: null,
    rehydrated: false,
    registered: false,
    isLoading: false,
    access_token: null,
    userInfo: null,
    languageCode: null,
    isFirstTimeAppLaunch: true,
    userId: null,
    errorMessage: null,
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

export const registerEmail = (state) =>
    state.merge({ isLoading: true, registerEmailSuccess: null })

export const registerEmailSuccess = (state, { data }) =>
    state.merge({ isLoading: false, registerEmailSuccess: true })

export const registerEmailFailure = (state, { errorMessage }) =>
    state.merge({ isLoading: false, registerEmailSuccess: false, errorMessage })

export const registerPassword = (state) =>
    state.merge({ isLoading: true, registerPasswordSuccess: null })

export const registerPasswordSuccess = (state, { userId, data }) =>
    state.merge({ isLoading: false, registerPasswordSuccess: true })

export const registerPasswordFailure = (state, { errorMessage }) =>
    state.merge({ isLoading: false, registerPasswordSuccess: false, errorMessage })

export const verifyEmail = (state) =>
    state.merge({ isLoading: true, verifyEmailSuccess: null })

export const verifyEmailSuccess = (state, { userId, data }) =>
    state.merge({ isLoading: false, verifyEmailSuccess: true })

export const verifyEmailFailure = (state, { errorMessage }) =>
    state.merge({ isLoading: false, verifyEmailSuccess: false, errorMessage })

export const sendToken = (state) =>
    state.merge({ isLoading: true, sendTokenSuccess: null })

export const sendTokenSuccess = (state, { userId, data }) =>
    state.merge({ isLoading: false, sendTokenSuccess: true })

export const sendTokenFailure = (state, { errorMessage }) =>
    state.merge({ isLoading: false, sendTokenSuccess: false, errorMessage })

export const refreshToken = (state) =>
    state.merge({ isLoading: true, refreshTokenSuccess: null })

export const refreshTokenSuccess = (state, { userId, data }) =>
    state.merge({ isLoading: false, refreshTokenSuccess: true })

export const refreshTokenFailure = (state, { errorMessage }) =>
    state.merge({ isLoading: false, refreshTokenSuccess: false, errorMessage })

export const updateFirstLaunch = (state) =>
    state.merge({ isFirstTimeAppLaunch: false })

export const updateAppState = (state, { appState }) => {
    if (appState == 'inactive' || appState == 'background') {
        return state.merge({ appState })
    } else {
        return state.merge({ appState })
    }
}


export const enterBackground = (state) =>
    state.merge({})

export const tokenRefresh = (state, { access_token }) =>
    state.merge({ access_token })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.REHYDRATION_COMPLETE]: rehydrationComplete,
    [Types.REGISTER_EMAIL]: registerEmail,
    [Types.REGISTER_EMAIL_SUCCESS]: registerEmailSuccess,
    [Types.REGISTER_EMAIL_FAILURE]: registerEmailFailure,
    [Types.REGISTER_PASSWORD]: registerPassword,
    [Types.REGISTER_PASSWORD_SUCCESS]: registerPasswordSuccess,
    [Types.REGISTER_PASSWORD_FAILURE]: registerPasswordFailure,
    [Types.VERIFY_EMAIL]: verifyEmail,
    [Types.VERIFY_EMAIL_SUCCESS]: verifyEmailSuccess,
    [Types.VERIFY_EMAIL_FAILURE]: verifyEmailFailure,
    [Types.SEND_TOKEN]: sendToken,
    [Types.SEND_TOKEN_SUCCESS]: sendTokenSuccess,
    [Types.SEND_TOKEN_FAILURE]: sendTokenFailure,
    [Types.REFRESH_TOKEN]: refreshToken,
    [Types.REFRESH_TOKEN_SUCCESS]: refreshTokenSuccess,
    [Types.REFRESH_TOKEN_FAILURE]: refreshTokenFailure,
    [Types.ENTER_BACKGROUND]: enterBackground,
    [Types.UPDATE_FIRST_LAUNCH]: updateFirstLaunch,
    [Types.TOKEN_REFRESH]: tokenRefresh
})
