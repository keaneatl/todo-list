// For Improvement:
// In checking whether the task belongs to a specific project, use data index instead of
// matching the task titles so the users adding two tasks of the same name would not crash the app
import { projectsController } from "./project";

const renderHome = (() => {
  const header = document.querySelector(".display-lh");
  const home = document.querySelector(".home-heading");
  const inbox = document.querySelector(".inbox");
  const renderHomeDOM = () => {
    const currentRenderedTasks = Array.from(document.querySelectorAll(".task"));

    if (header !== "Inbox") {
      currentRenderedTasks.forEach((task) =>
        task.setAttribute("style", "display:none;")
      );
      header.textContent = "Inbox";

      projectsController.defaultProject.tasks.forEach((task) => {
        for (let i = 0; i < currentRenderedTasks.length; i++) {
          if (
            task["title"] === currentRenderedTasks[i].childNodes[0].textContent
          ) {
            currentRenderedTasks[i].removeAttribute("style");
          }
        }
      });
    }
  };
  home.addEventListener("click", renderHomeDOM);
  inbox.addEventListener("click", renderHomeDOM);
})();

const renderProject = (projTitle) => {
  const header = document.querySelector(".display-lh");
  const currentProjects = document.querySelectorAll(".project-item");
  const currentTasks = Array.from(document.querySelectorAll(".task"));

  header.textContent = projTitle;
  currentTasks.forEach((task) => task.setAttribute("style", "display:none;"));

  currentProjects.forEach( () => {
    if (header.textContent === projTitle) {
      const currentRenderedTasks = Array.from(
        document.querySelectorAll(".task")
      );

      projectsController.projectsArray.forEach((proj) => {
        if (proj["projectName"] === projTitle) {
          proj["tasks"].forEach((task) => {
            for (let i = 0; i < currentRenderedTasks.length; i++) {
              if (
                task["title"] ===
                currentRenderedTasks[i].childNodes[0].textContent
              ) {
                currentRenderedTasks[i].removeAttribute("style");
              }
            }
          });
        }
      });
    }
  });
};

export { renderHome, renderProject };
