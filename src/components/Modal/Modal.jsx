import "../../App.css";
import CloseButton from "./Form-Button/CloseButton";
import TaskForm from "./Form-Button/TaskForm";

export default function Modal({
  input,
  isOpen,
  setInput,
  setIsModal,
  addTask,
  editTask,
  handleChange,
  editIndex,
  setEditIndex,
}) {
  if (isOpen === true) {
    return (
      <>
        <div
          className="modal-overlay"
          onClick={() => {
            setIsModal(false);
          }}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {isOpen}
            <div className="label-textarea-create">
              <TaskForm
                input={input}
                setInput={setInput}
                setIsModal={setIsModal}
                addTask={addTask}
                editTask={editTask}
                editIndex={editIndex}
                setEditIndex={setEditIndex}
                handleChange={handleChange}
              />
            </div>
            <CloseButton
              setIsModal={setIsModal}
              setInput={setInput}
              setEditIndex={setEditIndex}
            />
          </div>
        </div>
      </>
    );
  }
}
