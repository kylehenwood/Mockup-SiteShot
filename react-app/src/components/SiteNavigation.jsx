import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function SiteNavigation() {
  const [questOpen, setQuestOpen] = useState(false);
  const questRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    function onClick(e) {
      if (questRef.current && !questRef.current.contains(e.target)) setQuestOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Pages route also covers individual page detail
  const isPagesActive = pathname.startsWith('/site-pages');
  const isIntegrationsActive = pathname.startsWith('/site-integrations');

  const navClass = (active) => `navigation-item${active ? ' navigation-item--active' : ''}`;

  return (
    <div className="layout-app__navigation">
      <div className="center center--1120">
        <div className="app-navigation">
          <div className="app-navigation__website">
            <h1 className="heading-size-1">www.website.io</h1>
          </div>

          <div className="app-navigation__quest">
            <div className="quest js-quest" ref={questRef}>
              <div className="quest__button">
                <div
                  className={`quest-button${questOpen ? ' quest-button--active' : ''}`}
                  onClick={() => setQuestOpen(o => !o)}
                >
                  <div className="quest-progress">
                    <div className="quest-progress__percent">1/4</div>
                    <div className="quest-progress__bar"></div>
                  </div>
                </div>
              </div>
              <div className="quest__dropdown">
                <div className={`quest-dropdown${questOpen ? ' quest-dropdown--active' : ''}`}>
                  <div className="quest-dropdown__message">Complete the below tasks to get an extra 10 days trial!</div>
                  <div className="quest-dropdown__quests">
                    <div className="quest-item quest-item--complete">
                      <div className="quest-item__icon"><span className="flat-icon icon--16 icon--circle-tick"></span></div>
                      <div className="quest-item__description">Add a site</div>
                      <div className="quest-item__info"></div>
                    </div>
                    <Link className="quest-item" to="/site-settings">
                      <div className="quest-item__icon"><span className="flat-icon icon--16 icon--circle-cross"></span></div>
                      <div className="quest-item__description">Configure SiteShot webhook</div>
                      <div className="quest-item__info"></div>
                    </Link>
                    <Link className="quest-item" to="/site-integrations">
                      <div className="quest-item__icon"><span className="flat-icon icon--16 icon--circle-cross"></span></div>
                      <div className="quest-item__description">Setup an Integration</div>
                      <div className="quest-item__info"></div>
                    </Link>
                    <Link className="quest-item" to="/site-people">
                      <div className="quest-item__icon"><span className="flat-icon icon--16 icon--circle-cross"></span></div>
                      <div className="quest-item__description">Add a team member</div>
                      <div className="quest-item__info"></div>
                    </Link>
                  </div>
                  <div className="quest-dropdown__incentive">Bonus reward: -25% off first subscription.</div>
                  <div className="quest-dropdown__claim">
                    <a className="button button--40 button--pink button--disabled" title="You cannot claim the reward until you have complete the 4 steps">Claim reward</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app-navigation__navigation">
            <div className="site-navigation clearfix">
              <div className="site-navigation__item">
                <Link className={navClass(isPagesActive)} to="/site-pages">
                  <div className="navigation-item__text">Pages</div>
                  <div className="navigation-item__underline"></div>
                </Link>
              </div>
              <div className="site-navigation__item">
                <NavLink className={({ isActive }) => navClass(isActive)} to="/site-settings">
                  <div className="navigation-item__text">Settings</div>
                  <div className="navigation-item__underline"></div>
                </NavLink>
              </div>
              <div className="site-navigation__item">
                <Link className={navClass(isIntegrationsActive)} to="/site-integrations">
                  <div className="navigation-item__text">Integrations</div>
                  <div className="navigation-item__underline"></div>
                </Link>
              </div>
              <div className="site-navigation__item">
                <NavLink className={({ isActive }) => navClass(isActive)} to="/site-notifications">
                  <div className="navigation-item__text">Notifications</div>
                  <div className="navigation-item__underline"></div>
                </NavLink>
              </div>
              <div className="site-navigation__item">
                <NavLink className={({ isActive }) => navClass(isActive)} to="/site-people">
                  <div className="navigation-item__text">People (NON MVP)</div>
                  <div className="navigation-item__underline"></div>
                </NavLink>
              </div>
              <div className="site-navigation__item">
                <a className="navigation-item" href="#">
                  <div className="navigation-item__text">Deployments (NON MVP)</div>
                  <div className="navigation-item__underline"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
