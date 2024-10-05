document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = document.getElementById('taskTitle').value;
        const taskDueDate = document.getElementById('taskDueDate').value;

        const newTask = {
            id: Date.now(),
            title: taskTitle,
            dueDate: taskDueDate,
            completed: false
        };

        tasks.push(newTask);
        taskForm.reset();
        displayTasks();
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${task.title} - Due: ${task.dueDate}</span>`;
            taskList.appendChild(li);
        });
    }
});
