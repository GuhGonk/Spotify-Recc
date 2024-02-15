// Load after HTML is loaded
document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    const introElements = document.querySelectorAll('.intro-el, .intro-image');

    // Reset intro elements to default
    resetIntroElements(introElements);

    // Check if the animation has already been played in the session
    if (!sessionStorage.getItem('animationPlayed')) {
        playIntro(introElements);
        sessionStorage.setItem('animationPlayed', 'true');
    } else {
        // If the animation has played, immediately move the intro out of view without animation
        intro.style.transition = "none"; // Disable the transition to move it out of view instantly
        intro.style.top = "-100vh";
        intro.style.opacity = "0";
    }
});

function playIntro(introElements) {
    const intro = document.querySelector('.intro');

    introElements.forEach((element, idx) => {
        // Delayed entrance for each element
        setTimeout(() => {
            element.classList.add('active');
        }, (idx + 1) * 400); // Adds 'active' class with delay
    });

    // Exit at the same time
    setTimeout(() => {
        introElements.forEach(element => {
            element.classList.remove('active');
            element.classList.add('fade');
        });
    }, 2000); // Adjust this timeout to control when the exit starts

    // Move intro upwards
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300); // This should be after the fade effect begins
};

function resetIntroElements(elements) {
    elements.forEach(element => {
        element.style.opacity = "1"; // Make elements visible
    });
};




