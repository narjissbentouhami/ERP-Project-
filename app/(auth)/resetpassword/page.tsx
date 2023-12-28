'use client'
import '@/app/ui/sass/login.scss'
import AuthButton from '@/app/ui/auth/authButton'
import AuthPasswordHeader from '@/app/ui/auth/authPasswordHeader'
import AuthTitle from '@/app/ui/auth/authTitle'
import $ from 'jquery'
import resetPasswordHandle from '@/app/lib/auth/resetPassword'

export default function page() {
  const handleResetPasswordClick = () => {
    let email = $('#reset-password-email').val();
    resetPasswordHandle(email);
  };
  return (
    <div className='w-full px-24 pt-12'>
      <AuthPasswordHeader  url="/"/>
      <div className='m-auto mt-24 w-40'>
        <div className='mx-auto text-center'>
          <AuthTitle
            content={[
              'Réinitialisez votre ',
              <span key="span">mot de passe! </span>
            ]}
            paragraphe='Lorem ipsum dolor sit amet consectetur. Sempre donec donec fames ut augue. Imperdiet ac faucibus consectetur nisi. Mattis.'
          />
        </div>
        <form className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Entrer votre Email
          </label>
          <input id='reset-password-email' className="border-inherit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" required type="email" />
          <label className='text-red-500' id='reset-password-email-error'></label>
          <div className="pt-3">
            <AuthButton onClick={handleResetPasswordClick} type='button' text='Envoyer le lien de réinitialisation' />
          </div>
        </form>
      </div>
    </div>
  )
}
