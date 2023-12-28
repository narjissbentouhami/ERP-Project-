import { Save as SaveIcon } from '@mui/icons-material';


export default function Header() {
  return (
    <div className="flex justify-between px-24">
        <div>
          <img src="navbarIcons/logoWhite.png" alt="Logo" />
        </div>
        <div className="flex items-center justify-between">
          <span className="mr-4 cursor-pointer text-white">
            Des questions ?
          </span>
          <button className="cursor-pointer rounded-full border border-white px-4 py-2 text-white">
          <SaveIcon className="mr-2" />
            Enregister et quitter
          </button>
        </div>
      </div>
  )
}
