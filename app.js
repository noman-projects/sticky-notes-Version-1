const messageInput = document.getElementById('message-input');
function textinput(){
    document.getElementById('message_output').innerHTML = messageInput.value;
    messageInput.value = '';
}