export default function AddButton({ setIsModal }) {
  return (
    <button
      className="btn-add"
      onClick={() => {
        setIsModal(true);
      }}
    >
      +
    </button>
  );
}
