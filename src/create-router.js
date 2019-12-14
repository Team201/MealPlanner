import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'
import loggerPlugin from 'router5-plugin-logger'
import routers from './routes'

export default function configureRouter() {
    const router = createRouter(routers, {
        defaultRoute: 'home'
    })

    router.usePlugin(loggerPlugin)
    router.usePlugin(
        browserPlugin({
            useHash: true
        })
    )

    return router
}