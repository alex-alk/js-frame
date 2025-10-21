const AppLayout = async () => (await import('./AppLayout.js')).AppLayout
import Router from '../../js_modules/Router.js'

// Lazy load
const Dashboard = async () => (await import('../Dashboard.js')).Dashboard


const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '/', component: Dashboard }
        ]
    },
    //{ path: '/about', component: About }
]

// Change this to your app's base path, e.g. '/app' or '/' if root
const BASE_PATH = '/PHP/js-frame/public';

export function path(projectPath) {
    return BASE_PATH + projectPath
}

// Instantiate and start router
export const router = new Router(routes, BASE_PATH);
window.addEventListener('DOMContentLoaded', () => {
    router.start();
});
