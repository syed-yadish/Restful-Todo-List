import { useState } from "react";
import '../styles/CreateTask.css';

const CreateTask = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      createNewTask(newTask);
      setNewTask("");
    };

  return (
    <div className="task--create--card">
      <h4 className="register--todo">Register New ToDo</h4>
    <form className="card--form" onSubmit={handleSubmit}>
      <div className="form__title">
      <h4>Task</h4>
      <input
        id = "txtTodoItemToAdd"
        type="text"
        placeholder="Enter a new Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required={true}
        />
        </div>
      <button className="form__btn" id="btnAddTodo">Add</button>
    </form>
    </div>
  );
};

export default CreateTask;
