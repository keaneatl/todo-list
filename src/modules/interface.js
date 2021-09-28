import { addTask } from "./task";
import { addProj } from "./project";
import { projectsController } from "./project";

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

const generateTaskDOM = (title, desc, due) => {
    const addTaskBtn = document.querySelector('.add-task')
    const header = document.querySelector('.display-lh');
    const taskContainer = document.createElement('div');
    const taskCheck = document.createElement('img');
    const taskTitle = document.createElement('span');
    const taskDesc = document.createElement('p');
    const dueDate = document.createElement('p');

    taskContainer.classList.add('task');
    taskTitle.classList.add('task-h');
    taskCheck.classList.add('ico', 'checkbox');
    dueDate.classList.add('due-date');
    taskDesc.classList.add('task-desc');
    taskCheck.src = "./images/icons/circle-svgrepo-com.svg";
    
    taskCheck.addEventListener('click', () => taskContainer.remove());

    if (title === undefined && desc === undefined && due === undefined){
        const taskTitleInput = document.createElement('input');
        const taskDescInput = document.createElement('input');
        const dueDateInput = document.createElement('input');
        taskTitleInput.classList.add('task-h-input');
        taskDescInput.classList.add('task-desc-input');
        taskTitleInput.type = 'text';
        taskTitleInput.placeholder = 'Title';
        dueDateInput.type = 'date';
        taskDescInput.type = 'text';
        taskDescInput.placeholder = 'Description';

        taskTitle.append(taskCheck, taskTitleInput)
        taskDesc.append(taskDescInput);
        dueDate.append(dueDateInput);

        taskTitleInput.addEventListener('change', () => {
            taskTitle.append(taskTitleInput.value);
            taskTitleInput.remove();
        });
        dueDateInput.addEventListener('change', () => {
            dueDate.append(dueDateInput.value);
            dueDateInput.remove();
        })
        taskDescInput.addEventListener('change', () => {
            taskDesc.append(taskDescInput.value);
            taskDescInput.remove();
        });
        
    }
    // continue work here - tasks somehow lose their ability to be spliced
    // from the array
    else {
        console.log(projectsController.defaultProject.tasks)
        taskTitle.append(taskCheck, title);
        dueDate.textContent = due;
        taskDesc.textContent = desc;
    }
    
    taskContainer.append(taskTitle, dueDate, taskDesc);
    addTaskBtn.insertAdjacentElement('beforebegin', taskContainer);

    addTask(header.textContent);
    console.log(header.textContent)
     
};


const renderTaskDOM = (()=> { 
    const addTaskBtn = document.querySelector('.add-task');
    addTaskBtn.addEventListener('click', () => generateTaskDOM());
})();

const generateProjTitleDOM = () => {
    const projContainer = document.querySelector('.project-items-ul');
    const projItem = document.createElement('li');
    const projIcon = document.createElement('img');
    const closeIcon = document.createElement('img');
    const projTitle = document.createElement('span');
    const projTitleInput = document.createElement('input');

    projItem.classList.add('project-item');
    projIcon.classList.add('ico');
    projIcon.classList.add('add-proj');
    projIcon.src = './images/icons/task-list-svgrepo-com.svg';
    closeIcon.classList.add('close-proj');
    closeIcon.src = './images/icons/close-svgrepo-com.svg';
    projTitleInput.type = 'text';
    projTitleInput.placeholder = 'Project Name';
    projTitleInput.classList.add('proj-title-input');

    projTitleInput.addEventListener('change', () => {
        projTitle.append(projTitleInput.value);
        projTitleInput.remove();
        projTitle.addEventListener('click', () => generateNewProjDOM(projTitle.textContent))
        projIcon.addEventListener('click', () => generateNewProjDOM(projTitle.textContent));
        addProj(projTitle.textContent);
    })
    closeIcon.addEventListener('click', () => {
        projItem.remove();
    })

    projTitle.append(projTitleInput);
    projItem.append(projIcon, projTitle, closeIcon);
    projContainer.append(projItem);

}

const generateNewProjDOM = ((projTitle) => {
    const currentTasks = Array.from(document.querySelectorAll('.task'));
    const header = document.querySelector('.display-lh');

    if (currentTasks !== null){
        currentTasks.forEach(task => task.remove());
        header.textContent = projTitle;
    };

})

const newProject = (() => {
    const newProjBtn = document.querySelector('.add-proj');
    newProjBtn.addEventListener('click', generateProjTitleDOM);
})();

export { hamBurger, generateTaskDOM, renderTaskDOM, generateNewProjDOM, newProject };