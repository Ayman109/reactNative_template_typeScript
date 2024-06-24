import { Colors } from "@/constants/Colors";
import { Values } from "@/constants/Values";
import { Dimensions, StyleSheet } from "react-native";

export const style  = StyleSheet.create({
        input :  {
            backgroundColor : Colors.light.background, 
            width : Values.inputButton.width ,
            height : Values.inputButton.heigth , 
            borderWidth : Values.inputButton.border ,
            padding : Values.inputButton.padding , 
            margin : Values.inputButton.margin  , 
            borderRadius : Values.inputButton.borderRadius,
            borderColor : Colors.light.text
        }

});