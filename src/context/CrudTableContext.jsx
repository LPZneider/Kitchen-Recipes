import { createContext, useState } from "react";
import PropTypes from "prop-types";
const TableContext = createContext();
const initialDb = [
  {
    name: "Budin de frutos secos",
    reviews: 4,
    cooked: true,
    peso: 5,
  },
  {
    name: "Castañas asadas al microondas",
    reviews: 4,
    cooked: false,
    peso: 5,
  },
  {
    name: "Receta de pastel",
    reviews: 4,
    cooked: true,
    peso: 5,
  },
];
const TableProvider = ({ children }) => {
  const [db, setDb] = useState(initialDb);
  const [radiovalue, setRadiovalue] = useState("All");
  const [table, setTable] = useState(db);

  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const search = formData.get("buscar");
    const dbSearch = db.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ? item : null
    );
    console.log(dbSearch);
    setTable([...dbSearch]);
    form.reset();
  };

  const handleActive = () => setActive(!active);

  const handleClickRadio = (e) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const radio = formData.get("category");
    if (radio === "all") {
      setTable(db);
    } else if (radio === "active") {
      const activeDb = db.filter((item) => (item.cooked ? item : null));

      setTable([...activeDb]);
    } else if (radio === "inactive") {
      const inactiveDb = db.filter((item) => (!item.cooked ? item : null));

      setTable([...inactiveDb]);
    }
    const capitalRadio = radio?.charAt(0).toUpperCase() + radio?.slice(1);
    setRadiovalue(capitalRadio);
    setTimeout(() => {
      setActive(!active);
    }, 210);
  };

  const data = {
    radiovalue,
    handleClickRadio,
    active,
    handleActive,
    table,
    db,
    handleSubmit,
  };
  return <TableContext.Provider value={data}>{children}</TableContext.Provider>;
};

TableProvider.propTypes = {
  children: PropTypes.node,
};
export { TableProvider };
export default TableContext;
