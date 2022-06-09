let startButton = document.querySelector('.start-button');
let wellcomeMessage = document.querySelector('.wellcome-message');

startButton.addEventListener('click', displayWelcome);

function displayWelcome() {
    wellcomeMessage.innerHTML = 'Wellcome';
}