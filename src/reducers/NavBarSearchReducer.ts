export interface SubmitNavSearchAction {
    type: "onSearch"
    search: string 
}
const NavBarSearchReducer = (state: string,action: SubmitNavSearchAction): string => {
    if ( action.type === "onSearch") return action.search
    return state
}
export default NavBarSearchReducer