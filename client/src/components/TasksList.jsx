import DeleteTask from "./DeleteTask";
import "../styles/TasksList.css";

const TasksList = ({ task, cleanTasks }) => {
  return (
    <ul className="todo--list__card">
      <li className="task--name">{task.name}</li>
      <li>
        <DeleteTask cleanTasks={cleanTasks} taskName={task.id} key={task.id} />
      </li>
    </ul>
  );
};

export default TasksList;
