import TasksList from "./TasksList";
import "../styles/TasksBoard.css";

const TasksBoard = ({ tasks, cleanTasks }) => {
  const taskListItems = () => {
    return tasks.map((task) => (
      <TasksList
        task={task}
        cleanTasks={cleanTasks}
      />
    ));
  };

  return (
    <div className="todo--card">
      <div id="todoList">{taskListItems()}</div>
    </div>
  );
};

export default TasksBoard;
