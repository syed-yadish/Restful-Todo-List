import { useState } from "react";
import '../styles/CreateTask.css';

const CreateTask = ({ createNewTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetail, setNewTaskDetail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskTitle, newTaskDetail);
    setNewTaskTitle("");
    setNewTaskDetail("");
  };

  return (
    <div className="task--create--card">
      <h4 className="register--todo">Register New ToDo</h4>
    <form className="card--form" onSubmit={handleSubmit}>
      <div className="form__title">
      <h4>Title</h4>
      <input
        id = "txtTodoItemToAdd"
        type="text"
        placeholder="Enter a new Task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        </div>
        <div className="form__description">
      <h4>Description</h4>
      <input
        type="text"
        placeholder="Enter task detail"
        value={newTaskDetail}
        onChange={(e) => setNewTaskDetail(e.target.value)}
        />
        </div>
      <button className="form__btn" id="btnAddTodo">Add</button>
    </form>
    </div>
  );
};

export default CreateTask;
