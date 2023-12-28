'use client'
import AuthPasswordHeader from '@/app/ui/auth/authPasswordHeader'
import '@/app/ui/sass/login.scss'
import AuthTitle from '@/app/ui/auth/authTitle'
import AuthButton from '@/app/ui/auth/authButton'
import AuthPasswordInput from '@/app/ui/auth/authPasswordInput'
import $ from 'jquery'
import newPasswordHandle from '@/app/lib/auth/newPassword'
export default function page(
  {
      searchParams,
  }: {
      searchParams?: {
          email?: string;
      };
  }) {

    const email = searchParams?.email;

  const handleNewPasswordClick = () => {
    if(email){
      let password = $('#new-password').val();
      let confirmPassword = $('#confirm-new-password').val();
      newPasswordHandle(password , confirmPassword , email);
    }
  };
  return (
    <div className='w-full px-24 pt-12'>
    <AuthPasswordHeader url="verifycode"/>
    <div className='m-auto mt-24 w-40'>
        <div className='mx-auto text-center'>
        <AuthTitle
            content={[
              'Tapez votre nouveau ',
              <span key="span">mot de passe ! </span>
            ]}
            paragraphe='Lorem ipsum dolor sit amet consectetur. Sempre donec donec fames ut augue. Imperdiet ac faucibus consectetur nisi. Mattis.'
          />
        </div>
        <form className="my-4">
            <AuthPasswordInput id='new-password' text='Mot de passe'/>
            <AuthPasswordInput id='confirm-new-password' text='Confirmez le mot de passe'/>
          <div className="pt-3">
            <AuthButton onClick={handleNewPasswordClick} text='Envoyer le lien de réinitialisation'/>
          </div>
        </form>
      </div>
  </div>
  )
}
