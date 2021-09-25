import { generateTaskDOM } from "./interface";

const taskFactory = (title, desc, dueDate) => {
    const clearTask = () => {

    }

    return {title, desc, dueDate}
}

const addTask = (() => {
    const taskArray = [];
    const newTask = taskFactory();
    let tasks = Array.from(document.querySelectorAll('.task'));
        
        tasks.forEach(task => {
            
            const taskHeader = task.querySelector('.task-h');
            const taskDesc = task.querySelector('.task-desc');
            const dueDate = task.querySelector('.due-date');
            taskHeader.addEventListener('change', () => {
                console.log(task.firstElementChild.nodeValue);
                newTask.title = taskHeader.nodeValue;
                console.log(taskArray)
            })
            taskDesc.addEventListener('change', () => {
                newTask.desc = taskDesc.nodeValue;
                console.log(taskArray)
            })
            dueDate.addEventListener('change', () => {
                newTask.dueDate = dueDate.nodeValue;
                console.log(taskArray);
            })
            taskArray.push(task);
            console.log(taskArray)
        });



    // generateTaskDOM().taskTitleInput.addEventListener('change', () => {
    //     newTask.desc = generateTaskDOM().taskTitleInput.value;
    // })

    return { taskArray };
});

export {addTask}