import { useContext, createContext } from "react";

export const storeContext = createContext({
  products: [],
  setProduct: () => {},
  cartData: [],
  setCart: () => {},
  loading: true,
  setLoading: () => {},
  login: false,
  setLogin: () => {},

  addCart: (id) => {},
  category: [],
  filterData:'',
  setFilterData:()=>{}
});

export function useStore() {
  return useContext(storeContext);
}
export const storeProvider = storeContext.Provider;
