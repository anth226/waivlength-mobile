import apisauce from 'apisauce'
import BASE_URL, { API_VERSION_1, APIs } from '../Constants/api'
import { addParam } from '../Utils/UrlUtils'

const create = (baseURL = BASE_URL) => {
    const api = apisauce.create({
        baseURL: `${baseURL}`,
        timeout: 60000
    })


    const registerEmail = (data, headers) => {
        return api.post(`${API_VERSION_1}${APIs.registerEmail}`, data, { headers })
    }

    const registerPassword = (data, headers) => {
        return api.post(`${API_VERSION_1}${APIs.registerPassword}`, data, { headers })
    }

    const verifyEmail = (data, headers) => {
        return api.post(`${API_VERSION_1}${APIs.verifyEmail}`, data, { headers })
    }

    const sendToken = (data, headers) => {
        return api.post(`${API_VERSION_1}${APIs.sendToken}`, data, { headers })
    }

    const refreshToken = (data, headers) => {
        return api.post(`${API_VERSION_1}${APIs.refreshToken}`, data, { headers })
    }

    return {
        registerEmail,
        registerPassword,
        verifyEmail,
        sendToken,
        refreshToken
    }
}

export default {
    create
}