import { Link } from 'react-router-dom';

export default function AddSite() {
  return (
    <div className="layout-app__container layout-app__container--auth">
      <div className="center center--1120">

        <div className="chrome">
          <div className="chrome__header">
            <ul className="breadcrumb clearfix">
              <li className="breadcrumb__item">
                <div className="breadcrumb-item">
                  <Link className="breadcrumb-item__link" to="/dashboard">
                    All websites
                  </Link>
                </div>
              </li>
              <li className="breadcrumb__item breadcrumb__item--animate">
                <div className="breadcrumb-item breadcrumb-item--icon">
                  <div className="breadcrumb-item__icon">
                    <span className="flat-icon icon--16 icon--arrow-right"></span>
                  </div>
                  <a className="breadcrumb-item__text">
                    Add site
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="chrome__content">

            <div className="center center--800">

              {/* name + domain */}
              <div className="module module--white module--margin">

                <div className="module__circle">
                  <div className="number-circle">
                    <div className="number-circle__number">1</div>
                    <div className="number-circle__circle"></div>
                  </div>
                </div>

                <div className="module__header">
                  <h4 className="heading-style">Add website</h4>
                </div>

                <div className="module__body js-1-form">
                  <form className="add-domain" onSubmit={(e) => e.preventDefault()}>
                    <label className="add-domain__label">Domain address (example: www.website.io)</label>
                    <div className="add-domain__element">
                      <div className="domain-elements">
                        <div className="domain-elements__protocol">
                          <div className="select-box">
                            <div className="select-box__icon">
                              <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                            </div>
                            <div className="select-box__element">
                              <select className="select-style select-style--disabled" disabled>
                                <option>http://</option>
                                <option>https://</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="domain-elements__url">
                          <input className="input-style" type="text" placeholder="www.website.io" />
                        </div>
                      </div>
                    </div>
                    <div className="add-domain__validation">Please enter a valid domain</div>
                    <div className="add-domain__submit">
                      <button className="button button--40 button--green js-1-toggle">Save</button>
                    </div>
                  </form>
                </div>
              </div>

              {/* seperator */}
              <div className="module-seperator">
                <div className="module-seperator__background"></div>
                <div className="module-seperator__count">Step 1</div>
              </div>

              {/* message */}
              <div className="page-alert page-alert--green">
                <div className="page-alert__content">
                  <p className="text-center">You can add to, or edit these settings at any time.</p>
                </div>
              </div>

              {/* pages + auto crawl */}
              <div className="module module--white module--margin">
                <div className="module__header">
                  <h4 className="heading-style">Add pages: MAX 5</h4>
                </div>

                <div className="module__circle">
                  <div className="number-circle">
                    <div className="number-circle__number">2</div>
                    <div className="number-circle__circle"></div>
                  </div>
                </div>

                <div className="module__body">
                  <div className="add-website__pages">
                    <ul className="add-pages">

                      <li className="add-pages__page add-pages__page--green">
                        <div className="brick-page">
                          <div className="brick-page__domain">
                            www.website.io/
                          </div>
                          <div className="brick-page__input">
                            <input className="input-style" type="text" placeholder="" defaultValue="" disabled />
                          </div>
                          <div className="brick-page__switch">
                            <label className="switch">
                              <input className="switch__input" type="checkbox" defaultChecked />
                              <div className="switch__toggle"></div>
                            </label>
                          </div>
                        </div>
                      </li>

                      <li className="add-pages__page add-pages__page--green">
                        <div className="brick-page">
                          <div className="brick-page__domain">
                            www.website.io/
                          </div>
                          <div className="brick-page__input">
                            <input className="input-style" type="text" placeholder="page-address" defaultValue="home" disabled />
                          </div>
                          <div className="brick-page__button">
                            <button className="button button--40 button--add-remove">
                              <div className="button-inner button-inner--icon-after">
                                <div className="button-inner__text">Added</div>
                                <div className="button-inner__icon-after">
                                  <span className="flat-icon icon--16 icon--tick"></span>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </li>

                      <li className="add-pages__page">
                        <div className="brick-page">
                          <div className="brick-page__domain">
                            www.website.io/
                          </div>
                          <div className="brick-page__input">
                            <input className="input-style" type="text" placeholder="page-address" defaultValue="features/multiple-reso..." />
                          </div>
                          <div className="brick-page__button">
                            <button className="button button--40 button--pink">
                              <div className="button-inner button-inner--icon-after">
                                <div className="button-inner__text">Add</div>
                                <div className="button-inner__icon-after">
                                  <span className="flat-icon icon--16 icon--plus"></span>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </li>

                      <li className="add-pages__page">
                        <div className="brick-page">
                          <div className="brick-page__domain">
                            www.website.io/
                          </div>
                          <div className="brick-page__input">
                            <input className="input-style" type="text" placeholder="page-address" />
                          </div>
                          <div className="brick-page__button">
                            <button className="button button--40 button--grey button--disabled" disabled title="you need to add an address">
                              <div className="button-inner button-inner--icon-after">
                                <div className="button-inner__text">Add</div>
                                <div className="button-inner__icon-after">
                                  <span className="flat-icon icon--16 icon--plus"></span>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>

                <div className="module__footer module__footer--border">
                  <Link className="button button--40 button--green" to="/site-pages">Save &amp; continue</Link>
                </div>

              </div>

              {/* seperator */}
              <div className="module-seperator">
                <div className="module-seperator__background"></div>
                <div className="module-seperator__count">Step 2</div>
              </div>

              <div className="module module--white">
                <div className="module__header">
                  <h1 className="heading-style">Resolutions &amp; browsers</h1>
                </div>

                <div className="module__circle">
                  <div className="number-circle">
                    <div className="number-circle__number">1</div>
                    <div className="number-circle__circle"></div>
                  </div>
                </div>

                <div className="module__body">
                  <div className="typography">
                    <h1>HTML Ipsum Presents</h1>

                    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                    <h2>Header Level 2</h2>

                    <ol>
                      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                      <li>Aliquam tincidunt mauris eu risus.</li>
                    </ol>

                    <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

                    <h3>Header Level 3</h3>

                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                      <li>Aliquam tincidunt mauris eu risus.</li>
                    </ul>

                    <pre><code>{`
    #header h1 a {
    display: block;
    width: 300px;
    height: 80px;
    }
  `}</code></pre>
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
