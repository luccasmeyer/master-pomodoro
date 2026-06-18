export function createTask(stringTask) {
    const template = document.getElementById('task-template');
    const listTask = document.getElementById('list-task');
    const clone = template.content.cloneNode(true);
    const label = clone.querySelector('.task-text');
    
    label.textContent = stringTask;

    listTask.appendChild(clone);
}