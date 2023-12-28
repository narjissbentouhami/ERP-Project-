import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

export default function FooterRight({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onClick}
        className="cursor-pointer rounded-full border border-white px-4 py-2 text-white"
      >
        Suivant
        <ArrowForwardIcon className="ml-2" />
      </button>
    </div>
  );
}
