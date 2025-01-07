// document.addEventListener('DOMContentLoaded', () => {
//     const overlay = document.getElementById('dev-overlay');
    
//     const messages = ["Dev at Work!", "Good things are on the way!"];
//     let currentMessageIndex = 0;

//     function showNextMessage() {
//         // Update the overlay with the next message
//         overlay.textContent = messages[currentMessageIndex];
//         overlay.style.display = 'flex';

//         // Switch to the next message after 3 seconds
//         setTimeout(() => {
//             currentMessageIndex = (currentMessageIndex + 1) % messages.length;
//             showNextMessage();
//         }, 3000); // No gap between messages
//     }

//     // Start the loop
//     showNextMessage();
// });

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('dev-overlay');
    const messages = ["Dev at Work!", "Keep pushing, you're doing great!"];
    let currentMessageIndex = 0;

    function showNextMessage() {
        overlay.textContent = messages[currentMessageIndex];
        overlay.style.display = 'flex';

        currentMessageIndex = (currentMessageIndex + 1) % messages.length;

        setTimeout(showNextMessage, 3000); // Switch messages every 3 seconds
    }

    showNextMessage();
});
