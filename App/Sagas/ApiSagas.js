import {
    all,
    call,
    put,
    retry,
    select,
} from 'redux-saga/effects'
import qs from 'querystringify'
import AppActions, { AppSelectors } from '../Redux/AppRedux'

const selectAccessToken = AppSelectors.getAccessToken
const getUserId = AppSelectors.getUserId

function* getHeader() {
    const headers = {
        'charset': 'utf-8'
    }
    const accessToken = yield call(selectAccessToken)
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }
    return headers
}

function* onError(response, action) {
    if (response.status == 401 || response.status == 403) {
        yield put(AppActions.signOut())
        yield put(action)
    } else if (response.status == 503) {
    } else if (action) {
        yield put(action)
    }
}

function* callApi(apiRequest, params, headers) {
    const response = yield call(apiRequest, params, headers)
    if (response.status == 500 || response.status == 504) {
        throw response
    }
    return response
}

function* retrySaga(apiRequest, params, headers) {
    try {
        return yield retry(3, 0, callApi, apiRequest, params, headers)
    } catch (response) {
        return response
    }
}

export function* login(api, action) {
    const { username, password } = action
    const response = yield call(firebaseAuth, username, password)
    if (response && response.user) {
        let tokenId = yield response.user.getIdToken()
        const headers = {
            'Authorization': `Bearer ${tokenId}`,
        }
        const statusRes = yield call(retrySaga, api.status, headers)
        console.log(statusRes)
        if (statusRes.ok && statusRes.data.OK) {
            const profileRef = yield call(retrySaga, api.getProfile, headers)
            yield put(AppActions.loginSuccess(tokenId, response.user.uid, profileRef.data.profile))
        } else {
            yield put(AppActions.loginFailure(response && response.data && response.data.error ? `${response.data.error} + ${response.data.message}` : ''))
        }
    } else {
        yield put(AppActions.loginFailure(response && response.code ? `${response.message} + ${response.code}` : ''))
    }
}

export function* signup(api, action) {
    const { email, password, code } = action
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("code", code);
    let headers = yield call(getHeader)
    const response = yield call(retrySaga, api.signup, formData, headers)
    console.log(response)
    if (response.ok && response.data.OK) {
        const fbRes = yield call(firebaseAuth, email, password)
        if (fbRes && fbRes.user) {
            let tokenId = yield fbRes.user.getIdToken()
            yield put(AppActions.signupSuccess(tokenId, response.data.profile.user_uid, response.data.profile))
        } else {
            yield put(AppActions.signupFailure(response && response.data && response.data.error ? `${response.data.error} + ${response.data.message}` : ''))
        }
    } else {
        yield put(AppActions.signupFailure(response && response.data && response.data.error ? `${response.data.error} + ${response.data.message}` : ''))
    }

}

export function* logOut(api) {
    yield put(AppActions.signOutSuccess())
}