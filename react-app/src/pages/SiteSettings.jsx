export default function SiteSettings() {
  return (
    <div className="layout-app__container">
      <div className="center center--960">

        {/* Scan options */}
        <div className="module module--white module--margin">
          <div className="module__header">
            <h4 className="heading-style">Configure Webhook</h4>
          </div>

          <div className="module__body">
            <div className="settings">
              <h4 className="settings__header">Webhook: enable/disable</h4>
              <div className="settings__body">
                <div className="typography">
                  <p>Call <a>This webhook</a> to trigger a refresh of your pages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page options */}
        <div className="module module--white module--margin module--highlight">
          <div className="module__header">
            <h4 className="heading-style">Page settings</h4>
          </div>

          <div className="module__body">
            <div className="settings settings--margin">
              <h4 className="settings__header">Pages</h4>
              <div className="settings__body">
                <div className="typography">
                  <p>Currently scanning 21 pages: <a>Click here to manage.</a></p>
                </div>
              </div>
            </div>

            <div className="settings settings--margin">
              <h4 className="settings__header">Resolutions / Screen sizes</h4>
              <div className="settings__body">
                <div className="typography">
                  <p>Setup resolution rules</p>
                </div>
              </div>
            </div>

            <div className="settings">
              <h4 className="settings__header">Browsers</h4>
              <div className="settings__body">
                <div className="typography">
                  <p>Scanning:</p>
                  <ul>
                    <li>IE 6,7,8,9,10</li>
                    <li>Firefox: Latest</li>
                    <li>Chrome: Latest</li>
                    <li>Opera: Latest</li>
                  </ul>
                  <p><a>Configure</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* other settings */}
        <div className="module">
          <div className="module__header">
            <div className="heading-style">Other</div>
            <div className="heading-subheading">Followup title description.</div>
          </div>
          <div className="module__body">

            <div className="settings settings--margin">
              <h3 className="settings__header">Site settings</h3>
              <div className="settings__body">
                <div className="typography">
                  <ul>
                    <li>Rename site</li>
                    <li>Transfer ownership: Plan?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="settings">
              <h3 className="settings__header">Delete this site.</h3>
              <div className="settings__body">
                <div className="typography">
                  <p>Once you delete this site, all images will be deleted and unrecoverable.</p>
                  <p><strong>This action is irreversable.</strong></p>
                  <p>button requires checkbox click to activate</p>
                </div>
              </div>
              <div className="settings__delete">
                <button className="button button--red button--40 button--disabled" disabled>Delete</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
