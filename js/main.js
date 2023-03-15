const btn = document.querySelector('.toggle-nav');

btn.addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('show-nav');
});