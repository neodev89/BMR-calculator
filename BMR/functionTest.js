function testHAndB(Input) {
    if(Input.value == '') {
        Input.style.backgroundColor = 'red';
    } else {
        Input.style.backgroundColor = 'initial';
    }
}

function emptyInput(...args) {
    [...args].value = '';
}

function initialRoles(Input) {
    Input.style.backgroundColor = 'initial';
}

export {testHAndB, emptyInput, initialRoles};