document.addEventListener('DOMContentLoaded', function() { // makes sure the script runs after HTML loads
    // Intro Animation
    let intro = document.querySelector('.intro');
    let introEl = document.querySelectorAll('.intro-el');
    let introHead = document.querySelectorAll('.intro-header');

    setTimeout(() => { // overall animation
        introEl.forEach((span, idx) => { // entrance
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400); // Add 1 for zero index and 400 ms to delay the entrance of each element
        });

        setTimeout(() => {
            introEl.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });
});