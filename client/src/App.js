import "./styles/App.css";
import { useState, useEffect } from "react";
import TasksBoard from "./components/TasksBoard";
import CreateTask from "./components/CreateTask";
import { v4 as uuidv4 } from "uuid";
import client from "./services/AxiosServices";

function App() {
  // const defaultValue = { id: 'id', name: 'Empty Task' }
  const [taskItems, setTaskItems] = useState([]);

  const createNewTask = (taskName) => {
    client
      .post("", {
        Task: taskName,
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

  // fetch("https://localhost:7109/api/TodoLy")
  //   .then((res) => {
  //     /* IF statement checks server response: .catch() does not do this! */
  //     if (res.ok) {
  //       console.log("HTTP request successful");
  //     } else {
  //       console.log("HTTP request unsuccessful");
  //     }
  //     return res;
  //   })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data)) // the data
  //   .catch((error) => console.log(error)); // error handling

  // const getTasks = async () => {
  //   const response = await fetch("https://localhost:7109/api/TodoLy");
  //   const deserializedJSON = await response.json();
  //   let tempData = [...taskItems, deserializedJSON];
  //   if(taskItems[0].id == defaultValue.id) tempData = [deserializedJSON];
  //   setTaskItems(tempData);
  // }

  // const createNewTask = (taskName) => {
  //   setTaskItems([...taskItems, { name: taskName, id: uuidv4() }]);
  // };



 

  // useEffect(() => {
  //   setTaskItems(taskItems.filter((task) => task.id !== deleteItem));
  //   setdeleteItem("");
  // }, [deleteItem]);

  // const deleteTask = (id) => {
  //   client.delete(`${id}`);
  //   setTaskItems(
  //     taskItems.filter((task) => {
  //       return task.id !== id;
  //     })
  //   );
  // };

  //   const deleteTask = useEffect(() => {
  //     async function deletePost() {
  //         await fetch('https://localhost:7109/api/TodoLy/{id}', { method: 'DELETE' });
  //     }
  //     deletePost();
  // }, []);

  return (
    <div className="App">
      <h1 className="main--heading">My ToDo List</h1>
      <CreateTask createNewTask={createNewTask} />
      <TasksBoard
        tasks={taskItems}
        key={taskItems.id}
        // cleanTasks={deleteTask}
      />
    </div>
  );
}

export default App;
