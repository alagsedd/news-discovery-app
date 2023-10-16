import { ReactNode, useReducer } from "react";
import NavBarSearchReducer from "../reducers/NavBarSearchReducer";
import NavBarSearchContext from "../contexts/NavBarSearchContext";

interface Props {
  children: ReactNode;
}
const NavBarContextProvider = ({ children }: Props) => {
  const [search, dispatch] = useReducer(NavBarSearchReducer, "");
  return (
    <NavBarSearchContext.Provider value={{ search, dispatch }}>
      {children}
    </NavBarSearchContext.Provider>
  );
};

export default NavBarContextProvider;
