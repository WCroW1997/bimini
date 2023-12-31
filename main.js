let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.nav');
let lock = document.querySelector('body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    lock.classList.toggle('lock');
})

let wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

const btn = document.querySelector('.form__btn')


btn.addEventListener('click', e => {
    e.preventDefault()
    const form = document.querySelector('.form')
    form.style.display = 'none'

    const img = document.querySelector('.quotes__img')
    img.style.display = 'block'
    const text = document.querySelector('.quotes__desc')
    text.classList.add('quotes__desc_width')
    text.innerHTML = 'Your request has been received,  please wait to be contacted.'

})