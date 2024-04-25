let dragItem = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    dragItem = event.target;
}

function drop(event) {
    event.preventDefault();
    const targetColumn = event.target.closest('.column-body');
    if (targetColumn && dragItem) {
        targetColumn.appendChild(dragItem);
        dragItem = null;
    }
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskContent = taskInput.value.trim();
    if (taskContent !== '') {
        const newTask = document.createElement('div');
        newTask.textContent = taskContent;
        newTask.setAttribute('draggable', 'true');
        newTask.addEventListener('dragstart', drag);
        document.getElementById('todo-items').appendChild(newTask);
        taskInput.value = '';
    }
}
