// 'use strict';
// // подхходы к созданию модулей

// // 1) самовызываюащяся функция
// const num = 1;

// (function () {
//     let num = 2;
//     console.log(num);
//     console.log(num + 3);
// }());

// console.log(num);

// //2) Объектный интерфейс

// const user = (function () {
//     const privat = function () {
//         console.log('I am privat massage');
//     };
//     return {
//         sayHello: privat
//     };
// }());

// user.sayHello();