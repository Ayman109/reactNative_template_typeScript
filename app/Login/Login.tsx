import LoginScreen from "@/components/screens/loginScreen/LoginScreen";
import { useState } from "react";

const Login = ({navigation})=>{
    const [email , setEmail ] = useState<string>("") ; 
    const [password , setPassword ] = useState<string>("") ; 

    return (
       <LoginScreen
            onChangeEmail={(text: string) => { setEmail(text); } }
            onChangePassword={(text: string) => setPassword(text)}
            onPress={() => {navigation.navigate({name : 'Subscribe' , params : ''}) } }
            email={email} 
            password={password}            />
    )

}

export default Login ; 