import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import ResetPassword from '@/pages/auth/ResetPassword'
import ForgotPassword from '@/pages/auth/ForgotPassword'

export default [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {
            title: 'Vite - Login',
            auth: false
        }
    },
    {
        path: '/register',
        name:'Register',
        component: Register,
        meta: {
            title: 'Vite - Sign Up',
            auth: false
        }
    },
    {
        path: '/reset-password',
        name:'Reset-Password',
        component: ResetPassword,
        meta: {
            title: 'Vite - Reset Password',
            auth: false
        }
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        meta: {
            title: 'Vite - Forgot Password',
            auth: false
        }
    },
];
