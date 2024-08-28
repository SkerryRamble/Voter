// Array to store vote counts for numbers 1 to 100
let voteCounts = new Array(100).fill(0);

// Function to generate a random number within a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display two random numbers
function displayNumbers() {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    document.getElementById('number1').textContent = num1;
    document.getElementById('number2').textContent = num2;

    updateVoteOverlays();
}

// Function to get stored vote data or initialize it if it doesn't exist
function getVoteData() {
    const storedData = localStorage.getItem('voteCounts');
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        return new Array(100).fill(0);
    }
}

// Function to save vote data to local storage
function saveVoteData(data) {
    localStorage.setItem('voteCounts', JSON.stringify(data));
}

// Function to update vote counts and display the results
function handleVote(voteType) {
    let falling = true;

    let chosenNumber;


    if (voteType === 'number1') {
        chosenNumber = parseInt(document.getElementById('number1').textContent, 10);
        voteCounts[chosenNumber - 1]++;
        highlightVotedNumber(document.getElementById('number1'));
    } else if (voteType === 'number2') {
        chosenNumber = parseInt(document.getElementById('number2').textContent, 10);
        highlightVotedNumber(document.getElementById('number2'));
        voteCounts[chosenNumber - 1]++;
    } else if (voteType === 'bothNeither') {
        falling = false;
    }

    saveVoteData(voteCounts);
    displayVoteCounts(); // Update displayed vote counts
    displayNumbers(); // Show new numbers

    if (falling) animateFallingNumber(chosenNumber); // Trigger the animation
}

// Function to highlight the voted number
function highlightVotedNumber(element) {
    element.classList.add('highlight');
    element.addEventListener('animationend', () => {
        element.classList.remove('highlight');
    });
}

// Function to display the vote counts on the page
function displayVoteCounts() {
    const voteData = getVoteData();
    document.getElementById('number1Votes').textContent = `Votes: ${voteData[parseInt(document.getElementById('number1').textContent) - 1]}`;
    document.getElementById('number2Votes').textContent = `Votes: ${voteData[parseInt(document.getElementById('number2').textContent) - 1]}`;
    document.getElementById('bothNeitherVotes').textContent = `Total Votes: ${voteData.reduce((a, b) => a + b, 0)}`;
}

// Function to animate multiple falling numbers from random positions with rotation
function animateFallingNumber(chosenNumber) {
    const numberOfFalls = getRandomNumber(3, 6);

    for (let i = 0; i < numberOfFalls; i++) {
        const fallingNumber = document.createElement('div');
        fallingNumber.className = 'falling-number';
        fallingNumber.textContent = chosenNumber;

        // Randomize the horizontal position (left)
        fallingNumber.style.left = `${getRandomNumber(15, 85)}%`;
        fallingNumber.style.rotate = `${getRandomNumber(0, 1)}rad`;
        fallingNumber.style.color = `$rgb({
        {getRandomNumber(0,255)},
        {getRandomNumber(0,255)},
        {getRandomNumber(0,255)}
        )}`;

// Remove the falling number element after the animation ends
fallingNumber.addEventListener('animationend', () => {
    document.body.removeChild(fallingNumber);
});

        document.body.appendChild(fallingNumber);

        
    }
}

// Function to generate and display the grid of numbers from 1 to 100
function generateNumberGrid() {
    const gridContainer = document.getElementById('numberGrid');
    for (let i = 1; i <= 100; i++) {
        const numberButton = document.createElement('button');
        numberButton.textContent = i;
        gridContainer.appendChild(numberButton);
    }
}

// Function to create/update the progress bar for each number
function updateProgressBar(button, voteCount) {
    let progressBar = button.querySelector('.progress-bar');

    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        const progressBarInner = document.createElement('div');
        progressBarInner.className = 'progress-bar-inner';
        progressBar.appendChild(progressBarInner);
        button.appendChild(progressBar);
    }

    const progressBarInner = progressBar.querySelector('.progress-bar-inner');
    const maxVotes = Math.max(...voteCounts) || 1;
    const widthPercentage = (voteCount / maxVotes) * 100;
    progressBarInner.style.width = `${widthPercentage}%`;
}

// Function to update the vote overlays on the number grid
function updateVoteOverlays() {
    const gridContainer = document.getElementById('numberGrid');
    const buttons = gridContainer.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        const voteCount = voteCounts[i];
        let voteOverlay = buttons[i].querySelector('.voteCount');

        if (!voteOverlay) {
            voteOverlay = document.createElement('span');
            voteOverlay.className = 'voteCount';
            buttons[i].appendChild(voteOverlay);
        }

        voteOverlay.textContent = voteCount;
        updateProgressBar(buttons[i], voteCount);
    }
}

// Event listeners for number buttons and the Both/Neither button
document.getElementById('number1').addEventListener('click', () => handleVote('number1'));
document.getElementById('number2').addEventListener('click', () => handleVote('number2'));
document.getElementById('bothNeither').addEventListener('click', () => handleVote('bothNeither'));

// Display numbers and vote counts when the page loads
voteCounts = getVoteData(); // Initialize voteCounts from stored data
displayNumbers();
displayVoteCounts();
generateNumberGrid();
