import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AuthLayout() {
  useEffect(() => {
    document.body.className = 'layout-auth';
    return () => { document.body.className = ''; };
  }, []);
  return (
    <>
      <div className="layout-auth__header">
        <div className="center center--1120">
          <div className="header-layout">
            <div className="header-layout__logo">
              <Link className="header-logo header-logo--active" to="/sign-in">
                <div className="header-logo__mark"><div className="mark-static"></div></div>
                <div className="header-logo__text">SiteShot</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="layout-auth__footer">
        <div className="center center--1120">
          <div className="footer clearfix">
            <div className="footer__copyright">© 2016 SiteShot</div>
            <div className="footer__social">
              <a href="https://twitter.com/siteshotapp" target="_blank" rel="noreferrer" className="button button--blue button--32">
                <div className="button-inner button-inner--icon-before">
                  <div className="button-inner__icon-before">
                    <span className="social-icon icon--16 icon--twitter"></span>
                  </div>
                  <div className="button-inner__text">Follow us on Twitter</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
