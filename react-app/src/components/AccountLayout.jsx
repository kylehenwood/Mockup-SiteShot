import { Outlet, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import ChromeHeader from './ChromeHeader.jsx';
import ChromeFooter from './ChromeFooter.jsx';

const navClass = ({ isActive }) => `navigation-item${isActive ? ' navigation-item--active' : ''}`;

export default function AccountLayout() {
  useEffect(() => {
    document.body.className = 'layout-app toast-container';
    return () => { document.body.className = ''; };
  }, []);
  return (
    <>
      <ChromeHeader />
      <div className="layout-app__navigation">
        <div className="center center--1120">
          <div className="app-navigation">
            <div className="app-navigation__website">
              <h1 className="heading-size-1">Kyle Henwood</h1>
            </div>
            <div className="app-navigation__navigation">
              <div className="site-navigation clearfix">
                <div className="site-navigation__item">
                  <NavLink className={navClass} to="/account-profile">
                    <div className="navigation-item__text">Profile</div>
                    <div className="navigation-item__underline"></div>
                  </NavLink>
                </div>
                <div className="site-navigation__item">
                  <NavLink className={navClass} to="/account-notifications">
                    <div className="navigation-item__text">Notifications</div>
                    <div className="navigation-item__underline"></div>
                  </NavLink>
                </div>
                <div className="site-navigation__item">
                  <NavLink className={navClass} to="/account-billing">
                    <div className="navigation-item__text">Billing &amp; Usage</div>
                    <div className="navigation-item__underline"></div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <ChromeFooter />
    </>
  );
}
