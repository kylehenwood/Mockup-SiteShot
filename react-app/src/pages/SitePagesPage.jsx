import { Link } from 'react-router-dom';

export default function SitePagesPage() {
  return (
    <div className="layout-app__container">
      <div className="center center--1120">

        <div className="chrome">
          <div className="chrome__header">
            <ul className="breadcrumb clearfix">
              <li className="breadcrumb__item">
                <div className="breadcrumb-item">
                  <Link className="breadcrumb-item__link" to="/site-pages">
                    Pages
                  </Link>
                </div>
              </li>
              <li className="breadcrumb__item breadcrumb__item--animate">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                  <a className="breadcrumb-item__text">
                    www.website.io/pageurl
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="chrome__body">

            <div className="module module--white module--margin">
              <div className="module__body">

                <div className="page-controls">
                  Integrations | Share
                </div>

                <div className="page-controls">
                  Browsers | Resolutions (clickable filters? need to be able to see browser X + resolutions)
                </div>

                <div className="page-diff">
                  <div className="page-diff__versions">

                    <h4 className="version-title">Versions</h4>

                    <ul className="version-list">
                      <li className="version-list__item version-list__item--active">Apr 27 at 4:11PM</li>
                      <li className="version-list__item">Apr 27 at 8:21AM</li>
                      <li className="version-list__item">Apr 26 at 8:03PM</li>
                      <li className="version-list__item">Apr 25 at 12:00PM</li>
                      <li className="version-list__item">Apr 24 at 6:52PM</li>
                      <li className="version-list__item">Apr 23 at 8:36AM</li>
                      <li className="version-list__item">Apr 20 at 5:32PM</li>
                      <li className="version-list__item">Apr 16 at 3:12AM</li>
                      <li className="version-list__item">Apr 15 at 10:25AM</li>
                      <li className="version-list__item">Apr 14 at 12:11PM</li>
                      <li className="version-list__item">Apr 13 at 5:04PM</li>
                    </ul>

                  </div>

                  <div className="page-diff__screenshot">
                    <div className="screenshot">
                      <div className="screenshot__fullscreen">
                        <button className="fullscreen-button">
                          <span className="flat-icon icon--16 icon--maximize"></span>
                        </button>
                      </div>
                      <div className="screenshot__image">
                        <div className="screenshot-test"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="module module--white">
          <div className="module__header">
            <h4 className="heading-style">Features</h4>
          </div>
          <div className="module__body">
            <div className="typography">
              <ul>
                <li>Page versions</li>
                <li>Resolutions / browsers (something like tags with a tick or a cross on them?)</li>
                <li>Last change seen</li>
                <li>Integrations</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
