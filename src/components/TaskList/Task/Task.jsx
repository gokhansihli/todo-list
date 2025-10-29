import DeleteButton from "./TaskButtons/DeleteButton";
import EditButton from "./TaskButtons/EditButton";

export default function Task({
  task,
  index,
  deleteTask,
  setIsModal,
  setInput,
  setEditIndex,
}) {
  return (
    <>
      <div className="task-container">
        <div className="task-card">
          <span>{task}</span>
          <div className="task-btn">
            <EditButton
              task={task}
              index={index}
              setIsModal={setIsModal}
              setInput={setInput}
              setEditIndex={setEditIndex}
            />
            <DeleteButton index={index} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </>
  );
}
