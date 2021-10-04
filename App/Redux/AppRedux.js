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
    updateAppState: ['appState'],
    changeLanguage: ['languageCode'],
    signOut: null,
    signOutSuccess: null,
    enterBackground: null,
    updateFirstLaunch: null,
    updateFirstSignIn: null,
    updateColorScheme: ['scheme'],
    manuallyChanged: ['manuallyChanged'],
    updateStepOneData: ['value'],
    updateProfile: ['data'],
    updateProfileSuccess: ['data'],
    updateProfileFailure: null,
    getProfile: [],
    getProfileSuccess: ['data'],
    getProfileFailure: null,
    uploadImage: ['file', 'imageType'],
    uploadImageSuccess: null,
    uploadImageFailure: null,
    byPassProfileValidation: null,
    acceptAgreement: null,
    notificationEnable: ['isEnabled'],
    tokenRefresh: ['access_token']
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const stepOneInitialData = {
    first: '',
    middle: '',
    last: '',
    address: '',
    maritalStatus: 'Unspecified',
    unit: '',
    city: '',
    state: '',
    country: '',
    countryCode: 'US',
    zipcode: '',
    employeerName: '',
    workPhone: '',
    workEmail: ''
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
    isManuallyChangeScheme: false,
    stepOneData: stepOneInitialData,
    profileUpdated: null,
    imageUploaded: null,
    fileUploaded: null,
    userId: null,
    errorMessage: null,
    profileData: null,
    stepOneDataSuccess: null,
    notificationEnabled: false
})

/* ------------- Selectors ------------- */

export const AppSelectors = {
    isSignedIn: state => state.app.signedIn,
    getAccessToken: state => state.app.access_token,
    getAppLanguage: state => state.app.languageCode,
    getUserId: state => state.app.userId
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

export const changeLanguage = (state, { languageCode }) =>
    state.merge({ languageCode })

export const updateAppState = (state, { appState }) => {
    if (appState == 'inactive' || appState == 'background') {
        return state.merge({ appState })
    } else {
        return state.merge({ appState })
    }
}
export const signOutSuccess = (state) =>
    state.merge({ signedIn: false, access_token: null, profileData: null, stepOneData: stepOneInitialData, isLoading: false })

export const enterBackground = (state) =>
    state.merge({})

export const updateFirstLaunch = (state) =>
    state.merge({ isFirstTimeAppLaunch: false })

export const updateFirstSignIn = (state) =>
    state.merge({ isFirstTimeSignedIn: false })

export const updateColorScheme = (state, { scheme }) =>
    state.merge({ colorScheme: scheme })

export const manuallyChanged = (state, { manuallyChanged }) =>
    state.merge({ isManuallyChangeScheme: manuallyChanged })

export const updateStepOneData = (state, { value }) =>
    state.merge({ stepOneData: { ...state.stepOneData, ...value } })

export const updateProfile = (state) =>
    state.merge({ isLoading: true, profileUpdated: null })

export const updateProfileSuccess = (state, { data }) =>
    state.merge({ isLoading: false, profileUpdated: true, profileData: data })

export const updateProfileFailure = (state) =>
    state.merge({ isLoading: false, profileUpdated: false })

export const uploadImage = (state) =>
    state.merge({ isLoading: true, imageUploaded: null })

export const uploadImageSuccess = (state) =>
    state.merge({ isLoading: false, imageUploaded: true })

export const uploadImageFailure = (state) =>
    state.merge({ isLoading: false, imageUploaded: false })

export const getProfile = (state) =>
    state.merge({ isLoading: true })

export const getProfileSuccess = (state, { data }) =>
    state.merge({ isLoading: false, profileData: data })

export const getProfileFailure = (state) =>
    state.merge({ isLoading: false, })

export const byPassProfileValidation = (state) =>
    state.merge({ profileData: { ...state.profileData, validated: true } });

export const acceptAgreement = (state) =>
    state.merge({ profileData: { ...state.profileData, license_agreement: true } })

export const notificationEnable = (state, { isEnabled }) =>
    state.merge({ notificationEnabled: isEnabled })

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
    [Types.CHANGE_LANGUAGE]: changeLanguage,
    [Types.UPDATE_APP_STATE]: updateAppState,
    [Types.SIGN_OUT_SUCCESS]: signOutSuccess,
    [Types.ENTER_BACKGROUND]: enterBackground,
    [Types.UPDATE_FIRST_LAUNCH]: updateFirstLaunch,
    [Types.UPDATE_FIRST_SIGN_IN]: updateFirstSignIn,
    [Types.UPDATE_COLOR_SCHEME]: updateColorScheme,
    [Types.UPDATE_STEP_ONE_DATA]: updateStepOneData,
    [Types.UPDATE_PROFILE]: updateProfile,
    [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
    [Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
    [Types.UPLOAD_IMAGE]: uploadImage,
    [Types.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
    [Types.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,
    [Types.GET_PROFILE]: getProfile,
    [Types.GET_PROFILE_SUCCESS]: getProfileSuccess,
    [Types.GET_PROFILE_FAILURE]: getProfileFailure,
    [Types.BY_PASS_PROFILE_VALIDATION]: byPassProfileValidation,
    [Types.MANUALLY_CHANGED]: manuallyChanged,
    [Types.ACCEPT_AGREEMENT]: acceptAgreement,
    [Types.NOTIFICATION_ENABLE]: notificationEnable,
    [Types.TOKEN_REFRESH]: tokenRefresh
})
