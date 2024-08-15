// Select DOM elements
const taskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task
function createTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    // Task Text
    const taskTextNode = document.createTextNode(taskText);
    
    // Mark as completed on click
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    
    // Remove task on delete button click
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent task toggle
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextNode);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        createTask(taskText);
        taskInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task.');
    }
}

// Event Listener for Add Task button
addTaskBtn.addEventListener('click', addTask);

// Optionally, add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
