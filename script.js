// Admin check
function createOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; 
    overlay.style.zIndex = 9999;
    overlay.innerHTML = '<div id="countdown" style="color: #fff; font-size: 2rem; text-align: center; padding-top: 20%;"></div>';
    document.body.appendChild(overlay);

    // Countdown Timer
    const countdownDate = new Date("October 1, 2024 10:00:00 PDT").getTime();
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, remove the overlay
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("overlay").remove();
        }
    }, 1000);
}

// Overlay checker 
function overlayChecker() {
    setInterval(function () {
        if (!document.getElementById("overlay") && !window.location.href.includes("admin")) {
            createOverlay();
        }
    }, 1000); 
}


document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});


if (window.location.href.includes("admin")) {
    console.log("Admin mode: Overlay bypassed");
} else {
    createOverlay();
    overlayChecker(); /
}

// Sound effect 
document.querySelectorAll("area").forEach(room => {
    room.addEventListener("click", () => {
        document.getElementById("creak-sound").play();
    });
});

// ghost 
const ghost = document.querySelector('.hidden-ghost');

function moveGhost() {
    const randomX = Math.random() * (window.innerWidth - 80); //ghost's width
    const randomY = Math.random() * (window.innerHeight - 80); //ghost's height
    ghost.style.left = `${randomX}px`;
    ghost.style.top = `${randomY}px`;
}

ghost.onclick = function() {
    ghost.style.opacity = 0; 
    setTimeout(() => {
        moveGhost(); 
        ghost.style.opacity = 0.8; 
    }, 2000); 
};

// spooky bubbles
for (let i = 0; i < 10; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(bubble);
}
