import Link from 'next/link';
import clsx from 'clsx';

interface LinkProps {
    isActive?: boolean,
    data: {
        link: string,
        label: string,
        icon: string,
        notification?: string,
    };
}

export default function SidebarLink({ data , isActive }: LinkProps) {
    const { link, label, notification, icon } = data;
    return (
        <Link href={link} className='w-full'>
            <div className={clsx(
                "flex text-black p-3 items-start relative icon-container rounded-lg",
                {
                    'bg-sb-link': isActive,
                }
            )}>
                <div className="flex-shrink-0 icon-parent">
                    <img src={icon} alt="" />
                </div>
                <span className={clsx(
                    "flex-grow ml-2 sb-sp",
                    {
                        'text-white': isActive,
                    }
                )}>{label}</span>
                <span className="pr-2 pl-2 rounded-full text-white" style={{ backgroundColor: "#38B684" }}>{notification}</span>
            </div>
        </Link>
    )
}
