import { useContext } from "react";
import "./ButtonAddRecipe.scss";
import ModalContext from "../../../context/ModalContext";
import add from "/src/assets/add.svg";
const ButtonAddRecipe = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <button className="btn-add" onClick={handleModal}>
      <img src={add} alt="add" />
    </button>
  );
};

export default ButtonAddRecipe;
