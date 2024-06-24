import { Lang } from "@/constants/Enum";
import { en } from "@/i18/en";
import { fr } from "@/i18/fr";
import { useSelector } from "react-redux";

export const useTransition = () => {
    const langSelector = useSelector<any>(state => state.reducerSetting.setting.lang)  ; 
;    
    switch (langSelector) {
        case Lang.en:  return en ; 
        case Lang.fr :  return fr ;  
        default :  return en ; 
    }


}
