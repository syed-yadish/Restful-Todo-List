import TasksList from "./TasksList";
import '../styles/TasksBoard.css';



const TasksBoard = ({ tasks, toggleTask, cleanTasks }) => {
  const taskListItems = () => {
    const completed = tasks.filter((tg) => tg.done === true);
    const incompleted = tasks.filter((tg) => tg.done === false);
    const sortedTasks = incompleted.concat(completed);
    return sortedTasks.map((task, index) => (
      <TasksList
        cleanTasks={cleanTasks}
        task={task}
        key={task.id}
        toggleTask={toggleTask}
      />
    ));
  };

  return (
    <div className="todo--card">
      <div id="todoList">
      {taskListItems()}
      </div>
      {/* <ul id="todoList"></ul> */}
    </div>
  );
};

export default TasksBoard;
