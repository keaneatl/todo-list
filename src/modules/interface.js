import { addTask } from "./task";

const hamBurger = (() => {
    
    // cache DOM
    const hambgButton = document.querySelector('.hambg');
    const mainDisp = document.querySelector('.display');
    const sideBar = document.querySelector('.sidebar');
    const closeHambg = document.querySelector('.close-hambg');

    // bind events
    hambgButton.addEventListener('click', () => {
        mainDisp.classList.toggle('display');
        mainDisp.classList.toggle('hide-disp'); 
        sideBar.classList.toggle('sidebar');
        sideBar.classList.toggle('show-sb');
    });
    closeHambg.addEventListener('click', () => {
        mainDisp.classList.toggle('display');
        mainDisp.classList.toggle('hide-disp'); 
        sideBar.classList.toggle('sidebar');
        sideBar.classList.toggle('show-sb');
    })
})();

const generateTaskDOM = task => {
    const addTaskBtn = document.querySelector('.add-task')
    const taskContainer = document.createElement('div');
    const taskCheck = document.createElement('img');
    const taskTitle = document.createElement('span');
    const taskTitleInput = document.createElement('input');
    const dueDate = document.createElement('p');
    const dueDateInput = document.createElement('input');
    const taskDesc = document.createElement('p');
    const taskDescInput = document.createElement('input');

    taskContainer.classList.add('task');
    taskTitle.classList.add('task-h');
    taskTitleInput.classList.add('task-h-input');
    taskCheck.classList.add('ico', 'checkbox');
    dueDate.classList.add('due-date');
    taskDesc.classList.add('task-desc');
    taskDescInput.classList.add('task-desc-input');

    taskCheck.src = "./images/icons/circle-svgrepo-com.svg";
    taskTitleInput.type = 'text';
    taskTitleInput.placeholder = 'Title';
    dueDateInput.type = 'date';
    taskDescInput.type = 'text';
    taskDescInput.placeholder = 'Description'
    taskCheck.addEventListener('click', () => taskContainer.remove());
    
    taskTitle.append(taskCheck, taskTitleInput);
    taskDesc.append(taskDescInput);
    dueDate.append(dueDateInput);
    taskContainer.append(taskTitle, dueDate, taskDesc);

    addTaskBtn.insertAdjacentElement('beforebegin', taskContainer);

    taskTitleInput.addEventListener('change', () => {
        taskTitle.append(taskTitleInput.value);
        taskTitleInput.remove();
    });
    dueDateInput.addEventListener('change', () => {
        dueDate.append(dueDateInput.value);
        console.log(dueDate.value);
        dueDateInput.remove();
    })
    taskDescInput.addEventListener('change', () => {
        taskDesc.append(taskDescInput.value);
        taskDescInput.remove();
    });

    addTask();
};


const renderTaskDOM = (()=> { 
    const addTaskBtn = document.querySelector('.add-task');
    addTaskBtn.addEventListener('click', generateTaskDOM);
})();



export { hamBurger, renderTaskDOM, generateTaskDOM};