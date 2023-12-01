document.addEventListener("DOMContentLoaded", () => {
    // ... existing JavaScript ...

// Space Background Animation
const spaceCanvas = document.getElementById('spaceCanvas');
const ctx = spaceCanvas.getContext('2d');
spaceCanvas.width = window.innerWidth;
spaceCanvas.height = window.innerHeight;

let stars = [];
const numberOfStars = 200;

class Star {
    constructor(x, y, radius, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw();
        this.y += this.velocity;

        if (this.y > spaceCanvas.height) {
            this.y = 0;
            this.x = Math.random() * spaceCanvas.width;
        }
    }
}

const initStars = () => {
    stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        const x = Math.random() * spaceCanvas.width;
        const y = Math.random() * spaceCanvas.height;
        const radius = Math.random() * 1.5;
        const velocity = 1 + Math.random();
        stars.push(new Star(x, y, radius, velocity));
    }
};

const animateStars = () => {
    requestAnimationFrame(animateStars);
    ctx.clearRect(0, 0, spaceCanvas.width, spaceCanvas.height);
    stars.forEach(star => {
        star.update();
    });
};

window.addEventListener('resize', () => {
    spaceCanvas.width = window.innerWidth;
    spaceCanvas.height = window.innerHeight;
    initStars();
});

initStars();
animateStars();

// ... existing JavaScript ...

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
