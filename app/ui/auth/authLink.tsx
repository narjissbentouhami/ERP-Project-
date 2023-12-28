import Link from "next/link";

export default function AuthLink({ text , url }: { text: string , url: string }) {
    return (
        <Link className="inline-block align-baseline font-bold text-xs auth-link" href={url}>
            {text}
        </Link>
    )
}
