import { Link } from 'react-router-dom';

export default function AccountBillingSelect() {
  return (
    <>
      <div className="layout-app__navigation">
        <div className="center center--1120">
          <div className="primary-breadcrumb">

            <div className="breadcrumb clearfix">
              <div className="breadcrumb__item">
                <div className="breadcrumb-item">
                  <Link className="breadcrumb-item__link" to="/account-billing">Kyle Henwood</Link>
                </div>
              </div>
              <div className="breadcrumb__item breadcrumb__item--animate">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                  <div className="breadcrumb-item__text">Plan select</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="layout-app__container layout-app__container--padding">
        <div className="center center--960">

          <div className="modal-upgrade__annual-switch">
            <div className="annual-switch js-annual-switch">
              <div className="annual-switch__button js-annual-button">Monthly</div>
              <div className="annual-switch__button js-annual-button annual-switch__button--active">Annual</div>
            </div>
          </div>

          <div className="plan-select clearfix js-plan-select">
            <div className="plan-select__item js-plan-select-item">
              <div className="plan-option js-plan-flip">
                <div className="plan-option__front">
                  <Link className="button button--40 button--green" to="/account-billing-payment">Select plan</Link>
                </div>
                <div className="plan-option__back">
                  <Link className="button button--40 button--green" to="/account-billing-payment">Select plan</Link>
                </div>
              </div>
            </div>
            <div className="plan-select__item js-plan-select-item">
              <div className="plan-option js-plan-flip">
                <div className="plan-option__front">
                  <Link className="button button--40 button--green" to="/account-billing-payment">Select plan</Link>
                </div>
                <div className="plan-option__back">
                  <Link className="button button--40 button--green" to="/account-billing-payment">Select plan</Link>
                </div>
              </div>
            </div>
            <div className="plan-select__item js-plan-select-item">
              <div className="plan-option js-plan-flip">
                <div className="plan-option__front">
                  <Link className="button button--40 button--green" to="/account-billing-payment">Select plan</Link>
                </div>
                <div className="plan-option__back">
                  <Link className="button button--40 button--green" to="/account-billing-payment">Select plan</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
