const questions = [
    {
        clues: [
            "This capital city has a famous literary pub called The Temple Bar.",
            "A river flows through it sharing its name with an old Viking settlement.",
            "It is home to the oldest university in Ireland outside of the city center.",
            "A giant Guinness brewery dominates the skyline.",
            "This city is the capital of Ireland."
        ],
        answer: "dublin"
    },
    {
        clues: [
            "This northern European capital is spread across 14 islands.",
            "It hosts a world-famous music festival in its old town during summer.",
            "The Nobel Prize banquet is held annually in its City Hall.",
            "It has a historic palace called the Royal Palace on the island of Gamla Stan.",
            "This city is the capital of Sweden."
        ],
        answer: "stockholm"
    },
    {
        clues: [
            "This capital city is famous for its ancient temples and shrines.",
            "It lies on a river with a name that also belongs to a famous bridge.",
            "It was heavily bombed during WWII and later rebuilt with a modern city center.",
            "It is known for one of the most famous nightclub in the world",
            "This city is the capital of Germany."
        ],
        answer: "berlin"
    }
];


let currentQuestion = 0;
let currentClueIndex = 0;
let currentPoints = 10;
let totalScore = 0;
let gameinterval = undefined;

function startGame() {
    currentQuestion = 0;
    currentClueIndex = 0;
    currentPoints = 10;
    totalScore = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "";
    document.getElementById("guessInput").value = "";

    showClue();
    toggleMusic();
    gameinterval = setInterval(nextClue, 20000);
    console.log(gameinterval);
}

function showClue() {
    document.getElementById("clueText").textContent =
        questions[currentQuestion].clues[currentClueIndex];

}

function nextClue() {
    if (currentClueIndex < questions[currentQuestion].clues.length - 1) {
        currentClueIndex++;
        currentPoints -= 2;
        showClue();
    }
    toggleMusic();
    hidecountdown();
    gameinterval = setInterval(nextClue, 10000);
}

function checkAnswer() {
    const guess = document.getElementById("guessInput").value
        .toLowerCase()
        .trim();

    const correctAnswer = questions[currentQuestion].answer;

    if (guess === correctAnswer) {
        totalScore += currentPoints;

        document.getElementById("result").textContent =
            "Correct! You earned " + currentPoints + " points.";

        document.getElementById("score").textContent =
            "Total Score: " + totalScore;

        moveToNextQuestion();
    } else {
        document.getElementById("result").textContent =
            "Wrong answer. Try again!";
    }
    hidecountdown();
    toggleMusic();
    gameinterval = setInterval(nextClue, 20000);
}

function moveToNextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        currentClueIndex = 0;
        currentPoints = 10;
        document.getElementById("guessInput").value = "";
        showClue();
    } else {
        document.getElementById("clueText").textContent = "Game Over!";
    }
}

function toggleMusic() {
    const audio = document.querySelector("#train");
    console.log(audio);
    audio.play();
    audiovolume = 0.5;
    audio.volume = audiovolume;

}
function stopanswer() {
    const audio = document.querySelector("#train");
    audio.pause();
    playHorn();
    clearInterval(gameinterval);
    enableguessinput();
    countdown();
    showcountdown();
}
function playHorn() {
    const horn = document.querySelector("#horn");
    console.log(horn);
    horn.play();
    audiovolume = 0.2;
    horn.volume = audiovolume;
}
function enableguessinput() {
    document.getElementById("guessInput").disabled = false;
}
function countdown() {
    let timeleft = 10;
    const countdownElement = document.getElementById("countdown");

    setInterval(
        function minusonesecond() {
            if (timeleft > 1) {
                timeleft = timeleft - 1;
                countdownElement.textContent = "Time left: " + timeleft + " seconds";

            }
        },
        1000);
}
function hidecountdown() {
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.display = 'none';
}
function showcountdown() {
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.display = 'block';
}
function resetGame() {
    clearInterval(gameinterval);

    currentQuestion = 0;
    currentClueIndex = 0;
    currentPoints = 10;
    totalScore = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "";
    document.getElementById("guessInput").value = "";

    showClue();
}

const rulesBtn = document.getElementById("rulesBtn");
const rulesModal = document.getElementById("rulesModal");
const closeRules = document.getElementById("closeRules");

rulesBtn.addEventListener("click", () => {
    rulesModal.style.display = "block";
});

closeRules.addEventListener("click", () => {
    rulesModal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if (event.target === rulesModal) {
        rulesModal.style.display = "none";
    }

});



