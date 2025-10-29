export default function EditButton({
  task,
  index,
  setIsModal,
  setInput,
  setEditIndex,
}) {
  return (
    <button
      className="btn-appear edit-btn"
      onClick={() => {
        setIsModal(true);
        setInput(task);
        setEditIndex(index);
      }}
    >
      Edit
    </button>
  );
}
