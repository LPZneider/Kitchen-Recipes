import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import TableContext from "./CrudTableContext";
import ModalContext from "./ModalContext";
const idForm = Date.now();
const FormContext = createContext();
const initialForm = {
  name: "",
  reviews: null,
  cooked: false,
  ingredients: [{ id: idForm, name: "" }],
  preparation: "",
  peso: "",
  id: null,
};

const FormProviter = ({ children }) => {
  const [forms, setForms] = useState(initialForm);
  const { db, setDb } = useContext(TableContext);
  const { handleModal } = useContext(ModalContext);
  const dataUpdate = (itemTabla) => {
    setForms(itemTabla);
    handleModal();
  };
  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = () => {
    setForms({
      ...forms,
      cooked: !forms.cooked,
    });
  };

  const handleCreateItem = (e) => {
    e.preventDefault();
    setForms({
      ...forms,
      ingredients: [...forms.ingredients, { id: Date.now(), name: "" }],
    });
  };

  const handleDeleteItem = (e, id) => {
    e.preventDefault();
    const deleteitem = forms.ingredients.filter((item) => item.id !== id);
    setForms({
      ...forms,
      ingredients: deleteitem,
    });
  };

  const handleIngredients = (e, id) => {
    const newIngredients = forms.ingredients.map((el) =>
      el.id === id ? { ...el, name: e.target.value } : el
    );
    setForms({
      ...forms,
      ingredients: newIngredients,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    if (e.target.value === "Create") {
      forms.id = Date.now();
      setDb([...db, { ...forms }]);
    } else {
      const updateData = db.map((item) =>
        item.id === forms.id ? forms : item
      );
      setDb(updateData);
    }
    setForms(initialForm);
  };

  const data = {
    dataUpdate,
    handleChange,
    forms,
    handleCheckbox,
    handleIngredients,
    handleDeleteItem,
    handleCreateItem,
    handleSubmitForm,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormProviter };
export default FormContext;

FormProviter.propTypes = {
  children: PropTypes.node,
};
