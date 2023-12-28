'use client';

import { Typography } from '@mui/material';
import Bodyleft from '../ui/sites/bodyleft';
import Header from '../ui/sites/header';
import Userstable from '../ui/userstable/userstable';
import Footer from '../ui/sites/footer';
import FooterLeft from '../ui/sites/footerLeft';
import FooterRight from '../ui/sites/footerRight';

export default function Page() {
    const handleGoToStep1 = () => {
        window.location.href = '/addsite';
      };

      const handleGoToStep3 = () => {
        window.location.href = '/addsite3';
      };
  return (
    <div className="relative h-screen w-full overflow-auto bg-gradient-to-r from-blue-700 to-green-500">
      <Header />
      <div className="mb-7 flex px-24">
        <div className="w-1/3 translate-y-1/4 transform pt-0">
          <Typography className="text-1l font-xs text-white">
            <span className="mr-4 border-b-2 border-white pr-40"></span>Étape 2
            sur 5
          </Typography>
          <Typography className="mt-1 text-2xl font-bold text-white">
            Nouvelle configuration du site
          </Typography>
          <Typography className="mt-2 text-xs font-medium text-white">
            Lorem ipsum dolor sit amet consectetur. Elit quam elementum viverra
            pellentesque at sit imperdiet. Volutpat convallis porta magna odio
            curabitur nullam a.
          </Typography>
        </div>
      </div>
      <div className="mt-14 px-24">
        <Userstable />
      </div>
      <div
        className={`relative bottom-0 flex transform justify-between px-4 py-3 pt-16 transition-transform duration-300 md:px-24`}
      >
        {' '}
        <FooterLeft onClick={handleGoToStep1}/>
        <FooterRight onClick={handleGoToStep3}/>
      </div>
    </div>
  );
}
