import {
    all,
    call,
    fork,
    put,
    select,
    delay
} from 'redux-saga/effects'
import AppActions, { AppSelectors } from '../Redux/AppRedux'

// process STARTUP actions
export function* startup(action) {
    const appLanguage = yield select(AppSelectors.getAppLanguage)
    if (appLanguage) {
        // yield put(AppActions.changeLanguage(appLanguage))
    }
    const isSignedIn = yield select(AppSelectors.isSignedIn)
    if (isSignedIn) {
        yield put(AppActions.getProfile())
    } else {
        yield put(AppActions.rehydrationComplete())
    }
}
