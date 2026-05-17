import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import ChromeHeader from './ChromeHeader.jsx';
import ChromeFooter from './ChromeFooter.jsx';
import SiteNavigation from './SiteNavigation.jsx';

export default function SiteLayout() {
  useEffect(() => {
    document.body.className = 'layout-app toast-container';
    return () => { document.body.className = ''; };
  }, []);
  return (
    <>
      <ChromeHeader />
      <SiteNavigation />
      <Outlet />
      <ChromeFooter />
    </>
  );
}
