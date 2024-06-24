import { INIT_AUTH } from "@/constants/Auth";
import { createSlice } from "@reduxjs/toolkit";

 const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        auth : INIT_AUTH
    },
    reducers: {
        login (state , action ){
            state.auth.accessToken = action.payload.accessToken ; 
            state.auth.refreshToken = action.payload.refreshToken ; 
            state.auth.user = action.payload.user ; 
        }
        ,

        logout (state){
            state.auth = INIT_AUTH; 
        }


    }
})

export const {login , logout} = AuthSlice.actions ; 
export const reducerAuth = AuthSlice.reducer ; 


 