import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="layout-app__container">
      <div className="center center--1120">

        <div className="chrome">
          <div className="chrome__header">
            <h4 className="heading-style">All websites</h4>
          </div>

          {/* hardcore */}
          <div className="chrome__body">

            <div className="dashboard-controls">
              <div className="dashboard-controls__search">
                <div className="search-input">
                  <div className="search-input__icon">
                    <span className="flat-icon icon--16 icon--microscope"></span>
                  </div>
                  <input className="search-input__input input-style" placeholder="search websites..." />
                </div>
              </div>
              <div className="dashboard-controls__add-site">
                <Link to="/add-site" className="button button--40 button--pink">Add new site</Link>
              </div>
            </div>

            <div className="dashboard-grid clearfix">
              <div className="dashboard-grid__item">
                <Link className="site-item" to="/site-pages">
                  <div className="site-item__icon"></div>
                  <div className="site-icon__settings">
                    <div className="dropdown">
                      <div className="dropdown__content dropdown__content--dock-left">
                        <div className="dropdown-content">
                          <div className="dropdown-content__item">Add person</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="site-item__name">www.website.io</div>
                  <div className="site-item__updated">Last updated <strong>Apr 25, 2016</strong></div>
                  <div className="site-item__pages">20 pages</div>
                </Link>
              </div>
              <div className="dashboard-grid__item">
                <Link className="site-item" to="/site-pages">
                  <div className="site-item__icon"></div>
                  <div className="site-item__name">www.website.io</div>
                  <div className="site-item__updated">Last updated <strong>Apr 25, 2016</strong></div>
                  <div className="site-item__pages">20 pages</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="module module--white">
          <div className="module__body">
            <div className="welcome">
              <div className="welcome__headline">Welcome to SiteShot</div>
              <div className="welcome__secondary">Lets get started! First off, add a website by clicking the button below.</div>
              <div className="welcome__button">
                <Link className="button button--40 button--green" to="/add-site">
                  Add website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
