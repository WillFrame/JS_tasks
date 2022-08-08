const massive = [
    { foo: 5, bar: 13 },
    { foo: 13, baz: 4 }
];

function zip(massive) {
    let outpuObject = {};

    for (const obj of massive) {
        for (const i in obj) {
            if (!outpuObject[i]) {
                outpuObject[i] = obj[i];
            }
        }
    }

    console.log(outpuObject);
}

zip(massive);