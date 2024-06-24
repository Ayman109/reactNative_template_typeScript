import { AppButton, AppInput } from "@/components/atomics";
import { useTransition } from "@/hooks/useTransition";
import { ILoginForm } from "@/interfaces/organismes";
import MainLayout from "@/layout/mainLayout/MainLayout";

const SubscribeForm = ({  onPress , onChangeEmail , onChangePassword , email , password}: ILoginForm): JSX.Element => {
  const lang = useTransition()
  return (
    <MainLayout >
      <>
        <AppInput type={"email-address"} value={email} placeholder={lang.placeholder_adress_email} onChange={onChangeEmail} />
        <AppInput type={"visible-password"} value={password} placeholder={lang.placeholder_password} onChange={onChangePassword} />

        <AppButton
          value={lang.subscribe}
          onPress={onPress}
          isDisabled={false}
        />
      </>
    </MainLayout>
  );
};
export default SubscribeForm ; 