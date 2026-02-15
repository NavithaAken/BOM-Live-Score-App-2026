const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggle.classList.toggle("active");
});


let totalRuns = 0;
let totalWickets = 0;

function updateScoreUI() {
    document.querySelector(".highlight strong").innerText =
        totalRuns + " / " + totalWickets;
}

function updateRuns() {
    let runs = parseInt(document.getElementById("runInput").value);

    if (isNaN(runs) || runs < 0 || runs > 6) {
        alert("Enter runs between 0 and 6");
        return;
    }

    totalRuns += runs;
    updateScoreUI();
    document.getElementById("runInput").value = "";
}

function addWicket() {
    totalWickets++;
    updateScoreUI();
}

function swapBatsmen() {
    let strikerBox = document.querySelectorAll(".state-box")[4].querySelector("strong");
    let bowlerBox = document.querySelectorAll(".state-box")[5].querySelector("strong");

    let temp = strikerBox.innerText;
    strikerBox.innerText = bowlerBox.innerText;
    bowlerBox.innerText = temp;
}

function scoreupdate() {

    // Get values from form
    let innings = document.getElementById("inningsInput").value;
    let runs = document.getElementById("runsInput").value;
    let wickets = document.getElementById("wicketsInput").value;
    let over = document.getElementById("overInput").value;
    let ball = document.getElementById("ballInput").value;
    let striker = document.getElementById("strikerInput").value;
    let bowler = document.getElementById("bowlerInput").value;

    // Update right panel
    if (innings !== "") {
        document.getElementById("inningsDisplay").innerText = innings;
    }

    if (runs !== "" && wickets !== "") {
        document.getElementById("scoreDisplay").innerText =
            runs + " / " + wickets;
    }

    if (over !== "" && ball !== "") {
        document.getElementById("overDisplay").innerText =
            over + "." + ball;
    }

    if (striker !== "") {
        document.getElementById("strikerDisplay").innerText = striker;
    }

    if (bowler !== "") {
        document.getElementById("bowlerDisplay").innerText = bowler;
    }

    document.getElementById("statusDisplay").innerText = "Live";

}
