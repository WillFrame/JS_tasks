const object = { 'a': '1', 'b': '2', 'c': '3' };

function invert(obj1) {
    let obj2 = {};

    for (const i in obj1) {
        obj2[obj1[i]] = i;
    }

    return obj2
}

console.log(invert(object));

// Object.values()
// Object.entries().
// for of