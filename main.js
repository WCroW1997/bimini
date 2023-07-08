// function onEntry(entry) {
//     entry.forEach(change => {
//         if (change.isIntersecting) {
//             change.target.classList.add('animate__animated');
//         }
//     });
// }
// let options = { threshold: [1] };
// let observer = new IntersectionObserver(onEntry, options);
// let carts = document.querySelectorAll('.about__cart');
// let cartsImg = document.querySelectorAll('.cart__img');
// let cartsTitle = document.querySelectorAll('.cart__title');
// let cartsLine = document.querySelectorAll('.cart__line');
// let cartsDesc = document.querySelectorAll('.cart__desc');
// for (let elm of carts) {
//     observer.observe(elm);
// }
// for (let elm of cartsImg) {
//     observer.observe(elm);
// }
// for (let elm of cartsTitle) {
//     observer.observe(elm);
// }
// for (let elm of cartsLine) {
//     observer.observe(elm);
// }
// for (let elm of cartsDesc) {
//     observer.observe(elm);
// }

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