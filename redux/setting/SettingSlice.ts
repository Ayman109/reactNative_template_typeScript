import { Colors } from "@/constants/Colors";
import { Lang } from "@/constants/Enum";
import { createSlice } from "@reduxjs/toolkit";

 const settingSlice = createSlice({
    name: "setting",
    initialState: {
        setting: {
            lang: Lang.en,
            colors : Colors.light , 
        }
    },
    reducers: {
        changeLang (state  , action): void {
            state.setting.lang = action.payload ; 
        } , 

        changeColor (state , action): void {
            state.setting.colors = action.payload ; 
        }, 

    }
})

export const {changeLang , changeColor} = settingSlice.actions ; 
export const reducerSetting = settingSlice.reducer ; 


 