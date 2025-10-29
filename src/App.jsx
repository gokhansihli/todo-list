import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal.jsx";
import TaskList from "./components/TaskList/Tasklist.jsx";
import AddButton from "./components/AddButton/AddButton.jsx";

function App() {
  const [IsModal, setIsModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = (newTask) => {
    setTasks((currTasks) => {
      return [...currTasks, newTask];
    });
  };

  const editTask = (newTask) => {
    setTasks((currTasks) => {
      return currTasks.map((task, index) => {
        return index === editIndex ? newTask : task;
      });
    });
  };

  const deleteTask = (clickedTaskIndex) => {
    setTasks((currTasks) => {
      return currTasks.filter((task, index) => {
        return index !== clickedTaskIndex;
      });
    });
  };

  return (
    <>
      <h1>To Do List</h1>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        setIsModal={setIsModal}
        setInput={setInput}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />

      <AddButton setIsModal={setIsModal} />

      <Modal
        input={input}
        isOpen={IsModal}
        setInput={setInput}
        setIsModal={setIsModal}
        addTask={addTask}
        editTask={editTask}
        handleChange={handleChange}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
    </>
  );
}

export default App;
