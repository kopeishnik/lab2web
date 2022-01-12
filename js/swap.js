let left = document.getElementById('block-6');
let right = document.getElementById('toswap-1');

[left.innerHTML, right.innerHTML] = [right.innerHTML, left.innerHTML];

let swap = document.getElementById('swap-button');
swap.addEventListener('click', swaptext);

function swaptext() {
    let left = document.getElementById('block-6');
    let right = document.getElementById('toswap-1');
    [left.innerHTML, right.innerHTML] = [right.innerHTML, left.innerHTML];
}
