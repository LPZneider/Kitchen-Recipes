import { createContext, useState } from "react";
import PropTypes from "prop-types";
const ModalContext = createContext();

const ModalProviter = ({ children }) => {
  const [modal, setModal] = useState(false);

  const handleModal = (e) => {
    console.log(e.target);
    setModal(!modal);
  };

  const handleClose = () => {
    setModal(false);
  };
  const data = { modal, handleModal, handleClose };
  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export { ModalProviter };
export default ModalContext;

ModalProviter.propTypes = {
  children: PropTypes.node,
};
