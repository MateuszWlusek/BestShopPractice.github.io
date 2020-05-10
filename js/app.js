const button = document.querySelector('.hamburger i');
const list = document.querySelector('.menu');
const mobile = window.matchMedia("screen and (max-width:768px");
console.log(button);
console.log(list);

if (mobile.matches) {
    list.style.display = 'none';
    button.style.display = 'block';
} else {
    list.style.display = 'block';
    button.style.display = 'none';
}

mobile.addListener(function (mobile) {
    if (mobile.matches) {
        list.style.display = 'none';
        button.style.display = 'block';
    } else {
        list.style.display = 'block';
        button.style.display = 'none';
    }
});

button.addEventListener('click', function () {
    if (list.style.display == 'block') {
        list.style.display = 'none';
        button.className = 'fas fa-bars';
    } else {
        list.style.display = 'block';
        button.className = 'fas fa-times';
    }
});