document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const inputField = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to create a new task
    function createTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the "complete" checkbox
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');

        // Create the "remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add event listener to mark task as completed
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add event listener to remove the task
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append buttons to the task list item
        li.appendChild(completeButton);
        li.appendChild(removeButton);

        // Append the task item to the list
        taskList.appendChild(li);
    }

    // add a new task
    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            inputField.value = '';
        }
    });

    // Enter to add a task
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = inputField.value.trim();
            if (taskText !== '') {
                createTask(taskText);
                inputField.value = '';  
            }
        }
    });
});
