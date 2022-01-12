localstorage = window.localStorage;

let color6 = localStorage.getItem('color');

let block6 = document.getElementById('block-6');

if (isColor(color6)) {
    block6.style.color = color6;
    const log = document.getElementById('log');
    log.textContent = `You selected previously: ${color6}.`;
} else {
    block6.style.color = "black";
}

let lastSelectedColor = '';

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}.`;
    if (isColor(selection)) {
        block6.style.color = selection;
        lastSelectedColor = selection;
    } else {
        log.textContent += ' Its not a color!';
    }
}

const input = document.getElementById('clrs');
input.addEventListener('select', logSelection);

let clear = document.getElementById('clear-button');
clear.addEventListener('click', clearStorageButtonEventHandler);

let save = document.getElementById('save-button');
save.addEventListener('click', saveButtonEventHandler);

function saveButtonEventHandler() {
    if (isColor(lastSelectedColor)) {
      localStorage.setItem('color', lastSelectedColor);
    }
  }

function clearStorageButtonEventHandler() {
    localStorage.removeItem('color');
}

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    var test1 = s.color == strColor;
    var test2 = /^#[0-9A-F]{6}$/i.test(strColor);
    if(test1 == true || test2 == true){
      return true;
    } else{
      return false;
    }
  }