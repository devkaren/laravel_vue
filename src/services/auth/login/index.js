import { getInstance } from '@/configs/axios'
import { CSRFRequest } from '@/services/auth/csrf'
/**
 *
 * @param {LoginInterface}form
 * @returns {Promise<any>}
 */
export const fetchUserLogin = async (form) => {
    await CSRFRequest();
    return await getInstance().post('/api/customer/v1/auth/login', { ...form })
        .catch(function (error) {
                return error.response
            })
}

/**
 *
 * @returns {Promise<any>}
 */
export const fetchUserLogOut = async () => {
    await CSRFRequest()
    return await getInstance().post('/api/customer/v1/auth/logout')
}

/**
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
export const fetchRefreshToken = async () => {
    return await getInstance().get('refresh');
}
