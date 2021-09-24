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

const generateTaskDOM = (() => {
    const displayContainer = document.querySelector('.display');
    const taskContainer = document.createElement('div');
    const taskCheck = document.createElement('img');
    const taskTitle = document.createElement('span');
    const taskTitleInput = document.createElement('input');
    const dueDate = document.createElement('input');
    const taskDesc = document.createElement('p');
    const taskDescInput = document.createElement('input');
    
    taskContainer.classList.add('task');
    taskTitle.classList.add('task-h');
    taskTitleInput.classList.add('task-h-input');
    taskCheck.classList.add('ico', 'checkbox');
    dueDate.classList.add('due-date');
    taskDesc.classList.add('task-desc');
    taskDescInput.classList.add('class-desc-input');

    taskCheck.src = "./images/icons/circle-svgrepo-com.svg";
    taskTitleInput.type = 'text';
    taskTitleInput.placeholder = 'Title';
    dueDate.type = 'date';
    taskDescInput.type = 'text';
    taskDescInput.placeholder = 'Description'

    taskTitle.append(taskCheck, taskTitleInput);
    taskDesc.append(taskDescInput);
    taskContainer.append(taskTitle, dueDate, taskDesc);
});

export { hamBurger, generateTaskDOM };