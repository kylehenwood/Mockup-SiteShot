import { Link } from 'react-router-dom';

export default function AccountBilling() {
  return (
    <div className="layout-app__container">
      <div className="center center--960">

        <div className="module module--white module--margin">
          <header className="module__header">
            <h2 className="heading-style">Billing</h2>
          </header>
          <div className="module__body">
            <div className="typography">
              <ul>
                <li>Billing details</li>
                <li><Link to="/account-billing-select">Plan size + Change</Link></li>
                <li>Next billing date</li>
                <li>Billing history (invoices)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="module module--white module--margin">
          <header className="module__header">
            <h2 className="heading-style">Usage</h2>
          </header>
          <div className="module__body">
            <div className="typography">
              <ul>
                <li>Bonus usage + invite (for every person you invite to SiteShot, you gain an extra 5 scans per month, permanently)</li>
                <li>Actual usage / 100%</li>
                <li>Extra usage: Extra usage is an optional last resort for when you hit your plans limit. Extra usage never expires and does not reset monthly.
                  <br />
                  ADD+: 100 scans $5, 200 scans $10, 300 scans $15
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
