import { generateTaskDOM } from "./interface";
import { addProj,projectsController } from "./project";

const taskFactory = (title, desc, dueDate) => {
    const clearTask = () => {

    }

    return {title, desc, dueDate}
}

const tasksController = () => {
    let tasks = Array.from(document.querySelectorAll('.task'));

    tasks.forEach((task, i) => {
        const removeTask = task.querySelector('.checkbox');

        removeTask.addEventListener('click', () => {
            projectsController.defaultProject.tasks.splice(i, 1)
            tasksController;
            connsole.log(projectsController.defaultProject.tasks)
        })
    })
}

const addTask = (project) => {
    const newTask = taskFactory();
    let tasks = Array.from(document.querySelectorAll('.task'));

    if (project === 'Inbox'){
        tasks.forEach((task, i) => {
            const taskHeaderText = task.querySelector('.task-h');
            if (taskHeaderText.textContent !== "")return;
            const removeTask = task.querySelector('.checkbox');

            const taskHeader = task.childNodes[0];
            const dueDate = task.childNodes[1];
            const taskDesc = task.childNodes[2];
            
            removeTask.addEventListener('click', () => {
                projectsController.defaultProject.tasks.splice(i, 1);
            })
            taskHeader.addEventListener('change', () => {
                newTask.title = taskHeader.childNodes[1].nodeValue;
            })
            taskDesc.addEventListener('change', () => {
                newTask.desc = taskDesc.childNodes[0].nodeValue;
            })
            dueDate.addEventListener('change', () => {
                newTask.dueDate = dueDate.childNodes[0].nodeValue;
            })
        tasksController;   
        projectsController.defaultProject.tasks.push(newTask)
        console.log(projectsController.defaultProject.tasks);
        });
    }

    const currentTasks = [];
    tasks.forEach((task, i) => {
        const taskHeader = task.childNodes[0];
        const dueDate = task.childNodes[1];
        const taskDesc = task.childNodes[2];
        taskHeader.addEventListener('change', () => {
                 newTask.title = taskHeader.childNodes[1].nodeValue;
             });
             taskDesc.addEventListener('change', () => {
                 newTask.desc = taskDesc.childNodes[0].nodeValue;
             });
             dueDate.addEventListener('change', () => {
                 newTask.dueDate = dueDate.childNodes[0].nodeValue;
             });
             currentTasks.push(task);
        })
    addProj().newProject.tasks = currentTasks;
    return { newTask }
};

export { addTask }