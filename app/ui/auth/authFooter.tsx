import Link from 'next/link'
export default function AuthFooter() {
    return (
        <div className="flex flex-row gap-2 justify-center mt-auto">
            <Link className='text-xs auth-footer mr-3' href="#">Politique de confidentialité</Link>
            <Link className='text-xs auth-footer' href="#">Conditions d'utilisation</Link>
        </div>
    )
}
