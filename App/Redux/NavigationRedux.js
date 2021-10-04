import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    showMaintenance: null,
    forceUpdate: null,
    showError: ['errorType'],
    hideError: null,
    updatePeriod: ['period'],
    reset: null,
    showLoading: null,
    hideLoading: null,
    guestMode: null,
    signOut: null,
    setResumeAction: ['resumeAction'],
    signInSuccess: null,
})

export const NavigationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    homeTabs: [],
    learnTabs: [],
    maintMode: false,
    forceUpdate: false,
    showError: false,
    errorType: null,
})

/* ------------- Selectors ------------- */

export const NavigationSelectors = {
    guestMode: state => state.nav.guestMode,
}

/* ------------- Reducers ------------- */

export const showMaintenance = (state) =>
    state.merge({ maintMode: true })

export const forceUpdate = (state) =>
    state.merge({ forceUpdate: true })

export const showError = (state, { errorType }) =>
    state.merge({ showError: true, errorType })

export const hideError = (state) =>
    state.merge({ showError: false })

export const updatePeriod = (state, { period }) =>
    state.merge({ period })

export const reset = () => INITIAL_STATE

export const showLoading = (state) =>
    state.merge({ isLoading: true })

export const hideLoading = (state) =>
    state.merge({ isLoading: false })

export const guestMode = (state) =>
    state.merge({ guestMode: true })

export const setResumeAction = (state, { resumeAction }) =>
    state.merge({ resumeAction })

export const signInSuccess = (state) =>
    state.merge({ guestMode: false })

export const signOut = (state) =>
    state.merge(INITIAL_STATE)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_MAINTENANCE]: showMaintenance,
    [Types.FORCE_UPDATE]: forceUpdate,
    [Types.SHOW_ERROR]: showError,
    [Types.HIDE_ERROR]: hideError,
    [Types.UPDATE_PERIOD]: updatePeriod,
    [Types.RESET]: reset,
    [Types.SHOW_LOADING]: showLoading,
    [Types.HIDE_LOADING]: hideLoading,
    [Types.GUEST_MODE]: guestMode,
    [Types.SIGN_OUT]: signOut,
    [Types.SET_RESUME_ACTION]: setResumeAction,
    [Types.SIGN_IN_SUCCESS]: signInSuccess,
})
