import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import UpgradeModal from './UpgradeModal.jsx';

export default function ChromeHeader({ headerLogo = false }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <UpgradeModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="layout-app__toast">
        <div className="toast">
          <div className="toast__icon">
            <span className="flat-icon icon--16 icon--tick"></span>
          </div>
          <div className="toast__message">This is a piece of toast</div>
          <div className="toast__dismiss">
            <span className="flat-icon icon--16 icon--cross"></span>
          </div>
        </div>
      </div>

      <div className="layout-app__header">
        <div className="center center--1120">
          <div className="app-header-layout">
            {headerLogo ? (
              <div className="app-header-layout__logo"></div>
            ) : (
              <div className="app-header-layout__websites">
                <Link className="websites-button" to="/dashboard">
                  <div className="websites-button__icon">
                    <span className="flat-icon icon--16 icon--arrow-left"></span>
                  </div>
                  <div className="websites-button__text">All projects</div>
                </Link>
              </div>
            )}

            <div className="app-header-layout__profile">
              <div className="profile js-profile" ref={profileRef}>
                <div className="profile__button">
                  <a
                    className={`profile-button${profileOpen ? ' profile-button--active' : ''}`}
                    onClick={() => setProfileOpen(o => !o)}
                  >
                    <div className="profile-button__name">Kyle Henwood</div>
                    <div className="profile-button__icon">
                      <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                    </div>
                  </a>
                </div>
                <div className="profile__dropdown">
                  <div className={`profile-dropdown${profileOpen ? ' profile-dropdown--active' : ''}`}>
                    <div className="profile-dropdown__profile">
                      <div className="profile-dropdown__avatar"></div>
                      <div className="profile-dropdown__username">Kyle Henwood</div>
                      <div className="profile-dropdown__email">kyle.henwood@gmail.com</div>
                      <div className="profile-dropdown__button">
                        <Link className="button button--32 button--pink-stroke" to="/account-profile">Edit profile</Link>
                      </div>
                    </div>
                    <div className="profile-dropdown__section">
                      <Link className="profile-dropdown__item" to="/account-notifications">Notifications</Link>
                      <Link className="profile-dropdown__item" to="/account-billing">Billing &amp; Usage</Link>
                      <Link className="profile-dropdown__item" to="/sign-in">Sign out</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-header-layout__upgrade">
              <a className="header-upgrade-button" onClick={() => setModalOpen(true)}>Upgrade now!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
