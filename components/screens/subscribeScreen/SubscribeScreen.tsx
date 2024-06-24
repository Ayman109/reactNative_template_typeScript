import LoginForm from "@/components/organisme/loginForm/LoginForm"
import SubscribeForm from "@/components/organisme/subscribeForm/SubscribeForm";
import { ILoginForm } from "@/interfaces/organismes"

const SubscribeScreen = ({onChangeEmail ,onPress , onChangePassword , email , password }:ILoginForm)=>{
    return(
        <SubscribeForm
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onPress={onPress}
        email={email}
        password={password}
        />
    )
}

export default SubscribeScreen ; 