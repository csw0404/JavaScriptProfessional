const sym = Symbol();
const o = {
    foo: 'bar',
    baz: 1,
    qux: {},
    [sym]: 'sym'
};

console.log(Object.values(o));
// [ 'bar', 1, {} ]
console.log(Object.entries(o));
// [ [ 'foo', 'bar' ], [ 'baz', 1 ], [ 'qux', {} ] ]

const o2 = {
    qux: {}
};
console.log(Object.values(o2)[0] === o2.qux);
console.log(Object.entries(o2)[0][1] === o2.qux);
