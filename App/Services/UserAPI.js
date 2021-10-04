import apisauce from 'apisauce'
import BASE_URL, { API_VERSION_1, APIs } from '../Constants/api'
import { addParam } from '../Utils/UrlUtils'

const create = (baseURL = BASE_URL) => {
    const api = apisauce.create({
        baseURL: `${baseURL}`,
        timeout: 60000
    })

    const logout = (data, headers) => {
        return api.post('/user/logout', data, { headers })
    }

    const signup = (data, headers) => {
        return api.post(`${API_VERSION_1}${APIs.signup}`, data, { headers })
    }

    return {
        logout,
        signup,
    }
}

export default {
    create
}