import { Link } from 'react-router-dom';

export default function SiteIntegrationsIntegration() {
  return (
    <div className="layout-app__container">
      <div className="center center--960">

        <div className="module module--white module--margin">

          <div className="module__header">
            <ul className="breadcrumb clearfix">
              <li className="breadcrumb__item">
                <div className="breadcrumb-item">
                  <Link className="breadcrumb-item__link" to="/site-integrations">
                    Integrations
                  </Link>
                </div>
              </li>
              <li className="breadcrumb__item breadcrumb__item--animate">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                  <a className="breadcrumb-item__text">
                    Slack
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="module__body">

            <div className="integration-setup clearfix">
              <div className="integration-setup__sidebar">

                <div className="integration-sidebar">
                  <div className="integration-sidebar__icon">
                    <div className="integration-icon integration-icon--big"></div>
                  </div>
                  <div className="integration-sidebar__button">
                    <div className="dropdown">
                      <div className="dropdown__button">
                        <button className="button button--40 button--green">
                          <div className="button-inner button-inner--icon-after">
                            <div className="button-inner__text">Enabled</div>
                            <div className="button-inner__icon-after">
                              <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="dropdown__content dropdown__content--dock-left">
                        <div className="dropdown-content">
                          <div className="dropdown-content__item">
                            Disable
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="integration-setup__content">
                <div className="integration-content">
                  <div className="integration-content__heading">
                    <h2 className="heading-style-big">Slack</h2>
                  </div>
                  <div className="integration-content__description">
                    <div className="typography">
                      <p>Slack is a team chat application from the wonderful people at Tiny Speck.</p>
                      <p>SiteShot will send images of page differences as soon as their found into the Slack channel of your choosing so that you can see changes as soon as they are detected.</p>
                    </div>
                  </div>
                  <div className="integration-content__form">

                    <div className="form-style">
                      <div className="form-style__heading">
                        <h4 className="heading-style">Slack setup</h4>
                      </div>
                      <div className="form-style__content">
                        <div className="form-brick">
                          <div className="form-brick__label">Slack URL - what is this?</div>
                          <div className="form-brick__input">
                            <input className="input-style" type="text" placeholder="Slack URL" />
                          </div>
                        </div>
                      </div>
                      <div className="form-style__footer">
                        <a className="button button--40 button--green-stroke">Send test message</a>
                        <a className="button button--40 button--green">Enable Slack integration</a>
                        <p>By enabling Slack integration, you agree to the Slack API Terms of Service.</p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
