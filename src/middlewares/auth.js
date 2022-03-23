import { getToken, unsetToken, getCustomer, unsetCustomer } from '@/configs/axios/token'

export default async ({ next }) => {
    return !getCustomer() ? unsetCustomer() : next();
}