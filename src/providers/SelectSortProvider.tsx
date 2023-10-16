import { ReactNode, useReducer } from "react";
import SelectContext from "../contexts/SelectSortContext";
import SelectSortReducer from "../reducers/SelectSortReducer";

interface Props {
  children: ReactNode;
}
const SelectSortProvider = ({ children }: Props) => {
  const [sortBy, dispatch] = useReducer(SelectSortReducer, "");
  return (
    <SelectContext.Provider value={{ sortBy, dispatch }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectSortProvider;
