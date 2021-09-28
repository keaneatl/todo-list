import resetCSS from './reset.css';
import { hamBurger, renderTaskDOM, newProject } from './modules/interface';
import { addTask } from './modules/task';
import { renderHome } from './modules/switchDOM';

// TTD:
// Logic to add and remove task from other projects' tasks array, -- CLEAR --
// Logic to know which project we're in and load its respective task arrays to the DOM 
// Logic to sort tasks by date
// save everything to local storage