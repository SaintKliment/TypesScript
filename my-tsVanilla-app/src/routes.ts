export default {}

type Component =  () => string;

type RouteRecordBase= {
    path: string,
    
}

type RouteRecordComponents = RouteRecordBase & {
    component: () => string,
    children?: RouteRecord[],
    redirect?: never,
}

type RouteRecordRedirect = RouteRecordBase & {
    redirect: string,
    component?: never,
    children?: never,
}

type RouteRecord = RouteRecordComponents | RouteRecordRedirect;

const createRouter(routes: RouteRecord[]){
    routes
}

createRouter([
    {
        type: "component",
        path: '/',
        component: () => 'home page',
    },
    {
        type: "redirect",
        path: '/old',
        redirect: '/',
        component: () => 'home old',
    },
    {
        type: "redirect",
        path: '/products',
        redirect: '/catalog',
        // children: [
        //     {
        //         path: '/',
        //         component: () => '1',
        //     }
        // ]
    }
])