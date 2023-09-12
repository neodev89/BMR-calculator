function test(a){
    a.forEach(element => {
        console.log(element);
    });
}

const testFunc = (a) => {
    if (a != '') {
        console.log(a)
    } else {
        console.log('this element not working!')
    }
}

export {test, testFunc};