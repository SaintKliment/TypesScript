export default {}

type TUser = {
    id: number,
    email: string,
}

type TAdminUser = TUser & {
    role: string,
}

interface User{
    id: number,
    email: string,   
}
interface AdminUser extends User{
    role: string,
}

type A = string | number;

// type TAdminUser = {
//     some: string,
// }
// interface AdminUser{
//     some: string,
// }
// const a: AdminUser = {
//     id: 1,
//     email: 'ckiloven111@gmail.com',
//     role: 'admin',
//     some: 'blabla',
// }

// interface Window{
//     a: number[],
// }
// window.a