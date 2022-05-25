let btns = document.querySelectorAll('.numbers > button');
let screen2 = document.getElementById('thank-you');
let screen1 = document.getElementById('screen-1');
let span = document.querySelector('span');

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e =>{
        const raiting = e.target.textContent;
        span.textContent = raiting;
        screen2.classList.remove('hide');
        screen1.classList.add('hide')
    })
})
