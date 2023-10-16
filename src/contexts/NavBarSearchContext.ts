import React from "react"
import { SubmitNavSearchAction } from "../reducers/NavBarSearchReducer"

interface SubmitNavSearch {
    search: string
    dispatch: React.Dispatch<SubmitNavSearchAction>
}
const NavBarSearchContext = React.createContext<SubmitNavSearch>({}as SubmitNavSearch)
export default NavBarSearchContext