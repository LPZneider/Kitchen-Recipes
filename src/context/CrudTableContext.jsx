import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ModalContext from "./ModalContext";
const TableContext = createContext();
const initialDb = [
  {
    id: 1,
    name: "Budin de frutos secos",
    reviews: 2,
    cooked: true,
    ingredients: [
      {
        id: 6516515861,
        name: "1 cucharada postre de esencia de vainilla",
      },
      {
        id: 61651654615,
        name: "1 huevo",
      },
      {
        id: 98974561,
        name: "ralladura de limón",
      },
      {
        id: 646518432655454,
        name: "½ taza de frutos secos y frutas deshidratadas o abrillantadas",
      },
      {
        id: 987516421,
        name: "1 taza de harina leudante",
      },
      {
        id: 78945132245,
        name: "½ taza de leche (120 mililitros)",
      },
      {
        id: 7894513224455,
        name: "⅓ taza de aceite",
      },
      {
        id: 7894513452245,
        name: "⅓ trozo de azúcar",
      },
      {
        id: 7894513224245,
        name: "25 centímetros cúbicos de licor de naranja)",
      },
    ],
    preparation:
      "El primer paso para hacer el budín de frutos secos con harina leudante consiste en hidratar las pasas de uva en el licor de naranja y cortar al gusto los frutos secos para mezclarlos con una cucharadita de la harina mencionada en los ingredientes. Si no deseas usar frutas como las pasas y naranjas, puedes usar toda la cantidad de frutos secos, en este caso, nueces y almendras. Resérvalo\n2 Por otro lado, bate el huevo a temperatura ambiente por unos 5 minutos, mientras agregas en forma de lluvia el azúcar. Luego, agrega el aceite en forma de hilo, mientras continúas batiendo, para que se emulsione. Condiméntalo con la esencia de vainilla y la ralladura de limón. También podría ser de naranja.\n\n 3 Agrega la harina leudante con ayuda de un tamiz o colador fino para que no se formen grumos. También agrega la leche a temperatura ambiente e intégralo con movimientos envolventes\n Antes de terminar de integrar, agrega las frutas y los frutos secos, descartando el licor. Termina de integrar los ingredientes con pocos movimientos suaves y envolventes.\n Lleva la preparación de tu budín de frutos secos con harina leudante a un molde previamente engrasado y enharinado para cocinarlo en el horno precalentado a 180 grados por unos 25 a 30 minutos. En este caso, es un molde de 24 x 9 x 6 cm\n Retira tu budín de frutos secos con harina leudante y aguarda a que se enfríe para desmoldarlo. En ese momento, cúbrelo conun sencillo glasé a base de azúcar impalpable y unas gotas de limón. Agrega agua de a poco hasta lograr una consistencia cremosa. Decora con unos frutos secos extra. ¡A comer! ¿Qué opinas de esta receta? Cuéntanos en los comentarios",
    peso: 521,
  },
  {
    id: 121,
    name: "Castañas asadas al microondas",
    reviews: 3,
    cooked: false,
    ingredients: [
      {
        id: 8745,
        name: "250 g de castañas",
      },
      {
        id: 842154515,
        name: "Sal (opcional)",
      },
    ],
    preparation:
      "Para comenzar, lavamos y secamos 250 g de castañas. Con un cuchillo de sierra afilado, hacemos un par de cortes en cruz a cada castaña, de forma que atraviesen las dos pieles de esta. Llevamos las castañas a un recipiente apto para microondas. Las haremos en tandas para que se cocinen bien. Con la cantidad de castañas que vamos a cocinar en esta receta, con 2 tantas en total será suficiente. Así que dividimos la cantidad de castañas en dos y cocinamos cada tanda según el siguiente paso. Cocinamos las castañas durante 2 minutos a máxima potencia teniendo en cuenta que este tiempo es para un microondas de 1000 W de potencia máxima. Si el microondas fuera de 800 W las dejaríamos medio minuto más y si fuese de 600 W tres minutos en total. De todas formas, si pasado el tiempo de cocinado viésemos que aún no se han abierto las dos pieles, podemos darles algunos segundos más. Todo dependerá de cada microondas. Una vez fuera del microondas, esperamos a que las castañas estén templadas para poder pelarlas. Si se desea, se les puede añadir un poco de sal.",
    peso: 250,
  },
  {
    id: 32,
    name: "Receta de pastel",
    reviews: 4,
    cooked: true,
    ingredients: [
      { id: 811, name: "5 huevos" },
      { id: 814711, name: "1 taza de azúcar (200 gramos)" },
      { id: 854611, name: "2 cucharadas soperas de esencia de vainilla" },
      { id: 8511, name: "1 taza de leche entera" },
      { id: 84111, name: "½ taza de mantequilla derretida" },
      { id: 8151, name: "½ taza de mantequilla derretida" },
      { id: 81231, name: "1½ tazas de harina (210 gramos)" },
      { id: 8121, name: " 1 cucharada sopera de polvo para hornear" },
    ],
    preparation:
      "Mezcla todos los ingredientes hasta formar una masa homogénea, puedes hacerlo en la licuadora o si deseas también puedes utilizar la batidora eléctrica o un batidor de globo. Para hacerlo, empieza mezclando los ingredientes líquidos que son los huevos, el aceite, la vainilla, la leche y finalmente el azúcar. Mezcla bien todos estos ingredientes que deben estar a temperatura ambiente. A continuación, incorpora la mantequilla derretida tibia mientras bates para lograr que se distribuya bien y no se quede solo en la superficie. Por último, coloca la harina y el polvo de hornear en un bowl grande y vierte encima la mezcla de ingredientes líquidos. Si lo estás haciendo a mano bate desde el centro hacia afuera para no tener grumos, ya que es una masa bastante fluida. Prepara un molde de 20 cm de diámetro para hornear. Engrasa toda la superficie y las paredes con mantequilla o aceite, coloca una tira o un disco de papel manteca en la base y espolvorea con un poco de harina. Vierte la mezcla en el molde y hornea en un horno previamente graduado con la temperatura en 180 °C durante 1 hora aproximadamente o hasta que compruebes que esté listo. Para saber si el bizcocho está listo, es sencillo, solo pincha la torta con un palillo de madera y, si este sale con restos de masa, continúa horneando por unos minutos más hasta que observes que salga limpio. Cuando esté listo el pastel de vainilla, retira del horno y deja reposar unos minutos. Luego, desmolda y decora al gusto. ¡A comer! Cuéntanos en los comentarios tu opinión y comparte con nosotros una fotografía del resultado final.",
    peso: 255,
  },
];

const TableProvider = ({ children }) => {
  const [db, setDb] = useState(initialDb);
  const { handleClose } = useContext(ModalContext);
  const [radiovalue, setRadiovalue] = useState("All");
  const [table, setTable] = useState(db);
  useEffect(() => {
    handleClose(false);
    setTable([...db]);
  }, [db]);

  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const search = formData.get("buscar");
    const dbSearch = db.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ? item : null
    );
    setTable([...dbSearch]);
    form.reset();
  };

  const handleActive = () => setActive(!active);

  const handleCheckboxCooked = (e, id) => {
    e.stopPropagation();
    const activeDb = db.map((item) =>
      item.id === id ? { ...item, cooked: !item.cooked } : item
    );
    setDb(activeDb);
  };
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
    handleCheckboxCooked,
    radiovalue,
    handleClickRadio,
    active,
    handleActive,
    table,
    setTable,
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
