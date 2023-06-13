import { useContext } from "react";
import "./Boton.scss";
import ModalContext from "../context/ModalContext";

const Boton = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <button className="btn-add" onClick={handleModal}>
      <img src="/src/assets/add.svg" alt="add" />
    </button>
  );
};

export default Boton;
