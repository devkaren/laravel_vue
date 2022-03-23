import axios from 'axios'
import { getToken, unsetToken } from '@/configs/axios/token'

/**
 * @returns {AxiosInstance}
 */
export const getInstance = () => {
    // const apiToken = getToken()

    const axiosInstance = axios.create({
        headers: {
            'Accept': 'application/json',
        },
        'default': {
            withCredentials: true
        }
    })

    //  axiosInstance.interceptors.response.use((r) => r, async ({ response }) => {
    //     if (response.status === 401) {
    //         unsetToken()
    //         return response
    //     }
    //      return response
    // })

    return axiosInstance
}

export const CsrfInstance = axios.create({
    baseURL: import.meta.env.VITE_API_CSRF,
    headers: {
        'Accept': 'application/json',
    }
})
