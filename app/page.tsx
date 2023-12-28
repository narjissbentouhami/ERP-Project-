'use client'
import React from 'react'
import "@/app/ui/sass/login.scss"
import AuthRightSide from '@/app/ui/auth/authRightSide'
import SyanaLogo from '@/app/ui/auth/syanaLogo'
import AuthTitle from '@/app/ui/auth/authTitle'
import AuthButton from '@/app/ui/auth/authButton'
import AuthLink from '@/app/ui/auth/authLink'
import AuthFooter from '@/app/ui/auth/authFooter'
import AuthPasswordInput from '@/app/ui/auth/authPasswordInput'
import $ from 'jquery'
import signinHandle from './lib/auth/signin'

export default function page() {
    const handleSigninClick = () => {
        let email = $('#email').val();
        let password = $('#password').val();
        signinHandle({ email, password });
    };         
    return (
        <div className="flex w-full h-full  bg-white">

            <div className='py-3 px-3 w-40'>
                <div className="w-70 flex flex-col h-full mx-auto">
                    <div className='mt-auto'>
                        <SyanaLogo />
                        <AuthTitle
                            content={[
                                'Veuillez vous ',
                                <span key="span">connecter </span>,
                                ' pour continuer.',
                            ]}
                            paragraphe='Lorem ipsum dolor sit amet consectetur. Sempre donec donec fames ut augue. Imperdiet ac faucibus consectetur nisi. Mattis.'
                        />
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    E-mail
                                </label>
                                <input id='email' className="border-inherit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" required type="email" placeholder="admin@syana.com" />
                                <span className='text-red-500' id='email-error'></span>
                            </div>
                            <AuthPasswordInput id='password' text='Mot de passe' placeholder='*********' />
                            <span className='text-red-500' id='password-error'></span>
                            <div className="flex items-center justify-between">
                                <div className="flex justify-between py-2 ">
                                    <input className='mr-2 m-auto' type="checkbox" />
                                    <span>Souviens-toi de moi</span>
                                </div>
                                <AuthLink text='Mot de passe oublié?' url='/resetpassword' />
                            </div>
                            <AuthButton type='button' onClick={handleSigninClick} text="Se connecter" />
                        </form>
                        <p className='font-medium mt-2'><span className='mr-3'>Nouveau sur Syana?</span>
                            <AuthLink text='Créer un compte' url='/register' />
                        </p>
                        <div className="flex-grow"></div>
                    </div>
                    <AuthFooter />
                </div>
            </div>
            <AuthRightSide />
        </div>
    )
}
