import '@/app/ui/global.css';
import { NavBar } from '../ui/navbar/page';
import Sidebar from '@/app/ui/sidebar/sidebar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar/>
      <NavBar/>
      <main className='ml-[20%] w-[80%] main'>{children}</main>
    </>
  );
}
