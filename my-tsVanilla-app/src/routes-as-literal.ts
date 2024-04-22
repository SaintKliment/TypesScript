export default {}

type Component =  () => string;

type RouteRecordBase= {
    path: string,
}

type RouteRecordComponent = RouteRecordBase & {
    type: 'component',
    component: () => string,
    children?: RouteRecord[]
}

type RouteRecordRedirect = RouteRecordBase & {
    type: 'redirect',
    redirect: string,
}

type RouteRecord = RouteRecordComponent | RouteRecordRedirect;

// const createRouter(routes: RouteRecord[]){
//     routes
// }

// createRouter([
//     {
//         type: "component",
//         path: '/',
//         component: () => 'home page',
//     },
//     {
//         type: "redirect",
//         path: '/old',
//         redirect: '/',
//         // component: () => 'home old',
//     },
//     {
//         type: "redirect",
//         path: '/products',
//         redirect: '/catalog',
//         // children: [
//         //     {
//         //         path: '/',
//         //         component: () => '1',
//         //     }
//         // ]
//     }
// ])