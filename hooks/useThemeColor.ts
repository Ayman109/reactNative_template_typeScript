/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Enum";
import { useSelector } from "react-redux";


export function useThemeColor() {
    const theme = useSelector<any>(state => state.reducerSetting.setting.color) ;
    switch (theme) {
        case Theme.light:  return Colors.light ; 
        case Theme.dark :  return Colors.dark ;  
        default :  return Colors.light  ; 
    }

}
