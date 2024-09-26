
const rooms = [
    { coords: "50,50,150,150", website: "https://default-room1.com" },
    { coords: "160,50,260,150", website: "https://default-room2.com" },
   //add more rooms here r
];


function updateManor() {
    let manorMap = '';
    rooms.forEach(room => {
        manorMap += `<area shape="rect" coords="${room.coords}" href="${room.website}" target="_blank">`;
    });
    document.getElementById('manormap').innerHTML = manorMap;
}


updateManor();

// form submissionss
document.getElementById("submission-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const website = document.getElementById("website").value;

    //add wbsite to manor
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].website.includes("default")) {
            rooms[i].website = website;
            break;
        }
    }

    // update wit new submissions
    updateManor();

    alert(`${name}, your room has been added to the spooky manor!`);
});

// souund effect?
document.querySelectorAll("area").forEach(room => {
    room.addEventListener("click", () => {
        document.getElementById("creak-sound").play();
    });
});
