import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import Reduce from "./Reduce";

const AppContext = createContext();

function AppProvider(prop) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const { children } = prop;

  const initalValue = {
    loading: false,
    total: 0,
    cart: cart,
  };

  const [state, dispatch] = useReducer(Reduce, initalValue);

  const fetchData = async () => {
    dispatch({ type: "Loading" });
  };

  function addItem(item, id) {
    // dispatch({ type: "addItem", payload: id });
    const newItem = { ...item, amount: 1 };
    const cartItem = cart.find((ite) => {
      return ite.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }
  useEffect(() => {
    const newCart = cart.reduce((acum, curn) => {
      return acum + curn.price * curn.amount;
    }, 0);
    setTotal(newCart);
  }, [cart]);

  function increase(id) {
    const newCart = cart.map((item) => {
      if (item.id === id.id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
  }
  function decrease(id) {
    const newCart = cart
      .map((item) => {
        if (item.id === id.id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount >= 1);
    setCart(newCart);
  }

  function Delete(id) {
    const newCart = cart.filter((item) => item.id !== id.id);
    setCart(newCart);
  }

  const values = {
    ...state,
    fetchData,
    addItem,
    cart,
    increase,
    decrease,
    total,
    setCart,
    open,
    setOpen,
    Delete,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
