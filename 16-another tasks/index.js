const task = {
    title: "task",
    id: 1,
    priority: 1,
}

const task2 = {
    title: "task",
    id: 2,
    priority: 1,
}

const task3 = {
    title: "task",
    id: 3,
    priority: 2,
}

const task4 = {
    title: "task",
    id: 4,
    priority: 4,
}

const toDoList = {
    tasks: [],
    checkIsBlank: function(index) {
        return this.tasks.length !== 0 && index === -1
    },
    addTask: function (task) {
        if (this.tasks.length !== 0 && this.tasks.findIndex(t => t.id === task.id) !== -1) {
            console.log(`Задача с id ${task.id} уже добавлена`);
            return false;
        }
        this.tasks.push(task);
        return true;
    },
    deleteTask: function (id) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (this.checkIsBlank(index)) {
            console.log(`Задачи с id${id} нет в базе`);
            return false;
        }

        this.tasks.splice(index, 1);
        return true;
    },
    updatePropertyTask: function (taskId, propertyKey, propertyValue) {
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (this.checkIsBlank(index)) {
            console.log(`Задачи с id ${taskId} нет в базе`);
            return false;
        }
        this.tasks[index][propertyKey] = propertyValue;
        return true;
    },
    sortTasksToPriority: function () {
        if (this.tasks.length === 0) {
            console.log("Список задач пуст");
            return false;
        }
        this.tasks.sort((a, b) => b?.priority - a?.priority);
    }
}



const newTask  = {
    tasks: [{
        id: 1,
        name: "тест",
    description: "описание",
    order: 0
}],
}
const addTask = toDoList.addTask.bind(newTask);
const deleteTask = toDoList.deleteTask.bind(newTask);
const updateTask = toDoList.updatePropertyTask.bind(newTask);
const sortTasksToPriority = toDoList.sortTasksToPriority.bind(newTask);
const checkIsBlank = toDoList.checkIsBlank.bind(newTask);
const updateDescriptionTask = function (taskId, newDescription) {
    const index = this.tasks.findIndex(t => t.id === taskId);
    if (this.checkIsBlank(index)) {
        console.log(`Задачи с id ${taskId} нет в базе`);
        return false;
    }

    this.tasks[index].description = newDescription;
    return true;
}

newTask.addTask = addTask;
newTask.deleteTask = deleteTask;
newTask.updatePropertyTask = updateTask;
newTask.sortTasksToPriority = sortTasksToPriority;
newTask.checkIsBlank = checkIsBlank;
newTask.updateDescriptionTask = updateDescriptionTask.bind(newTask);

newTask.addTask(task);
newTask.addTask(task2);
newTask.addTask(task3);
newTask.addTask(task4);
console.log(newTask.tasks);
newTask.deleteTask(2);
console.log(newTask.tasks);
newTask.updatePropertyTask(3, "title", "newTask");
console.log(newTask.tasks);
newTask.updatePropertyTask(4, "priority", 6);
console.log(newTask.tasks);
newTask.sortTasksToPriority();
console.log(newTask.tasks);

newTask.updateDescriptionTask(4, "newDescription");
console.log(newTask.tasks)