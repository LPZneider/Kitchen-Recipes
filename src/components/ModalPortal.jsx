import ReactDOM from "react-dom";

export const ModalPortal = () => {
  return ReactDOM.createPortal(
    <div>
      <h2>PORTAL</h2>
      <p></p>
    </div>,
    document.getElementById("modal")
  );
};
