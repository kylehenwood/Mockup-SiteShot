export default function AccountNotifications() {
  return (
    <div className="layout-app__container">
      <div className="center center--960">
        <div className="module module--white">

          <header className="module__header">
            <h2 className="heading-style">Notifications</h2>
          </header>

          <div className="module__body">
            <ul className="switch-list">
              <li className="switch-list__item">
                <div className="switch-control">
                  <div className="switch-control__title">SiteShot news</div>
                  <div className="switch-control__message">
                    <div className="typography">
                      <p>Keep upto date with all things SiteShot! New features, Relevant improvements.</p>
                    </div>
                  </div>
                  <div className="switch-control__switch">
                    <label className="switch">
                      <input className="switch__input" type="checkbox" />
                      <div className="switch__toggle"></div>
                    </label>
                  </div>
                </div>
              </li>

              <li className="switch-list__item">
                <div className="switch-control">
                  <div className="switch-control__title">Changes made to my account</div>
                  <div className="switch-control__message">
                    <div className="typography">
                      <p>Email me whenever I make changes to my account.</p>
                    </div>
                  </div>
                  <div className="switch-control__switch">
                    <label className="switch">
                      <input className="switch__input" type="checkbox" />
                      <div className="switch__toggle"></div>
                    </label>
                  </div>
                </div>
              </li>

              <li className="switch-list__item">
                <div className="switch-control">
                  <div className="switch-control__title">Usage warning</div>
                  <div className="switch-control__message">
                    <div className="typography">
                      <p>Email me when I&apos;m at 90% of my plans usage.</p>
                    </div>
                  </div>
                  <div className="switch-control__switch">
                    <label className="switch">
                      <input className="switch__input" type="checkbox" />
                      <div className="switch__toggle"></div>
                    </label>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <footer className="module__footer">

            <div className="button-pattern clearfix">
              <div className="button-pattern__submit">
                <button className="button button--36 button--pink button--disabled" title="You haven't made any changes!">Save changes</button>
                <button className="button button--36 button--pink">Save changes</button>
              </div>
            </div>

          </footer>

        </div>
      </div>
    </div>
  );
}
