import { Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function MarketingLayout() {
  useEffect(() => {
    document.body.className = 'layout';

    // Marketing site has its own stylesheet — load only on these routes.
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/marketing.css';
    link.dataset.marketing = 'true';
    document.head.appendChild(link);

    return () => {
      document.body.className = '';
      link.remove();
    };
  }, []);

  return (
    <>
      <div className="layout__header">
        <div className="center center--1120">
          <div className="header-layout">
            <div className="header-layout__logo">
              <a className="header-logo">
                <div className="header-logo__mark">
                  <div className="mark-animated">
                    <div className="mark-animated__ring"></div>
                    <div className="mark-animated__aperture"></div>
                  </div>
                </div>
                <div className="header-logo__text">SiteShot</div>
              </a>
            </div>
            <div className="header-layout__signup">
              <Link to="/sign-in" className="button button--white-stroke button--40">Sign in</Link>
            </div>
          </div>

          <div className="header-mobile">
            <div className="header-mobile__mark">
              <a className="mobile-mark" href="#"></a>
            </div>
            <div className="header-mobile__menu">
              <button className="menu-button button button--pink">
                <span className="flat-icon icon--16 icon--menu"></span>
              </button>
            </div>
            <div className="header-mobile__navigation">
              <Link className="header-mobile__navigation-item" to="/sign-in">Sign in</Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="layout__footer">
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
