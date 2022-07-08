import TasksList from "./TasksList";
import "../styles/TasksBoard.css";

const TasksBoard = ({ tasks }) => {
  const taskListItems = () => {
    return tasks.map((task) => (
      <TasksList
        task={task}
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
