
export interface SelectSortAction {
    type: "sortBy"
    sortBy: string
}

const SelectSortReducer = (state: string,action: SelectSortAction): string => {
    if (action.type === "sortBy") return action.sortBy
    return state
}
export default SelectSortReducer