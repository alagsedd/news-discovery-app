import React from "react"
import { SelectSortAction } from "../reducers/SelectSortReducer"

interface SelectSortContext {
    sortBy: string | undefined
    dispatch: React.Dispatch<SelectSortAction>
}

const SelectContext = React.createContext<SelectSortContext>({} as SelectSortContext)
export default SelectContext
