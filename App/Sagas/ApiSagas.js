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

}

export function* registerEmail(api, action) {
    const { email, username } = action
    let data = {
        "email": email,
        "username": username
    }
    const response = yield call(retrySaga, api.registerEmail, data)
    console.log('registerEmailApiSaga', response)
    if (response && response.ok) {
        yield put(AppActions.registerEmailSuccess(response.data))
    } else {
        yield put(AppActions.registerEmailFailure(response?.data?.message ?? "Something went wrong"))
    }
}

export function* verifyEmail(api, action) {
    const { email, token } = action
    let data = {
        "email": email,
        "token": token
    }
    const response = yield call(retrySaga, api.verifyEmail, data)
    console.log('verifyEmailApiSaga', response)
    if (response && response.ok) {
        yield put(AppActions.verifyEmailSuccess(response.data))
    } else {
        yield put(AppActions.verifyEmailFailure(response?.data?.message ?? "Something went wrong"))
    }
}
export function* registerPassword(api, action) {
    const { email, password } = action
    let data = {
        "email": email,
        "password": password
    }
    const response = yield call(retrySaga, api.registerPassword, data)
    console.log('registerPasswordApiSaga', response)
    if (response && response.ok) {
        yield put(AppActions.registerPasswordSuccess(response.data))
    } else {
        yield put(AppActions.registerPasswordFailure(response?.data?.message ?? "Something went wrong"))
    }
}


export function* sendToken(api, action) {
    const { username, email, password } = action
    let data = {
        "username": username,
        "email": email,
        "password": password
    }
    const response = yield call(retrySaga, api.sendToken, data)
    console.log('sendTokenApiSaga', response)
    if (response && response.ok) {
        yield put(AppActions.sendTokenSuccess(response.data))
    } else {
        yield put(AppActions.sendTokenFailure(response?.data?.message ?? "Something went wrong"))
    }
}

export function* refreshToken(api, action) {
    const { token } = action
    let data = {
        "token": token
    }
    const response = yield call(retrySaga, api.refreshToken, data)
    console.log('refreshTokenApiSaga', response)
    if (response && response.ok) {
        yield put(AppActions.refreshTokenSuccess(response.data))
    } else {
        yield put(AppActions.refreshTokenFailure(response?.data?.message ?? "Something went wrong"))
    }
}
