import { Link } from 'react-router-dom';

export default function AccountBillingPayment() {
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
              <div className="breadcrumb__item">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <Link className="breadcrumb-item__link" to="/account-billing-select">Plan select</Link>
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                </div>
              </div>
              <div className="breadcrumb__item breadcrumb__item--animate">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                  <div className="breadcrumb-item__text">Payment method</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="center center--960">

        <div className="layout-app__container layout-app__container--padding">
          <div className="billing-layout">

            <div className="billing-layout__plan">

              <div className="plan-option js-plan-flip">
                <div className="plan-option__front">
                  <Link className="button button--40 button--blue" to="/account-billing-select">Change plan</Link>
                </div>
                <div className="plan-option__back">
                  <Link className="button button--40 button--blue" to="/account-billing-select">Change plan</Link>
                </div>
              </div>

            </div>

            <div className="billing-layout__form">
              <div className="module module--white">

                <div className="module__body">
                  <form className="form-style" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-style__heading">
                      <h4 className="heading-style">Billing information</h4>
                    </div>
                    <div className="form-style__content">

                      <div className="form-grid">
                        <div className="form-grid__row">
                          <div className="form-grid__item">
                            <div className="form-brick">
                              <label className="form-brick__label">Name</label>
                              <div className="form-brick__element">
                                <input type="text" className="input-style" />
                              </div>
                              <div className="form-brick__validation">
                                This is an error message, get the fuck out.
                              </div>
                            </div>
                          </div>
                          <div className="form-grid__item">
                            <div className="form-brick">
                              <label className="form-brick__label">Address</label>
                              <div className="form-brick__element">
                                <input type="text" className="input-style" />
                              </div>
                              <div className="form-brick__validation">
                                This is an error message, get the fuck out.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-grid__row">
                          <div className="form-grid__item">
                            <div className="form-brick">
                              <label className="form-brick__label">City</label>
                              <div className="form-brick__element">
                                <input type="text" className="input-style" />
                              </div>
                              <div className="form-brick__validation">
                                This is an error message, get the fuck out.
                              </div>
                            </div>
                          </div>
                          <div className="form-grid__item">
                            <div className="form-brick">
                              <label className="form-brick__label">State / Province (optional)</label>
                              <div className="form-brick__element">
                                <input type="text" className="input-style" />
                              </div>
                              <div className="form-brick__validation">
                                This is an error message, get the fuck out.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-grid__row">
                          <div className="form-grid__item">
                            <div className="form-brick">
                              <label className="form-brick__label">ZIP / Postal code</label>
                              <div className="form-brick__element">
                                <input type="text" className="input-style" />
                              </div>
                              <div className="form-brick__validation">
                                This is an error message, get the fuck out.
                              </div>
                            </div>
                          </div>
                          <div className="form-grid__item">
                            <div className="form-brick">
                              <label className="form-brick__label">Country</label>
                              <div className="form-brick__element">
                                <div className="select-box">
                                  <div className="select-box__icon">
                                    <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                                  </div>
                                  <div className="select-box__select">
                                    <select type="text" className="select-style">
                                      <option>-- Select a country --</option>
                                      <option>Option 1</option>
                                      <option>Option 2</option>
                                      <option>Option 3</option>
                                      <option>Option 4</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-brick__validation">
                                This is an error message, get the fuck out.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-style__heading">
                      <h4 className="heading-style">Payment details</h4>
                    </div>
                    <div className="form-style__content">
                      <div className="form-credit">
                        <div className="form-credit__number">
                          <div className="form-brick">
                            <label className="form-brick__label">Card number</label>
                            <div className="form-brick__element">
                              <input type="text" className="input-style" />
                            </div>
                            <div className="form-brick__validation">
                              This is an error message, get the fuck out.
                            </div>
                          </div>
                        </div>
                        <div className="form-credit__expiry">
                          <div className="credit-expiry clearfix">
                            <label className="credit-expiry__label">Expiration (MM/YYYY)</label>
                            <div className="credit-expiry__month">
                              <div className="select-box">
                                <div className="select-box__icon">
                                  <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                                </div>
                                <div className="select-box__select">
                                  <select type="text" className="select-style">
                                    <option>MM</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="credit-expiry__year">
                              <div className="select-box">
                                <div className="select-box__icon">
                                  <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                                </div>
                                <div className="select-box__select">
                                  <select type="text" className="select-style">
                                    <option>YYYY</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-credit__ccv">
                          <div className="form-brick">
                            <label className="form-brick__label">CCV</label>
                            <div className="form-brick__element">
                              <input type="text" className="input-style" />
                            </div>
                            <div className="form-brick__validation">
                              This is an error message, get the fuck out.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-style__footer">
                      <div className="credit-submit">
                        <Link className="button button--40 button--green" to="/account-billing-result">$24.00 USD/month - Confirm</Link>
                      </div>
                    </div>

                  </form>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
