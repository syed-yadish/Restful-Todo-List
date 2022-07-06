import DeleteTask from "./DeleteTask";
import "../styles/TasksList.css";

const TasksList = ({ task, toggleTask, cleanTasks }) => {
  return (
    <ul
      className={task.done ? "todo--completed" : "todo--incomplete"}
      id={task.id}
    >
      <li className="todo--toggle-completed">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </li>
      <li className="task--name">{task.name}</li>
      <li className="task--detail">{task.detail}</li>
      <li>
        {task.done && (
          <DeleteTask cleanTasks={cleanTasks} taskName={task.id} key={task.id} />
        )}
      </li>
    </ul>
  );
};

export default TasksList;
