'use client'
import Link from 'next/link';
import "./sidebar.css";
import data from "./LinksData.json";
import { usePathname } from 'next/navigation';
import SidebarLink from '@/app/ui/sidebar/SidebarLink';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className='flex'>
      <div className="fixed w-1/5 p-4 bg-white border-r-[1px] flex flex-col justify-start sidebar-parent h-full mt-auto">
        <div className='syana-logo h-1/5'>
          <img src="/loginPageIcons/syana-logo.png" className='m-auto' />
        </div>
        <div className="flex flex-col items-center links-parent h-3/5">
          {data.map((item) => (
            pathname === item.link ? (
              <SidebarLink key={item.link} data={item} isActive={true} />
            ) : (
              <SidebarLink key={item.link} data={item} />
            )
          ))}
        </div>
        <div className='rounded-lg p-6 grid grid-cols-3 gap-1' style={{ backgroundColor: "#38B68433", marginTop: "20%" }}>
          <Link href="/" className='m-auto'>
            <img src="/sidebarIcons/Ellipse 9.svg" />
          </Link>
          <div className="grid grid-rows-2">
            <h1>Mathew</h1>
            <p style={{ color: "#00112380" }}>Admin</p>
          </div>
          <Link href="/" className='m-auto'>
            <img src="/sidebarIcons/fi-rr-power.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
