let fillText = document.querySelector("#fill-text");
let width = window.innerWidth;
let height = window.innerHeight;
function binRenderer() {
    // Checks the height and width of the screen size
    let charOnWidth = width / 32;
    let charOnHeight = height / 32;

    // Gets the area of the screen size
    // The decicated font size in 32 pixels
    let charCount = charOnHeight * charOnWidth;

    // Checks how many times space, 0, space, 1 has to be repeated
    let numberOfSet = Math.round(charCount) / 2;
    let binSets = " 0 1";

    //Initializaton for DOM
    let text = "";

    text += binSets.repeat(numberOfSet);

    fillText.innerHTML = text;
}

binRenderer();

function siteNotReady() {
    alert(
        `
        The webpage is not ready yet.
        Please visit soon.
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⡆⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⣾⣿⡆⠀
⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⢰⣿⡆⠀⣾⣿⡆⠀⣾⣷ ⣿⣿⡇⠀⠀⣿⣿⡇⠀
⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⠘⣿⣿⣤⣿⣿⣿⣤⣿⡇⢻⣿⡇⠀⠀⣿⣿⡇⠀
⠀⠀⠀⣿⣿⡇⠀⠀⢸⡿⠀⢹⣿⣿⣿⣿⣿⣿⣿⠁⢸⣿⣇⠀⢀⣿⣿⠇⠀
⠀⠀⠀⠙⢿⣷⣶⣶⡿⠁⠀⠈⣿⣿⠟⠀⣿⣿⠇⠀⠈⠻⣿⣶⣾⡿⠋⠀⠀
        `
    )
}