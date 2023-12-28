'use client';
import React, { useState } from 'react';
import '@/app/ui/sass/login.scss';
import AuthRightSide from '@/app/ui/auth/authRightSide';
import SyanaLogo from '@/app/ui/auth/syanaLogo';
import AuthTitle from '@/app/ui/auth/authTitle';
import AuthButton from '@/app/ui/auth/authButton';
import AuthLink from '@/app/ui/auth/authLink';
import AuthFooter from '@/app/ui/auth/authFooter';
import AuthPasswordInput from '@/app/ui/auth/authPasswordInput';
import signupHandle from '../lib/auth/eventHandlers';
import axios from 'axios';

export default function page() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const handleSignupClick = () => {
  //   let nom = document.getElementById('outlined-basic1')?.getAttribute('value');
  //   let prenom = document
  //     .getElementById('outlined-basic2')
  //     ?.getAttribute('value');
  //   let email = document
  //     .getElementById('outlined-basic3')
  //     ?.getAttribute('value');
  //   let password = document
  //     .getElementById('outlined-password-input4')
  //     ?.getAttribute('value');
  //   let confirmPassword = document
  //     .getElementById('outlined-basic5')
  //     ?.getAttribute('value');
  //   if (nom && prenom && email && password && confirmPassword) {
  //     signupHandle({ nom, prenom, email, password, confirmPassword });
  //   }
  // };
  const handleSignupClick = async () => {
    if (nom && prenom && email && password && confirmPassword) {
      await signupHandle({ nom, prenom, email, password, confirmPassword });
    }
  };
  // const handleSignupClick = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8000/auth/signup', {
  //       email,
  //       password,
  //       nom,
  //       prenom,
  //       entreprise: 'Syana',
  //       telephone: '0677889900',
  //       role: '6584bcfc86ceb3e0b0fecb0b',
  //       url: 'www',
  //     });

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error((error as any).response.data);
  //   }
  //   window.location.href = '/';
  // };
  return (
    <div className="flex h-full w-full  bg-white">
      <div className="relative flex h-screen w-40 flex-col items-center justify-center px-8">
        <div className="grid max-w-screen-md grid-cols-1 gap-1">
          <SyanaLogo />
          <AuthTitle
            content={[
              'Rejoignez-nous et ne manquez rien – ',
              <span key="span">Inscrivez-vous ! </span>,
            ]}
            paragraphe=""
          />
          <form className="mt-9 bg-white px-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-4 block text-sm font-bold text-gray-700">
                  Nom
                </label>
                <input
                  className="w-full appearance-none rounded border border-inherit px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  required
                  id="outlined-basic1"
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-4 block text-sm font-bold text-gray-700">
                  Prénom
                </label>
                <input
                  className="w-full appearance-none rounded border border-inherit px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  required
                  id="outlined-basic2"
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
            </div>
            <label className="mb-4 block text-sm font-bold text-gray-700">
              Email
            </label>
            <div className="relative">
              <input
                className="mb-3 w-full appearance-none rounded border border-inherit px-3 py-2 pr-10 leading-tight text-gray-700 focus:outline-none"
                required
                id="outlined-basic3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <AuthPasswordInput
                  text="Mot de passe"
                  id="outlined-basic4"
                  value={password}
                  onChange={(value) => setPassword(value)}
                />
              </div>
              <div>
                <AuthPasswordInput
                  text="Confirmez le mot de passe"
                  id="outlined-basic5"
                  value={confirmPassword}
                  onChange={(value) => setConfirmPassword(value)}
                />
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex justify-between py-2 ">
                <input className="m-auto mr-2" type="checkbox" />
                <span className="text-xs">
                  En vous inscrivant, vous avez accepté nos{' '}
                  <AuthLink text="conditions" url="/register" /> et notre{' '}
                  <AuthLink
                    text="
                  politique de confidentialité"
                    url="/register"
                  />
                </span>
              </div>
            </div>
            <AuthButton
              type="button"
              text=" Créer mon compte"
              onClick={handleSignupClick}
            />
            <p className="mt-7 font-medium">
              <span className="mr-3">Déjà sur Syana ?</span>
              <AuthLink text="Connectez-vous à mon compte" url="/" />
            </p>
          </form>

          <div className="flex-grow"></div>
        </div>
        <AuthFooter />
      </div>
      <AuthRightSide />
    </div>
  );
}

// interface CustomDividerProps {
//   text: string;
// }

// function CustomDivider({ text }: CustomDividerProps): JSX.Element {
//   return (
//     <div className='lg:pl-12 lg:pr-12 lg:pt-4' style={{ display: 'flex', alignItems: 'center' }}>
//       <Divider style={{ flexGrow: 1, marginRight:"16px" }} />
//       <Typography variant="body2" className="text-sm font-medium">
//         {text}
//       </Typography>
//       <Divider style={{ flexGrow: 1, marginLeft:"16px" }} />
//     </div>
//   );
// }
// export default function page() {
//   const [isChecked, setIsChecked] = useState(false);
//   const gradientColors = ['#385170', '#42b883'];

//   // const textGradient = gradient(gradientColors);
//   const textGradient = gradient.mind;

//   const handleCheckboxChange = () => {
//     if (isChecked) {
//       setIsChecked(false);
//     }
//     else {
//       setIsChecked(true);
//     }
//   };
