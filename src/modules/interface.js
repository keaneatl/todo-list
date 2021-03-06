import { addTask } from "./task";
import { addProj } from "./project";
import { renderProject } from "./switchDOM";

const hamBurger = (() => {
  const hambgButton = document.querySelector(".hambg");
  const mainDisp = document.querySelector(".display");
  const sideBar = document.querySelector(".sidebar");
  const closeHambg = document.querySelector(".close-hambg");

  hambgButton.addEventListener("click", () => {
    mainDisp.classList.toggle("display");
    mainDisp.classList.toggle("hide-disp");
    sideBar.classList.toggle("sidebar");
    sideBar.classList.toggle("show-sb");
  });
  closeHambg.addEventListener("click", () => {
    mainDisp.classList.toggle("display");
    mainDisp.classList.toggle("hide-disp");
    sideBar.classList.toggle("sidebar");
    sideBar.classList.toggle("show-sb");
  });
})();

const generateTaskDOM = (title, desc, due) => {
  const addTaskBtn = document.querySelector(".add-task");
  const header = document.querySelector(".display-lh");
  const taskContainer = document.createElement("div");
  const taskCheck = document.createElement("img");
  const taskTitle = document.createElement("span");
  const taskDesc = document.createElement("p");
  const dueDate = document.createElement("p");

  taskContainer.classList.add("task");
  taskTitle.classList.add("task-h");
  taskCheck.classList.add("ico", "checkbox");
  dueDate.classList.add("due-date");
  taskDesc.classList.add("task-desc");
  taskCheck.src = "./images/icons/circle-svgrepo-com.svg";

  taskCheck.addEventListener("click", () => taskContainer.remove());

  if (!title && !desc && !due) {
    const taskTitleInput = document.createElement("input");
    const taskDescInput = document.createElement("input");
    const dueDateInput = document.createElement("input");
    taskTitleInput.classList.add("task-h-input");
    taskDescInput.classList.add("task-desc-input");
    taskTitleInput.type = "text";
    taskTitleInput.placeholder = "Title";
    dueDateInput.type = "date";
    taskDescInput.type = "text";
    taskDescInput.placeholder = "Description";

    taskTitleInput.addEventListener("change", () => {
      taskTitle.append(taskTitleInput.value);
      taskTitleInput.remove();
    });
    dueDateInput.addEventListener("change", () => {
      dueDate.append(dueDateInput.value);
      dueDateInput.remove();
    });
    taskDescInput.addEventListener("change", () => {
      taskDesc.append(taskDescInput.value);
      taskDescInput.remove();
    });
    taskTitle.append(taskCheck, taskTitleInput);
    taskDesc.append(taskDescInput);
    dueDate.append(dueDateInput);

    taskContainer.append(taskTitle, dueDate, taskDesc);
    addTaskBtn.insertAdjacentElement("beforebegin", taskContainer);

    addTask(header.textContent);
  } else {
    taskTitle.append(taskCheck, title);
    dueDate.textContent = due;
    taskDesc.textContent = desc;
    taskContainer.append(taskTitle, dueDate, taskDesc);
    addTaskBtn.insertAdjacentElement("beforebegin", taskContainer);
  }
};

const renderTaskDOM = (() => {
  const addTaskBtn = document.querySelector(".add-task");
  addTaskBtn.addEventListener("click", () => generateTaskDOM());
})();

const generateProjTitleDOM = (title) => {
  const projContainer = document.querySelector(".project-items-ul");
  const projItem = document.createElement("li");
  const projIcon = document.createElement("img");
  const closeIcon = document.createElement("img");
  const projTitle = document.createElement("span");

  projItem.classList.add("project-item");
  projIcon.classList.add("ico");
  projIcon.classList.add("add-proj");
  projIcon.src = "./images/icons/task-list-svgrepo-com.svg";
  closeIcon.classList.add("close-proj");
  closeIcon.src = "./images/icons/close-svgrepo-com.svg";

  if (!title) {
    const projTitleInput = document.createElement("input");
    projTitleInput.type = "text";
    projTitleInput.placeholder = "Project Name";
    projTitleInput.classList.add("proj-title-input");

    projTitleInput.addEventListener("change", () => {
      projTitle.append(projTitleInput.value);
      projTitleInput.remove();
      projItem.addEventListener("click", () =>
        renderProject(projTitle.textContent)
      );
      addProj(projTitle.textContent);
    });
    projTitle.append(projTitleInput);
  } else {
    projTitle.textContent = title;
    projItem.addEventListener("click", () => renderProject(title));
  }

  closeIcon.addEventListener("click", () => {
    projItem.remove();
  });
  projItem.append(projIcon, projTitle, closeIcon);
  projContainer.append(projItem);
};

const newProject = (() => {
  const newProjBtn = document.querySelector(".add-proj");
  newProjBtn.addEventListener("click", () => generateProjTitleDOM());
})();

export {
  hamBurger,
  generateTaskDOM,
  renderTaskDOM,
  newProject,
  generateProjTitleDOM,
};
