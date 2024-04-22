export default {}

const a: string = 'asd';
const b: number = 2;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: object = {};

const g: Number = 1;
const j: Date = new Date();
const i: RegExp = /.*/;

const n: false = false;
const k: 1 = 1;
const o: 'admin' = 'admin';

// const p: never = 1;

// function throwNoteAuthError(): never{
//         throw new Error();
// }

[a, b, c, d, e, f, g, i];

console.log(typeof(j));
console.log(j instanceof Date);

type TSumFn = (x:number, y: number) => number;

const sum: TSumFn = (x:number, y: number): number => {
        return x + y;
}

// sum('a', 2, 5)

// function sum(x:number, y: number): number {
//     return x + y
// }

// class Math

// type TUser = {
//     id: number,
//     name: string,
// }
// const admin: TUser = {
//     id: 1,
//     name: 'zhenya',
// }

// class User implements TUser{

// }

// console.log(typeof(admin))
// console.log(admin instanceof TUser)

class AsyncMath{
        x:number;
        y:number;

        constructor(x:number, y:number) {
                this.x = x;
                this.y = y;
        }

        sum(onDone: (result: number) => void){
                setTimeout(() => {
                        onDone(this.x + this.y)
                }, 200);
        }
}

const m1 = new AsyncMath(10, 20);
m1.sum(x => {console.log(x)});