document.addEventListener("DOMContentLoaded", () => {
    // Animate header text
    anime({
        targets: 'header h1',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200
    });

    // Feature box animations with delay
    anime({
        targets: '.feature',
        scale: [.5, 1],
        opacity: [0, 1],
        delay: anime.stagger(400, {start: 800}),
        easing: 'easeOutElastic',
        duration: 1000
    });

    // Pulsing effect on the main title
    anime({
        targets: '.intro h2',
        scale: [1, 1.1],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true,
        duration: 900
    });
     // Laser animations
     const laserAnimation = (selector) => {
        anime({
            targets: selector,
            translateY: [-1000, 1000], // Vertical movement
            easing: 'linear',
            loop: true,
            duration: 2000,
            delay: anime.random(0, 1000) // Random delay for each laser
        });
    };

    laserAnimation('#laser1');
    laserAnimation('#laser2');
    laserAnimation('#laser3');
});
