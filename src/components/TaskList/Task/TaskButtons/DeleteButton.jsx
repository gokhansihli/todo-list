export default function DeleteButton({ deleteTask, index }) {
  return (
    <button
      className="btn-appear delete-btn"
      onClick={() => {
        deleteTask(index);
      }}
    >
      Delete
    </button>
  );
}
