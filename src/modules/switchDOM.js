// TTD:

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

        if (header !== 'Inbox'){
            currentRenderedTasks.forEach(task => task.setAttribute('style', 'display:none;'));
            header.textContent = 'Inbox';

            for (let i = 0; i < projectsController.defaultProject.tasks.length; i++){
                const homeTask = projectsController.defaultProject.tasks[i];
                const currentTaskH = currentRenderedTasks[i];
                if (homeTask['title'] === currentTaskH.childNodes[0].textContent){
                    currentRenderedTasks[i].removeAttribute('style');
                }
            }
        }

    }

    home.addEventListener('click', renderHomeDOM);
    inbox.addEventListener('click', renderHomeDOM);
})();

const renderProject = (projTitle) => {
    const header = document.querySelector('.display-lh');
    const currentProjects = document.querySelectorAll('.project-item');
    const currentTasks = Array.from(document.querySelectorAll('.task'));

    header.textContent = projTitle;
    currentTasks.forEach(task => task.setAttribute('style', 'display:none;'));

    currentProjects.forEach(project => {
        if (header.textContent === projTitle){
            const currentRenderedTasks = Array.from(document.querySelectorAll('.task'));

            projectsController.projectsArray.forEach((proj, index) => {
                    if (proj['projectName'] === projTitle){
                        const respectiveTasks = proj['tasks'];

                        for (let i = 0; i < respectiveTasks.length; i++){
                            const respectiveTask = respectiveTasks[i]
                            console.log(respectiveTask['title'])
                            const currentTaskH = currentRenderedTasks[i];
                            console.log(currentTaskH.childNodes[0].textContent)
                            // continue work here, look for the respective tasks within the rendered tasks
                            // and unhide it
                            if (respectiveTask['title'] === currentTaskH.childNodes[0].textContent){
                                console.log(currentRenderedTasks[i])
                                currentRenderedTasks[i].removeAttribute('style');
                            }
                        }
                    }
                })
                // const currentTaskH = task.childNodes[0];
                // if (projTask['title'] === currentTaskH.childNodes[1].nodeValue){
                //     task.removeAttribute('style');
                // }
           
        }
        console.log(project)
    })
};

export {renderHome, renderProject}

//backup code
            // projectsController.defaultProject.tasks.forEach(task => {
                
            //     generateTaskDOM(task['title'], task['desc'], task['dueDate']);
            //     console.log(projectsController.defaultProject.tasks)
            // })