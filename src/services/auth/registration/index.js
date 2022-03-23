import { getInstance } from '@/configs/axios'
import { CSRFRequest } from '@/services/auth/csrf'

/**
 *
 * @param {RegistrationInterface}form
 * @returns {Promise<any>}
 */
export const fetchUserRegistration = async (form) => {
    await CSRFRequest();
    return await getInstance().post('/api/customer/v1/auth/register', { ...form })
        .catch(function (error) {
            return error.response
        })
}