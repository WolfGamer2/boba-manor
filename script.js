// JavaScript for handling form submission and updating the manor map
const rooms = [
    { coords: "50,50,150,150", website: "https://default-room1.com" },
    { coords: "160,50,260,150", website: "https://default-room2.com" },
    // Add more default rooms here
];

// Function to update the image map
function updateManor() {
    let manorMap = '';
    rooms.forEach(room => {
        manorMap += `<area shape="rect" coords="${room.coords}" href="${room.website}" target="_blank">`;
    });
    document.getElementById('manormap').innerHTML = manorMap;
}

// Call updateManor() on page load
updateManor();

// Handle form submission
document.getElementById("submission-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const website = document.getElementById("website").value;

    // Add the submitted website to the next available room
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].website.includes("default")) {
            rooms[i].website = website;
            break;
        }
    }

    // Update the manor map with new submissions
    updateManor();

    alert(`${name}, your room has been added to the spooky manor!`);
});

// Play sound effect on room click
document.querySelectorAll("area").forEach(room => {
    room.addEventListener("click", () => {
        document.getElementById("creak-sound").play();
    });
});
