export default function AuthButton({
  text,
  onClick,
  type = 'button',
}: {
  text: string;
  onClick?: () => void;
  type?: 'button';
}) {
  return (
    <button
      className="auth-btn my-1 w-full cursor-pointer rounded px-4 py-2 font-normal text-white"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
