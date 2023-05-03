let montaña = document.getElementById('montaña')
let nubes = document.getElementById('nubes')
let pamera1 = document.getElementById('palmera1')
let pamera2 = document.getElementById('palmera2')

window.addEventListener('scroll', function(){

    let value = window.scrollY;

    montaña.style.top = value* 0.5 + 'px';
    palmera1.style.left = value* -0.5 + 'px';
    palmera2.style.left = value* 0.5 + 'px';
    nubes.style.top = value* 0.5 + 'px';
})