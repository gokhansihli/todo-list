export default function TaskForm({
  input,
  editIndex,
  addTask,
  editTask,
  setEditIndex,
  setInput,
  setIsModal,
  handleChange,
}) {
  return (
    <>
      <label className="label" htmlFor="textarea-text">
        {" "}
        Add new task
      </label>
      <textarea
        className="textarea label-textarea"
        type="text"
        value={input}
        onChange={handleChange}
      ></textarea>

      <button
        className="create-save"
        onClick={() => {
          if (editIndex === null) {
            addTask(input);
          } else {
            editTask(input);
            setEditIndex(null);
          }
          setInput("");
          setIsModal(false);
        }}
      >
        {editIndex === null ? "Create" : "Save"}
      </button>
    </>
  );
}
