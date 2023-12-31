import ReactDOM from "react-dom";
import "./ModalPortal.scss";
import { useContext } from "react";
import ModalContext from "../../../context/ModalContext";
import FormContext from "../../../context/FormContext";
import BotonClose from "../../../models/BotonClose/BotonClose";

export const ModalPortal = ({ children, isForm = false, funCloseModal }) => {
  const handleClickModal = (e) => e.stopPropagation();
  const { handleClose } = useContext(ModalContext);
  const { resetFormulario } = useContext(FormContext);

  const handleClickPortal = () => {
    handleClose();
    if (isForm) resetFormulario();
  };

  return ReactDOM.createPortal(
    <article className="modal-conatiner" onClick={handleClickPortal}>
      <div
        className={isForm ? "modal-modal modal-form" : "modal-modal modal-item"}
        onClick={handleClickModal}
      >
        <BotonClose funcForm={isForm ? handleClickPortal : funCloseModal} />
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};
