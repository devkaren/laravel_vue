import { createRouter, createWebHistory } from 'vue-router'
import auth from './routes/auth'
import dashboard from './routes/dashboard'
import payment from './routes/payment'
import profile from './routes/profile'
import support from './routes/support'
import announcements from './routes/announcements'
import service from './routes/service'

const routes = [
    ...auth,
    ...dashboard,
    ...profile,
    ...payment,
    ...support,
    ...announcements,
    ...service
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index]

    if (!subsequentMiddleware) return context.next

    return (...parameters) => {

        context.next(...parameters)

        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({next: nextMiddleware})
    }
}

router.beforeEach((to, from, next) => {
    if (!to.meta.auth && to.fullPath === '/') {
        return next({ path: '/login' })
    }

    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
        const context = { from, next, router, to }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next()
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

    if (!nearestWithMeta) return next()

    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta')

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key])
        })

        tag.setAttribute('data-vue-router-controlled', '')

        return tag
    })
        .forEach(tag => document.head.appendChild(tag))

    next()
})

export default router
