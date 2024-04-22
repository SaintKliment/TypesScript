export default {};

type TUser = {
    id: number,
    login: string,

}

type TAdminUser = TUser & {
    type: 'admin',
    accessLevel: number,
}
type TManagerUser = TUser & {
    type: 'manager',
    accessLevel: number,
    roles: string[],
}
type TClientUser = TUser & {
    type: 'client',
}

function loadUser(): TAdminUser | TClientUser | TManagerUser  {
    return {
        type: 'admin',
        id: 1,
        login: 'some',
        accessLevel: 5,
    }
}

// let u1: TAdminUser | TClientUser = {
//     id: 1,
//     login: 'some',
//     accessLevel: 5,
// }
// u1.accessLevel

let u1 = loadUser()
if(u1.type === 'admin'){
    u1
}