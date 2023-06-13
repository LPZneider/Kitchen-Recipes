import ReactDOM from "react-dom";
import "./ModalPortal.scss";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
export const ModalPortal = ({ children }) => {
  const handleClickModal = (e) => e.stopPropagation();
  const { handleClose } = useContext(ModalContext);
  return ReactDOM.createPortal(
    <article className="modal-conatiner" onClick={handleClose}>
      <div className="modal-modal" onClick={handleClickModal}>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};