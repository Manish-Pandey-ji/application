function sendMessage() {
    const userInput = document.getElementById('chatbot-input').value;

    fetch('/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.innerHTML += `<div>You: ${userInput}</div>`;
        messagesContainer.innerHTML += `<div>Chatbot: ${data.response}</div>`;
        document.getElementById('chatbot-input').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
