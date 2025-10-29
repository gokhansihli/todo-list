export default function CloseButton({ setIsModal, setInput, setEditIndex }) {
  return (
    <button
      className="btn-close"
      onClick={() => {
        setIsModal(false);
        setInput("");
        setEditIndex(null);
      }}
    >
      &#10005;
    </button>
  );
}
