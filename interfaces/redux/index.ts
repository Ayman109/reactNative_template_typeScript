import { Lang, Theme } from "@/constants/Enum"
import { IUser } from "../modal"

interface ISettingState {
    setting : {
        lang : Lang , 
        colors :Theme  , 
    }

}


interface IAuthState {
    accessToken  : string , 
    refreshToken : string , 
    user : IUser , 
}
export {ISettingState , IAuthState}