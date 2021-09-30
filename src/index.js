import resetCSS from './reset.css';
import { hamBurger, renderTaskDOM, newProject, generateTaskDOM } from './modules/interface';
import { addTask } from './modules/task';
import { renderHome } from './modules/switchDOM';
import { projectsController } from './modules/project';

// TTD:
// Logic to add and remove task from other projects' tasks array, -- CLEAR --
// Logic to know which project we're in and load its respective task arrays to the DOM -- CLEAR --
// Logic to sort tasks by date
// save everything to local storage
// const saveProjects = (() => {

//     const _storeProjects = () => {
//         const currentProjects = projectsController.projectsArray;
//         localStorage.setItem('projects', JSON.stringify(currentProjects));
//         let storedProjects = JSON.parse(localStorage.getItem('projects'));

//         return {storedProjects}
//     }

//     const _displayTasks = () => {

//     }

//     if(!localStorage.getItem('projects')){
//         _storeProjects();
//         projectsController.projectsArray = _storeProjects().storedProjects;
//     }
//     else{
//         _storeProjects().storedProjects = JSON.parse(localStorage.getItem("currentLibrary"));
//         projectsController.projectsArray = _storeProjects().storedProjects;
//         generateTaskDOM();
//     }
// })();