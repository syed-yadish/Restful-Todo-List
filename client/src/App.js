import "./styles/App.css";
import { useState, useEffect } from "react";
import TasksBoard from "./components/TasksBoard";
import CreateTask from "./components/CreateTask";
import { v4 as uuidv4 } from "uuid";
import client from "./services/AxiosServices";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  const createNewTask = (taskName) => {
    client
      .post("", {
        task: taskName,
        id: uuidv4(),
      })
      .then((response) => {
        setTaskItems([response.data, ...taskItems]);
      });
  };

  useEffect(() => {
    client.get('?_limit=20').then((response) => {
      setTaskItems(response.data);
    });
  }, []);

    const deleteTask = (id) => {
    client.delete(`${id}`);
    setTaskItems(
      taskItems.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="main--heading">My ToDo List</h1>
      <CreateTask createNewTask={createNewTask} />
      <TasksBoard
        tasks={taskItems}
        key={taskItems.id}
        cleanTasks={deleteTask}
      />
    </div>
  );
}

export default App;
