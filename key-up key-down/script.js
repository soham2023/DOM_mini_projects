const nameInput = document.getElementById('nme');
const messageTextarea = document.getElementById('msg');
const outputName = document.getElementById('outputName');
const outputMessage = document.getElementById('outputMessage');

nameInput.addEventListener('keydown', function(event) {
    outputName.textContent = `Keydown event for name input: ${event.key}`;
});

messageTextarea.addEventListener('keyup', function(event) {
    outputMessage.textContent = `Keyup event for message textarea: ${event.key}`;
});