
### Pages / Components

Main Game Page – Displays the clues, input field for guesses, score, and buttons for game control.
<img width="1919" height="1079" alt="Screenshot 2026-02-19 103014" src="https://github.com/user-attachments/assets/57026e09-38a1-41d4-aeb4-d062ec9413dd" />

Rules Popup – Accessible via a button in the top-right corner, explains the game rules.
<img width="1917" height="1079" alt="Screenshot 2026-02-19 103034" src="https://github.com/user-attachments/assets/bb1ba815-c8dc-45af-bbe3-fd1a9578932e" />

Audio – Background train music and horn sound effects triggered during gameplay.

Design & Planning

The game was planned with a focus on simplicity, responsiveness, and an engaging user experience, ensuring it works smoothly across all devices while maintaining a clear and intuitive layout.

### Goal:

Give players a “På Spåret” quiz experience online

Reveal one clue at a time

Track points and scores

Be fully functional on mobile and desktop devices

### Visual Style:

Warm, contrasting colors for clues and game interface

Background image adds atmosphere but is responsive and scales well

Clean typography (Arial) for readability

### User Stories

User Story 1 — New Player
As a new player,
I want to see one clue at a time and guess the city,
so that I can enjoy the challenge and learn as I play.

User Story 2 — Returning Player
As a returning player,
I want my score to be tracked correctly and the game to respond on all devices,
so that I can continue to improve my performance and play multiple rounds.

### Wireframes / Layout

Game container centered with clues, input, and buttons

Responsive layout for mobile devices

Rules button fixed in top-right corner

Score and result areas visible below input

### Typography

Font: Arial
Reason: Simple, readable, and works well with the game’s vibrant colors.

Colour Scheme
<img width="95" height="254" alt="Screenshot 2026-02-19 101534" src="https://github.com/user-attachments/assets/3aa18767-a129-4f09-8481-0e9ff8767563" />

Game background: #a02613

Clues box: #45271f

Buttons: #a02613 with white text

Text: White for readability

Features and Navigation

### Game Controls:

Start Game – Begins the game, starts train audio and clue timer

Next Clue – Reveals the next clue

Submit Guess – Checks player’s answer and updates the score

STOP – Pauses the game, plays horn, enables input

### Rules Popup:

Explains how to play the game

Can be opened or closed at any time

Responsive Design:

Works on mobile phones, tablets, and desktops

Background image scales and crops correctly on smaller screens

### Audio Effects:

Background train sound

Horn sound on stop

### Technologies Used

HTML – Game structure and content

CSS – Styling, responsive layout, background, colors

JavaScript – Game logic, clue reveal, scoring, audio, and countdown

GitHub – Version control and deployment via GitHub Pages

ChatGPT – Assistance and guidance

### Testing

Browser Testing:

Google Chrome 

Firefox 

Microsoft Edge 

Safari Mobile 

### Responsiveness:

Tested on mobile and tablet devices

Elements scale correctly and maintain readability

### Bugs / Fixes:

Countdown and audio interactions adjusted to work properly across devices.

I experienced issues with the game restarting every time the “Start Game” button was pressed. To resolve this, I adjusted the logic so the game continues running when interacting with other buttons, ensuring smoother gameplay and preventing unintended resets.

Input field disabled/enabled correctly to prevent guessing at wrong times

### Deployment

Hosted on: GitHub Pages

### Instructions:

Open the URL in any browser

Click “Start Game” to begin

Use “Next Clue” and “Submit Guess” buttons as the game progresses

Click “STOP” to pause and play horn

### Credits

Simon Johansson - a close friend of mine who works as a developer. help with some bugfixes and responsive design

Song played during game: https://www.youtube.com/watch?v=CJNVXrU4DgA
edited for better use

Horn audio: https://elevenlabs.io/sound-effects/train-horn
train horn 9

Background image: https://www.cafe.se/pa-sparet-2025/

Code guidance: ChatGPT

Tutorials for responsive design and layout: YouTube / online resources
