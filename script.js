function sendMessage(user) {
    const chatBox = document.getElementById('chat-box');
    const inputBox = user === 'user1' ? document.getElementById('user1-input') : document.getElementById('user2-input');
    const message = inputBox.value;

    if (message.trim() === '') return;

    // Display user message
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${user}-message`);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input box
    inputBox.value = '';
}
