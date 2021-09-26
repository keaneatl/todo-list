import { generateTaskDOM } from "./interface";
import { addTask } from "./task";

const projectFactory = (projectName) => {
    const tasks = [];

    return { projectName, tasks }
}

const projectsController = (() => {
    const defaultProject = projectFactory('default');
    let projectsArray = [defaultProject];

    return { projectsArray, defaultProject }
})();

const addProj = (type => {
    const projectItemsArray = Array.from(document.querySelectorAll('.project-item'));
    const newProject = projectFactory()

    projectItemsArray.forEach(project => {
        project.addEventListener('change', () => {
            const projTitle = project.childNodes[1];
            newProject.projectName = projTitle.childNodes[0].nodeValue;
            projectsController.projectsArray.push(newProject);
            console.log(projectsController.projectsArray);
        });
    });

    return { newProject }
})
    

export { addProj, projectsController }