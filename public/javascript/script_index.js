document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    const introSpan = document.querySelectorAll('.intro-el, .intro-image');

    introSpan.forEach((span, idx) => {
        // Delayed entrance for each element
        setTimeout(() => { 
            span.classList.add('active'); 
        }, (idx + 1) * 400);});

    // Exit at the same time
    setTimeout(() => {
        introSpan.forEach(span => {
            span.classList.remove('active');
            span.classList.add('fade');
        });
    }, 2000); // Adjust this timeout to control when the exit starts

    // Move intro upwards
    setTimeout(() => { intro.style.top = '-100vh'; }, 2300);
});




