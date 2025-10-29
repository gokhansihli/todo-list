import Task from "./Task/Task";

export default function TaskList({
  tasks,
  deleteTask,
  setIsModal,
  setInput,
  editIndex,
  setEditIndex,
}) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
          setIsModal={setIsModal}
          setInput={setInput}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      ))}
    </div>
  );
}
