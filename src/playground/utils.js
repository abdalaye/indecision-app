console.log('Util.js is running !');

export const square = (x) => x*x;
export const add = (a, b) => a+b;

// const subtract = (a, b) => a - b;

export default (a, b) => a - b;

//export default à ne pas mettre dans les accolades à l'import
// export { square, add, subtract as default };