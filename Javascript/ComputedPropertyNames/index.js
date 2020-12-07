/*
    Computed Property Names
*/

function createObjWithProperties(p1, p2, p3){
    return {
        [p1]: 'Daniel',
        [p2]: 'Maietta',
        [p3]: 25
    }
}

console.log(createObjWithProperties('firstName','lastName','age'))