import "../styles/DeleteTask.css";

const DeleteTask = ({ cleanTasks, taskName }) => {
  const handleDelete = ({id}) => {
    cleanTasks(taskName);
  };

  return (
    <>
      <button className="todo__button--remove" onClick={handleDelete}>
        Remove
      </button>
    </>
  );
};

export default DeleteTask;
