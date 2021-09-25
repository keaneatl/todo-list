import { generateTaskDOM } from "./interface";

const taskFactory = (title, desc, dueDate) => {
    const clearTask = () => {

    }

    return {title, desc, dueDate}
}

const addTask = (() => {
    const taskArray = [];
    const newTask = taskFactory();
    let tasks = document.querySelectorAll('.task');
        
        tasks.forEach(task => {
            
            const taskHeader = task.childNodes[0];
            const dueDate = task.childNodes[1];
            const taskDesc = task.childNodes[2];
            taskHeader.addEventListener('change', () => {
                newTask.title = taskHeader.childNodes[1].nodeValue;
                console.log(taskArray);
                console.log(newTask);
            })
            taskDesc.addEventListener('change', () => {
                newTask.desc = taskDesc.childNodes[0].nodeValue;
                console.log(newTask);
            })
            dueDate.addEventListener('change', () => {
                newTask.dueDate = dueDate.childNodes[0].nodeValue;
                console.log(newTask);
            })
            taskArray.push(task);
            console.log(taskArray);
        });
        
    return { newTask };
});

export { addTask }