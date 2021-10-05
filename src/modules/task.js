import { projectsController } from "./project";

const taskFactory = (title, desc, dueDate) => {
  return { title, desc, dueDate };
};

const addTask = (project) => {
  const newTask = taskFactory();
  let tasks = Array.from(document.querySelectorAll(".task"));

  if (project === "Inbox") {
    tasks.forEach((task) => {
      const taskHeaderText = task.querySelector(".task-h");
      if (taskHeaderText.textContent !== "") return;

      const removeTask = task.querySelector(".checkbox");
      const taskHeader = task.childNodes[0];
      const dueDate = task.childNodes[1];
      const taskDesc = task.childNodes[2];

      taskHeader.addEventListener("change", () => {
        newTask.title = taskHeader.childNodes[1].nodeValue;
        localStorage.setItem(
          "defaultProject",
          JSON.stringify(projectsController.defaultProject)
        );
      });
      taskDesc.addEventListener("change", () => {
        newTask.desc = taskDesc.childNodes[0].nodeValue;
        localStorage.setItem(
          "defaultProject",
          JSON.stringify(projectsController.defaultProject)
        );
      });
      dueDate.addEventListener("change", () => {
        newTask.dueDate = dueDate.childNodes[0].nodeValue;
        localStorage.setItem(
          "defaultProject",
          JSON.stringify(projectsController.defaultProject)
        );
      });
      projectsController.defaultProject.tasks.push(newTask);
      removeTask.addEventListener("click", () => {
        const thisTaskIndex =
          projectsController.defaultProject.tasks.indexOf(newTask);
        projectsController.defaultProject.tasks.splice(thisTaskIndex, 1);
        localStorage.setItem(
          "defaultProject",
          JSON.stringify(projectsController.defaultProject)
        );
      });
      localStorage.setItem(
        "defaultProject",
        JSON.stringify(projectsController.defaultProject)
      );
    });
  } else {
    tasks.forEach((task) => {
      const taskHeaderText = task.querySelector(".task-h");
      if (taskHeaderText.textContent !== "") return;
      const taskHeader = task.childNodes[0];
      const dueDate = task.childNodes[1];
      const taskDesc = task.childNodes[2];
      const removeTask = task.querySelector(".checkbox");

      taskHeader.addEventListener("change", () => {
        newTask.title = taskHeader.childNodes[1].nodeValue;
        localStorage.setItem(
          "projects",
          JSON.stringify(projectsController.projectsArray)
        );
      });
      taskDesc.addEventListener("change", () => {
        newTask.desc = taskDesc.childNodes[0].nodeValue;
        localStorage.setItem(
          "projects",
          JSON.stringify(projectsController.projectsArray)
        );
      });
      dueDate.addEventListener("change", () => {
        newTask.dueDate = dueDate.childNodes[0].nodeValue;
        localStorage.setItem(
          "projects",
          JSON.stringify(projectsController.projectsArray)
        );
      });

      projectsController.projectsArray.forEach((proj) => {
        if (proj["projectName"] === project) {
          proj["tasks"].push(newTask);

          removeTask.addEventListener("click", () => {
            const currentTaskIndex = proj["tasks"].indexOf(newTask);
            proj["tasks"].splice(currentTaskIndex, 1);
            localStorage.setItem(
              "projects",
              JSON.stringify(projectsController.projectsArray)
            );
          });
        }
      });
      localStorage.setItem(
        "projects",
        JSON.stringify(projectsController.projectsArray)
      );
    });
  }

  return { newTask };
};

export { addTask as default };
