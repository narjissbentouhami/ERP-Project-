import BasicBreadcrumbs from '@/app/ui/breadcrumbs/breadcrumbs';
import Userstable from '@/app/ui/userstable/userstable';

export default function page() {
  const dashboardLink = { label: 'Dashboard', href: '/dashboard' };
  const usersLink = { label: 'Users', href: '/users' };
  return (
    <>
      <BasicBreadcrumbs firstLink={dashboardLink} secondLink={usersLink} />
      <Userstable/>
    </>
  )
}

