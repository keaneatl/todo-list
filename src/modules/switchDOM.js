// TTD:
// 1) Whenever you click the Home or Inbox, it clears the display DOM 
// and it finds the 
// Home's 'project' object and its tasks property array, and loops through 
// it, and render it to the DOM

// 2) When you click a project, it clears the display DOM, finds the project object 
// from the projects array, and its tasks property array, loop through it,
// then render it to the DOM
import { projectsController } from "./project";
import { generateTaskDOM } from "./interface";

const renderHome = (() => {
    const header = document.querySelector('.display-lh');
    const home = document.querySelector('.home-heading');
    const inbox = document.querySelector('.inbox');
    const renderHomeDOM = () => {
        const currentRenderedTasks = Array.from(document.querySelectorAll('.task'));
    // continue work here - tasks somehow lose their ability to be spliced
    // from the array
        if (header !== 'Inbox'){
            // currentRenderedTasks.forEach(task => task.remove());
            header.textContent = 'Inbox';
            projectsController.defaultProject.tasks.forEach(task => {
                console.log(task['title']);
                generateTaskDOM(task['title'], task['desc'], task['dueDate']);
            })
        }
    }

    home.addEventListener('click', renderHomeDOM);
    inbox.addEventListener('click', renderHomeDOM);
})();

export {renderHome}