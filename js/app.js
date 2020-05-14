const button = document.querySelector('.hamburger');
const list = document.querySelector('.menu');
const mobile = window.matchMedia("screen and (max-width:768px");
console.log(button);
console.log(list);

if (mobile.matches) {
    // list.style.display = 'none';
    button.style.display = 'block';
} else {
    // list.style.display = 'block';
    button.style.display = 'none';
}

mobile.addListener(function (mobile) {
    if (mobile.matches) {
        // list.style.display = 'none';
        button.style.display = 'block';
    } else {
        // list.style.display = 'block';
        button.style.display = 'none';
    }
});

// button.addEventListener('click', function () {
//     if (list.style.display == 'block') {
//         list.style.display = 'none';
//         button.classList.remove('active');
//     } else {
//         list.style.display = 'block';
//         button.classList.add('active');
//     }
// });
button.addEventListener('click', function () {
    button.classList.toggle('active');
    list.classList.toggle('show');
});