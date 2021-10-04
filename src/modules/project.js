import { generateTaskDOM } from "./interface";
import { addTask } from "./task";

const projectFactory = (projectName) => {
    const tasks = [];

    return { projectName, tasks }
}

const projectsController = (() => {
    const defaultProject = projectFactory('inbox');
    let projectsArray = [];

    return { projectsArray, defaultProject }
})();

const addProj = (type => {
    const projectItemsArray = Array.from(document.querySelectorAll('.project-item'));
    const newProject = projectFactory(type);
    newProject.projectName = type;

    projectItemsArray.forEach(project => {
        const projTitle = project.childNodes[1]
        if (projTitle.childNodes[0].textContent !== type)return;
        const closeProj = project.childNodes[2];

        projectsController.projectsArray.push(newProject);
        closeProj.addEventListener('click', () => {
            const projectIndex =  projectsController.projectsArray.indexOf(newProject);
            projectsController.projectsArray.splice(projectIndex, 1);
            localStorage.setItem('projects', JSON.stringify(projectsController.projectsArray));
        })
        localStorage.setItem('projects', JSON.stringify(projectsController.projectsArray));
    });
    return { newProject }
    
})
    

export { addProj, projectsController }

// backup code
// project.addEventListener('change', () => {
//     newProject.projectName = projTitle.childNodes[0].nodeValue;
//     projectsController.projectsArray.push(newProject);
//     console.log(newProject);
// });

// if (projectsController.projectsArray.some(project => {
//     project['projectName'] === type;
// })){
//     projectItemsArray.projectsArray.forEach(project => {
//         const projTitle = project.childNodes[1]
//         if (projTitle.childNodes[0].textContent === type){
//             const closeProj = project.childNodes[2];
//             closeProj.addEventListener('click', () => {
//                 console.log('hi');
//                 const projectIndex =  projectsController.projectsArray.indexOf(newProject);
//                 projectsController.projectsArray.splice(projectIndex, 1);
//                 localStorage.setItem('projects', JSON.stringify(projectsController.projectsArray));
//             })
//         }
//     })
// }