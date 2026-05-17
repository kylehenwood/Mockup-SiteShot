import { Link } from 'react-router-dom';

export default function SiteIntegrations() {
  return (
    <div className="layout-app__container">
      <div className="center center--960">

        {/* main module */}
        <div className="module module--white module--margin">

          <div className="module__header">
            <h4 className="heading-style">Integrations</h4>
          </div>

          <div className="module__body">

            <div className="integration-list">
              <div className="integration-list__item">
                <div className="integration-item">
                  <div className="integration-item__icon">
                    <span className="integration-icon"></span>
                  </div>
                  <div className="integration-item__name">Slack</div>
                  <div className="integration-item__description">Post SiteShot changes directly into slack.</div>
                  <div className="integration-item__button">
                    <Link className="button button--40 button--grey-stroke" to="/site-integrations-integration">Enable integration</Link>
                  </div>
                </div>
              </div>
              <div className="integration-list__item">
                <div className="integration-item integration-item--enabled">
                  <div className="integration-item__icon">
                    <span className="integration-icon"></span>
                  </div>
                  <div className="integration-item__name">Slack</div>
                  <div className="integration-item__description">Post SiteShot changes directly into slack.</div>
                  <div className="integration-item__button">
                    <Link className="button button--40 button--green" to="/site-integrations-integration">Enabled</Link>
                  </div>
                </div>
              </div>
              <div className="integration-list__item">
                <div className="integration-item integration-item--error">
                  <div className="integration-item__icon">
                    <span className="integration-icon"></span>
                  </div>
                  <div className="integration-item__name">Slack</div>
                  <div className="integration-item__description">Post SiteShot changes directly into slack.</div>
                  <div className="integration-item__button">
                    <Link className="button button--40 button--red" to="/site-integrations-integration">Something&apos;s wrong</Link>
                  </div>
                </div>
              </div>
              <div className="integration-list__item">
                <div className="integration-item">
                  <div className="integration-item__icon">
                    <span className="integration-icon"></span>
                  </div>
                  <div className="integration-item__name">Slack</div>
                  <div className="integration-item__description">Post SiteShot changes directly into slack.</div>
                  <div className="integration-item__button">
                    <Link className="button button--40 button--grey" to="/site-integrations-integration">Disabled</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* secondary module */}
        <div className="module module--white">
          <div className="module__header">
            <h2 className="heading-style">Features</h2>
          </div>
          <div className="module__body">
            <div className="typography">
              <h2>Ideas for integrations</h2>
              <h4>Issue trackers</h4>
              <ul>
                <li>GitHub</li>
                <li>Jira</li>
              </ul>

              <h4>Chat apps</h4>
              <ul>
                <li>HipChat</li>
              </ul>

              <p>Request integration...</p>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
