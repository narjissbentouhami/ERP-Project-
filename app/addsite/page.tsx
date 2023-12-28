'use client';

import Header from '../ui/sites/header';
import Bodyleft from '../ui/sites/bodyleft';
import Bodyright from '../ui/sites/bodyright';
import Footer from '../ui/sites/footer';
import FooterRight from '../ui/sites/footerRight';
import FooterLeft from '../ui/sites/footerLeft';

export default function Page() {
  const handleGoToStep2 = () => {
    window.location.href = '/addsite2';
  };
  return (
    <div className="relative h-screen w-full overflow-auto bg-gradient-to-r from-blue-700 to-green-500">
      <Header />
      <div className="mb-7 flex justify-between px-24">
        <Bodyleft />
        <Bodyright />
      </div>
      <div
        className={`relative bottom-0 flex transform justify-between px-4 py-3 pt-16 transition-transform duration-300 md:px-24`}
      >
        <FooterLeft />
        <FooterRight onClick={handleGoToStep2} />
      </div>
    </div>
  );
}
