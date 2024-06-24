import { useSelector } from "react-redux"

export const useAuth = () =>{
    const auth = useSelector<any>(state => state.reducerAuth) ; 
    return auth ; 
}
