const motivationalQuotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
];

function setUserName() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    if (username) {
        document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
        document.getElementById('welcome-section').style.display = 'none';
        document.getElementById('todo-section').style.display = 'block';
        showMotivationalQuote();
    }
}

function showMotivationalQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    document.getElementById('motivational-quote').textContent = motivationalQuotes[randomIndex];
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => listItem.classList.toggle('completed');
        
        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = '🗑️';
        deleteIcon.className = 'delete-icon';
        deleteIcon.onclick = () => taskList.removeChild(listItem);

        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(taskText));
        listItem.appendChild(deleteIcon);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Show a new motivational quote on page load
window.onload = showMotivationalQuote;