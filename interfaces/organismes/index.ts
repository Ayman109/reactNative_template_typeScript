import { ILayout } from "../layouts";

interface ILoginForm extends ILayout {
  onPress : ()=>void;
  onChangeEmail : (text:string)=>void;
  onChangePassword : (text:string)=>void;
  email : string , 
  password : string , 
}

export { ILoginForm };
