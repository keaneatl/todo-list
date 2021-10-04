import resetCSS from './reset.css';
import { hamBurger, renderTaskDOM, newProject, generateTaskDOM, generateProjTitleDOM } from './modules/interface';
import { addTask } from './modules/task';
import { renderHome } from './modules/switchDOM';
import { addProj, projectsController } from './modules/project';

const saveProjects = (() => {

    const _storeProjects = () => {
        const currentProjects = projectsController.projectsArray;
        const currentDefaultProj = projectsController.defaultProject;
        localStorage.setItem('projects', JSON.stringify(currentProjects));
        localStorage.setItem('defaultProject', JSON.stringify(currentDefaultProj));
    }

    const _displayStoredTasks = () => {

        projectsController.defaultProject.tasks.forEach(task =>{
            generateTaskDOM(task['title'], task['desc'], task['dueDate']);
                const currentTasksDOM = Array.from(document.querySelectorAll('.task'));
                currentTasksDOM.forEach(taskDOM => {
                    const taskHeader = taskDOM.childNodes[0];
                    const removeTask = taskDOM.querySelector('.checkbox');
                    if (taskHeader.childNodes[1].nodeValue === task['title']){
                        removeTask.addEventListener('click', () => {
                            const thisTaskIndex = projectsController.defaultProject.tasks.indexOf(task);
                            projectsController.defaultProject.tasks.splice(thisTaskIndex, 1); 
                            localStorage.setItem('defaultProject', JSON.stringify(projectsController.defaultProject));
                        })
                    }
                })
        })
        
        projectsController.projectsArray.forEach(project => {

            generateProjTitleDOM(project['projectName']);
            const projectItemsArray = Array.from(document.querySelectorAll('.project-item'));
            projectItemsArray.forEach(proj => {
                const projTitle = proj.childNodes[1]
                if (projTitle.childNodes[0].textContent !== project['projectName'])return;
                const closeProj = proj.childNodes[2];
                closeProj.addEventListener('click', () => {
                    const projectIndex =  projectsController.projectsArray.indexOf(project);
                    projectsController.projectsArray.splice(projectIndex, 1);
                    localStorage.setItem('projects', JSON.stringify(projectsController.projectsArray));
                })
                localStorage.setItem('projects', JSON.stringify(projectsController.projectsArray));
            });

            project['tasks'].forEach(task => {
                generateTaskDOM(task['title'], task['desc'], task['dueDate']);
                const currentTasksDOM = Array.from(document.querySelectorAll('.task'));
                currentTasksDOM.forEach(taskDOM => {
                    const taskHeader = taskDOM.childNodes[0];
                    const removeTask = taskDOM.querySelector('.checkbox');
                    if (taskHeader.childNodes[1].nodeValue === task['title']){
                        taskDOM.setAttribute('style', 'display: none;')
                        removeTask.addEventListener('click', () => {
                            const thisTaskIndex = project.tasks.indexOf(task);
                            project.tasks.splice(thisTaskIndex, 1); 
                            localStorage.setItem('projects', JSON.stringify(projectsController.projectsArray));
                        })
                    }
                })
            })
        })
    };

    if(!localStorage.getItem('projects')){
        _storeProjects();
    }
    else{
        let storedProjects = JSON.parse(localStorage.getItem("projects"));
        let storedDefaultProj = JSON.parse(localStorage.getItem("defaultProject"))
        projectsController.defaultProject = storedDefaultProj;
        projectsController.projectsArray = storedProjects;
        _displayStoredTasks();
    }
})();

