'use client'
import React, { useEffect, useRef, useState } from 'react'
import "@/app/ui/sass/login.scss"
import AuthRightSide from '@/app/ui/auth/authRightSide'
import SyanaLogo from '@/app/ui/auth/syanaLogo'
import AuthTitle from '@/app/ui/auth/authTitle'
import AuthButton from '@/app/ui/auth/authButton'
import AuthLink from '@/app/ui/auth/authLink'
import AuthFooter from '@/app/ui/auth/authFooter'
import otpHandle from '@/app/lib/auth/otp'


let currentOPTIndex: number = 0;
export default function page(
    {
        searchParams,
    }: {
        searchParams?: {
            email?: string;
        };
    }) {
    const email = searchParams?.email;

    const [opt, setOpt] = useState<string[]>(new Array(4).fill(""));
    const [activeOPTIndex, setActiveOPTIndex] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = ({
        target
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOPT: string[] = [...opt];
        newOPT[currentOPTIndex] = value.substring(value.length - 1);

        if (!value) setActiveOPTIndex(currentOPTIndex - 1)
        else setActiveOPTIndex(currentOPTIndex + 1)

        setOpt(newOPT);
    }

    const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>,
        index: number) => {
        currentOPTIndex = index;
        if (key === 'Backspace') setActiveOPTIndex(currentOPTIndex - 1);
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [activeOPTIndex])

    const handleOTPClick = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const otpCode = opt.join('');
        if(email){
            otpHandle(Number(otpCode), email);
        }
    };

    return (
        <div className="flex w-full h-full  bg-white">
            <div className="py-3 px-3 w-40">
                <div className="w-70 flex flex-col h-full mx-auto">
                    <div className="mt-auto">
                        <SyanaLogo />
                        <AuthTitle
                            content={[
                                'Entrez votre ',
                                <span key="span">OTP. </span>
                            ]}
                            paragraphe='Nous vous avons envoyé un mot de passe unique à votre adresse e-mail.'
                        />
                        <form>
                            <div className="flex justify-center w-2/4">
                                {opt.map((_, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <input
                                                ref={index === activeOPTIndex ? inputRef : null}
                                                type="number"
                                                className="form-input mt-1 p-2 mx-1 text-center w-full border rounded-md [&::-webkit-inner-spin-button]:appearance-none"
                                                onChange={handleOnChange}
                                                onKeyDown={(e) => handleOnKeyDown(e, index)}
                                                value={opt[index]}
                                            />
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div className="pt-6">
                                <AuthButton onClick={(e) => handleOTPClick(e)} text='Confirmer' />
                            </div>
                        </form>
                        <p className='font-medium mt-2'><span className='mr-3'>Nouveau sur Syana?</span>
                            <AuthLink text='Renvoyer le code' url='#' />
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
