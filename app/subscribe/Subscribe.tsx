import SubscribeScreen from "@/components/screens/subscribeScreen/SubscribeScreen";
import { useState } from "react";

const Subscribe = ({navigation})=>{
    const [email , setEmail ] = useState<string>("") ; 
    const [password , setPassword ] = useState<string>("") ; 

    return (
       <SubscribeScreen
            onChangeEmail={(text: string) => { setEmail(text); } }
            onChangePassword={(text: string) => setPassword(text)}
            onPress={() => {navigation.navigate({name : 'Login' , params : ''}) } }
            email={email} 
            password={password}            />
    )

}

export default Subscribe ; 