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

export function* signup(api, action) {
    const { email, password, code } = action

}

export function* logOut(api) {
    yield put(AppActions.signOutSuccess())
}