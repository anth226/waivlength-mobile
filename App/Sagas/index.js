import {
    all,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects'
import UserAPI from '../Services/UserAPI'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AppTypes } from '../Redux/AppRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import {
    registerEmail,
    registerPassword,
    verifyEmail,
    sendToken,
    refreshToken
} from './ApiSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
export const userApi = UserAPI.create()

/* ------------- Connect Types To Sagas ------------- */ 
export default function* root() {
    yield all([
        takeLatest(AppTypes.REGISTER_EMAIL, registerEmail, userApi),
        takeLatest(AppTypes.REGISTER_PASSWORD, registerPassword, userApi),
        takeLatest(AppTypes.VERIFY_EMAIL, verifyEmail, userApi),
        takeLatest(AppTypes.SEND_TOKEN, sendToken, userApi),
        takeLatest(AppTypes.REFRESH_TOKEN, refreshToken, userApi),
    ])
}
