"use strict";


const updateName = () => {
    const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');
    let name = input.value.trim();

    if (name === '') {
        name = 'Anonymous';
    }
    output.textContent = name;
}

document.getElementById('name-input').addEventListener('input', updateName);