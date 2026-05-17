import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import ChromeHeader from './ChromeHeader.jsx';
import ChromeFooter from './ChromeFooter.jsx';

export default function AppLayout({ headerLogo = false }) {
  useEffect(() => {
    document.body.className = 'layout-app toast-container';
    return () => { document.body.className = ''; };
  }, []);
  return (
    <>
      <ChromeHeader headerLogo={headerLogo} />
      <Outlet />
      <ChromeFooter />
    </>
  );
}
