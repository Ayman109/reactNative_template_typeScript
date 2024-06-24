import { Lang } from "@/constants/Enum";
import { en } from "@/i18/en";
import { fr } from "@/i18/fr";
import { changeLang } from "@/redux/setting/SettingSlice";
import { useDispatch, useSelector } from "react-redux";

export const useTransition = () => {
    const langSelector = useSelector<any>(state => state.reducerSetting.setting.lang)  ; 
    const dispatch = useDispatch() ; 
    
    const langChangeState = (lang : Lang) =>{
        dispatch(changeLang(lang))
    }

 const getLang = () =>{
    switch (langSelector) {
        case Lang.en:  return en ; 
        case Lang.fr :  return fr ;  
        default :  return en ; 
    }
 }

 return {langChangeState , getLang }  ;



}
