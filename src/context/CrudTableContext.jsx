import { createContext, useState } from "react";
import PropTypes from "prop-types";
const TableContext = createContext();
const initialDb = [
  {
    id: 1,
    name: "Budin de frutos secos",
    reviews: 4,
    cooked: true,
    ingredients: [
      {
        id: 6516515861,
        name: "1⅓ tazas de harina 0000",
      },
      {
        id: 61651654615,
        name: "1 huevo",
      },
      {
        id: 98974561,
        name: "½ taza de agua (120 mililitros)",
      },
      {
        id: 646518432655454,
        name: "⅓ taza de aceite",
      },
      {
        id: 987516421,
        name: "⅓ taza de azúcar (66 gramos)",
      },
      {
        id: 78945132245,
        name: "30 gramos de frutos secos",
      },
    ],
    preparation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.",
    peso: 5,
  },
  {
    id: 121,
    name: "Castañas asadas al microondas",
    reviews: 4,
    cooked: false,
    ingredients: [
      {
        id: 8745,
        name: "30 gramos de frutos secos",
      },
      {
        id: 842154515,
        name: "⅓ taza de aceite",
      },
      {
        id: 98567671,
        name: "1⅓ tazas de harina",
      },
      {
        id: 98667,
        name: "1 huevo",
      },
    ],
    preparation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.",
    peso: 5,
  },
  {
    id: 32,
    name: "Receta de pastel",
    reviews: 4,
    cooked: true,
    ingredients: [{ id: 811, name: "11⅓ tazas de harina" }],
    preparation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. N ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.andae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.ae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error. ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.andae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.ae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.on modi porro aliquid, quae natus repudiandandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.andae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.ae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.",
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
    setDb,
    handleSubmit,
  };
  return <TableContext.Provider value={data}>{children}</TableContext.Provider>;
};

TableProvider.propTypes = {
  children: PropTypes.node,
};
export { TableProvider };
export default TableContext;
