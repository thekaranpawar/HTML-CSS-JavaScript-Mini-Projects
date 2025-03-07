document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const inputField = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function createTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            inputField.value = '';
        }
    });

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
