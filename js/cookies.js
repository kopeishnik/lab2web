let save_cookies = false;

if (document.cookie.length > 0) {
    save_cookies = confirm('Cookies content is ' + document.cookie + '. Save cookies?');
} else {
    let form5val = document.getElementById('form-5').value;
    let min = Math.min(...form5val.split(''));
    setCookie('min', min);
    alert('Got new cookie: ' + document.cookie);
    save_cookies = true;
}

if (save_cookies) {
    alert(
            'There are some cookies here: ' + document.cookie + '. You should reload page!',
    );
    let form5val = document.getElementById('form-5').value;
    let min = Math.min(...form5val.split(''));
    setCookie('min', min);
} else {
    document.location.reload();
    let somestr = prompt('Enter something instead of current cookie:');
    if (somestr != null) setCookie('min', somestr);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
