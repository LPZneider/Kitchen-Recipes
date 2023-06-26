import { useContext } from "react";
import "./Boton.scss";
import ModalContext from "../../context/ModalContext";
import add from "/src/assets/add.svg";
const Boton = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <button className="btn-add" onClick={handleModal}>
      <img src={add} alt="add" />
    </button>
  );
};

export default Boton;
