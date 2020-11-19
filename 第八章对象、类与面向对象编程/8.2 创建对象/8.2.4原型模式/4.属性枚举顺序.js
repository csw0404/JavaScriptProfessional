let k1 = Symbol('k1'),
    k2 = Symbol('k2');

let o = {
    1: 1,
    first: 'first',
    [k1]: 'sym2',
    second: 'second',
    0: 0
};
o[k2] = 'sym2';
o[3] = '3';
o.third = 'third';
o[2] = 2;
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));
