import { AuthState } from "@/constants/Enum";
import { IAuthState } from "@/interfaces";
import { login, logout } from "@/redux/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux"

export const useAuth = () =>{
    const auth = useSelector<any>(state => state.reducerAuth) ;
    const dispatch = useDispatch();
    
    const authStateChange = (authState : AuthState , authInfo?: IAuthState)=>{
        switch (authState) {
            case AuthState.login : dispatch(login(auth)) ; break ; 
            case AuthState.logout : dispatch(logout()) ; break ; 
            default : break ;  
        }
    }
    

    return {authStateChange , auth} ; 
}
