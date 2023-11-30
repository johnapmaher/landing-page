// Get the canvas element and context
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

// Set canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the matrix text
const characters = "01";
const charactersArray = characters.split("");

// Matrix text settings
const fontSize = 14;
const columns = canvas.width / fontSize;
const matrix = [];

// Initialize the matrix with random characters
for (let i = 0; i < columns; i++) {
    matrix[i] = Math.floor(Math.random() * charactersArray.length);
}

// Function to draw the matrix text
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0f0"; // Matrix text color
    ctx.font = `${fontSize}px monospace`;

    matrix.forEach((value, index) => {
        const text = charactersArray[value];
        ctx.fillText(text, index * fontSize, value * fontSize);
        
        // Randomly reset characters to create animation
        if (Math.random() > 0.95) {
            matrix[index] = Math.floor(Math.random() * charactersArray.length);
        }
    });
}

// Animation loop
function animate() {
    drawMatrix();
    requestAnimationFrame(animate);
}

// Start the animation
animate();
