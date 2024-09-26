const rooms = [
    { coords: "50,50,150,150", website: "https://default-room1.com" },
    { coords: "160,50,260,150", website: "https://default-room2.com" },
    
];

function updateManor() {
    
}

document.getElementById("submission-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const website = document.getElementById("website").value;

    // Add website to rooms
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].website.includes("default")) {
            rooms[i].website = website;
            break;
        }
    }

    alert(`${name}, your room has been added to the spooky manor!`);
});

// Sound effect
document.querySelectorAll("area").forEach(room => {
    room.addEventListener("click", () => {
        document.getElementById("creak-sound").play();
    });
});

// Register the ghost 
const ghost = document.querySelector('.hidden-ghost');

function moveGhost() {
    const randomX = Math.random() * (window.innerWidth - 80); // 80 is the ghost's width
    const randomY = Math.random() * (window.innerHeight - 80); // 80 is the ghost's height
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

for (let i = 0; i < 10; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(bubble);
}
