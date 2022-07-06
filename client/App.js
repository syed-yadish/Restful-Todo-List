import "./styles/App.css";
import { useState, useEffect } from "react";
import TasksBoard from "./components/TasksBoard";
import CreateTask from "./components/CreateTask";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskItems, setTaskItems] = useState(getLocalStorage());
  const [deleteItem, setdeleteItem] = useState("");

  function getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      return data;
    } else {
      return [];
    }
  }

  useEffect(() => {
    const test = localStorage.setItem("tasks", JSON.stringify(taskItems));
    console.log(test);
  }, [taskItems]);

  const createNewTask = (taskName, taskDetail) => {
    setTaskItems([
      ...taskItems,
      { name: taskName, detail: taskDetail, id: uuidv4(), done: false },
    ]);
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    setTaskItems(taskItems.filter((task) => task.id !== deleteItem));
    setdeleteItem("");
  }, [deleteItem]);

  return (
    <div className="App">
      <h1 className="main--heading">My ToDo List</h1>
      <CreateTask createNewTask={createNewTask} />
      <TasksBoard
        tasks={taskItems}
        toggleTask={toggleTask}
        key={taskItems.id}
        cleanTasks={setdeleteItem}
      />
    </div>
  );
}

export default App;
