import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

export default function FooterLeft({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-full border border-white px-4 py-2 text-white"
    >
      <ArrowBackIcon className="mr-2" />
      Retour
    </button>
  );
}
