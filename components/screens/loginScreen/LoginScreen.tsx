import LoginForm from "@/components/organisme/loginForm/LoginForm"
import { ILoginForm } from "@/interfaces/organismes"
import { View } from "react-native";
import { styles } from "./styles/styles";

const LoginScreen = ({onChangeEmail ,onPress , onChangePassword , email , password }:ILoginForm)=>{
    return(
    <View style = {styles.loginScreen}>
    <LoginForm
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onPress={onPress}
        email={email}
        password={password}
        />
    </View>

    )
}

export default LoginScreen ; 