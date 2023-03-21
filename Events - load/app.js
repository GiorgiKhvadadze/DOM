

window.addEventListener('load', function() {
    console.log('I will run second');
    const img = document.querySelector('img')
    console.log(img);
    console.log(img.width);
})

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded I will run first');
    const img = document.querySelector('img')
    console.log(img);
    console.log(img.width);
})