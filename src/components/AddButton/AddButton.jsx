import "./index.css";
import "./App.css";

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
