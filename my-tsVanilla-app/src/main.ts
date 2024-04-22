export default {}

const app = document.querySelector('#app')!;

// или вместо ! поставить условие, как ниже пример
// if(app){
//         app.innerHTML = 'Hello, World';
// }

// const a = document.getElementsByTagName('a')![0];
// a.href = '1'

// const a = <HTMLAnchorElement>document.querySelector('a');
// const a = document.querySelector('a') as HTMLAnchorElement;
const a = document.querySelector('.logoLink')

if (a instanceof HTMLAnchorElement){
        a
}