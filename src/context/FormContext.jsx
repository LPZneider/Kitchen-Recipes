import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import TableContext from "./CrudTableContext";
const idForm = Date.now();
const FormContext = createContext();
const initialForm = {
  name: "",
  reviews: null,
  cooked: false,
  ingredients: [
    { id: idForm, name: "" },
    { id: idForm + 2, name: "" },
  ],
  preparation: "",
  peso: null,
  id: null,
};

const FormProviter = ({ children }) => {
  const [forms, setForms] = useState(initialForm);
  const { db, setDb } = useContext(TableContext);

  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    e.target.value === "false"
      ? (e.target.value = true)
      : (e.target.value = false);

    setForms({
      ...forms,
      [e.target.name]: e.target.value === "true",
    });
  };
  const handleClickIngrendient = (e) => {};
  const handleIngredients = (e, id) => {
    const newIngredients = forms.ingredients.map((el) =>
      el.id === id ? { ...el, name: e.target.value } : el
    );
    setForms({
      ...forms,
      ingredients: newIngredients,
    });
  };

  const handleSubmitForm = () => {};

  const data = {
    handleChange,
    forms,
    handleCheckbox,
    handleIngredients,
    handleClickIngrendient,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormProviter };
export default FormContext;

FormProviter.propTypes = {
  children: PropTypes.node,
};
