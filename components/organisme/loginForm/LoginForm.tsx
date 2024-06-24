import { AppButton, AppInput } from "@/components/atomics";
import { useTransition } from "@/hooks/useTransition";
import { ILoginForm } from "@/interfaces/organismes";
import MainLayout from "@/layout/mainLayout/MainLayout";

const LoginForm = ({  onPress , onChangeEmail , onChangePassword , email , password}: ILoginForm): JSX.Element => {
  const {langChangeState , getLang }  = useTransition()
  return (
    <MainLayout >
      <>
        <AppInput type={"email-address"} value={email} placeholder={getLang().placeholder_adress_email} onChange={onChangeEmail} />
        <AppInput type={"visible-password"} value={password} placeholder={getLang().placeholder_password} onChange={onChangePassword} />

        <AppButton
          value={getLang().login}
          onPress={onPress}
          isDisabled={false}
        />
      </>
    </MainLayout>
  );
};
export default LoginForm ; 