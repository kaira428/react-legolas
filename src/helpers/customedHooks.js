import { useContext } from "react"
import { DataContext } from "../App"

export const useDataContext = () => {
    return useContext(DataContext);
}