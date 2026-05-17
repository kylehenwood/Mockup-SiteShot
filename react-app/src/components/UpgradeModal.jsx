import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UpgradeModal({ open, onClose }) {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="layout__modal">
      <div
        className={`modal-overlay${open ? ' modal-overlay--active' : ''}`}
        onClick={onClose}
      >
        <div className="center center--800">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__close" onClick={onClose}>
              <div className="flat-icon icon--16 icon--cross"></div>
            </div>

            <div className="modal__header">
              <h4 className="heading-style text-center">Upgrade your plan!</h4>
            </div>

            <div className="modal-upgrade">
              <h1 className="modal-upgrade__headline">Way to go! You're ready for an upgrade!</h1>
              <div className="modal-upgrade__annual-switch">
                <div className="annual-switch">
                  <div
                    className={`annual-switch__button${!annual ? ' annual-switch__button--active' : ''}`}
                    onClick={() => setAnnual(false)}
                  >Monthly</div>
                  <div
                    className={`annual-switch__button${annual ? ' annual-switch__button--active' : ''}`}
                    onClick={() => setAnnual(true)}
                  >Annual</div>
                </div>
              </div>
              <div className="modal-upgrade__section">
                <div className="modal-upgrade__title">Earlybird plans - <em>limited time only!</em></div>
                <div className="modal-upgrade__plan">
                  <div className="plan-block">
                    <div className="plan-block__title">Early access</div>
                    <div className="plan-block__feature">
                      <div className="plan-block__feature-icon"><div className="flat-icon icon--16 icon--circle-tick"></div></div>
                      <div className="plan-block__feature-text">Feature name</div>
                    </div>
                    <div className="plan-block__button">
                      <a className="button button--36 button--grey button--disabled">Current plan</a>
                    </div>
                  </div>
                </div>
                <div className="modal-upgrade__plan">
                  <div className="plan-block plan-block--green">
                    <div className="plan-block__title">Special</div>
                    <div className="plan-block__feature">
                      <div className="plan-block__feature-icon"><div className="flat-icon icon--16 icon--circle-tick"></div></div>
                      <div className="plan-block__feature-text">Feature name</div>
                    </div>
                    <div className="plan-block__button">
                      <Link className="button button--36 button--green" to="/account-billing-payment" onClick={onClose}>Choose Plan</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-upgrade__section">
                <div className="modal-upgrade__title">Regular pricing - <em>coming soon!</em></div>
                {['Freelancer', 'Indie', 'Professional'].map((title) => (
                  <div className="modal-upgrade__plan" key={title}>
                    <div className="plan-block">
                      <div className="plan-block__title">{title}</div>
                      <div className="plan-block__feature">
                        <div className="plan-block__feature-icon"><div className="flat-icon icon--16 icon--circle-tick"></div></div>
                        <div className="plan-block__feature-text">Feature name</div>
                      </div>
                      <div className="plan-block__button">
                        <a className="button button--36 button--disabled">Coming soon</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-upgrade__message">
                <p>Don't worry, you can upgrade, downgrade or cancel your plan at any time!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
