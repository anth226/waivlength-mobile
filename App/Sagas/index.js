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
    login,
    forgotPassword,
    uploadImage,
    logOut,
    signup,
} from './ApiSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
export const userApi = UserAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        takeLatest(AppTypes.LOGIN, login, userApi),
        takeLatest(AppTypes.SIGNUP, signup, userApi),
        takeLatest(AppTypes.FORGOT_PASSWORD, forgotPassword, userApi),
        takeLatest(AppTypes.UPLOAD_IMAGE, uploadImage, userApi),

        takeLatest(AppTypes.SIGN_OUT, logOut, userApi),
    ])
}
