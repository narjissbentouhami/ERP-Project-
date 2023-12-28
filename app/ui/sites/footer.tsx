import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <div
      className={`relative bottom-0 flex transform justify-between px-4 py-3 pt-16 transition-transform duration-300 md:px-24`}
    >
      <button className="cursor-pointer rounded-full border border-white px-4 py-2 text-white">
        <ArrowBackIcon className="mr-2" />
        Retour
      </button>
      <div className="flex items-center justify-between">
        <button className="cursor-pointer rounded-full border border-white px-4 py-2 text-white">
          Suivant
          <ArrowForwardIcon className="ml-2" />
        </button>
      </div>
    </div>
  );
}
