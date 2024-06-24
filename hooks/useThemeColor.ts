/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { Theme } from "@/constants/Enum";
import { changeColor } from "@/redux/setting/SettingSlice";
import { useDispatch, useSelector } from "react-redux";


export function useThemeColor() {
    const theme = useSelector<any>(state => state.reducerSetting.setting.color) ;
    
    const dispatch = useDispatch() ; 

    const themeChangeState = (color : Theme)=>{
        dispatch(changeColor(color == Theme.dark ? Colors.dark : Colors.light)) ; 
    }
    
    const getColors  = () =>{
        switch (theme) {
            case Theme.light:  return Colors.light; 
            case Theme.dark :  return Colors.dark ;  
            default :  return Colors.light  ; 
        }
    }

    return {themeChangeState , getColors}
}
