import { Link } from 'react-router-dom';

export default function SitePages() {
  const items = Array.from({ length: 12 });
  return (
    <div className="layout-app__container">
      <div className="center center--1120">
        <div className="chrome">

          <div className="chrome__header">
            <h2 className="heading-style">Pages</h2>
          </div>

          <div className="chrome__body">
            <div className="pages-header">
              <div className="pages-header__search">
                <div className="search-input">
                  <div className="search-input__icon">
                    <span className="flat-icon icon--16 icon--microscope"></span>
                  </div>
                  <input className="search-input__input input-style" placeholder="search pages..." />
                </div>
              </div>
              <div className="pages-header__sort">
                <div className="dropdown js-dropdown">
                  <div className="dropdown__button">
                    <div className="button button--40 button--white js-dropdown-button">
                      <div className="button-inner button-inner--icon-after button-inner--block">
                        <div className="button-inner__text">Sort: Recent</div>
                        <div className="button-inner__icon-after">
                          <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown__content">
                    <div className="dropdown-content js-dropdown-content">
                      <div className="dropdown-content__item">
                        <div className="dropdown-item">
                          <div className="dropdown-item__text">Recent</div>
                        </div>
                        <div className="dropdown-item">
                          <div className="dropdown-item__text">Manual</div>
                        </div>
                        <div className="dropdown-item">
                          <div className="dropdown-item__text">Alphabetical</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pages-header__manage">
                <div className="dropdown js-dropdown">
                  <div className="dropdown__button">
                    <div className="button button--40 button--white js-dropdown-button">
                      <div className="button-inner button-inner--block button-inner--icon-after">
                        <div className="button-inner__text">Manage pages</div>
                        <div className="button-inner__icon-after">
                          <span className="flat-icon icon--16 icon--dropdown-arrow"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown__content dropdown__content--dock-right">
                    <div className="dropdown-content js-dropdown-content">
                      <div className="dropdown-content__item">
                        <div className="dropdown-item">
                          <div className="dropdown-item__text">Add pages</div>
                        </div>
                        <div className="dropdown-item">
                          <div className="dropdown-item__text">Remove pages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pages-grid clearfix">
              {items.map((_, i) => (
                <div className="pages-grid__item" key={i}>
                  <Link className="grid-item grid-item--stencil js-grid-item" to="/site-pages-page">
                    <div className="grid-item__indicator">
                      <div className="alert-pulse alert-pulse--pink"></div>
                    </div>
                    <div className="grid-item__syncing">
                      <div className="aperture aperture--24 aperture--white">
                        <div className="aperture__ring"></div>
                        <div className="aperture__icon"></div>
                      </div>
                    </div>
                    <div className="grid-item__thumbnail"></div>
                    <div className="grid-item__options">
                      <div className="grid-item__option" data-parent="Remove">
                        <span className="flat-icon icon--16 icon--trash"></span>
                      </div>
                      <div className="grid-item__option" data-parent="Scan">
                        <span className="flat-icon icon--16 icon--scan"></span>
                      </div>
                      <div className="grid-item__option" data-parent="Edit">
                        <span className="flat-icon icon--16 icon--edit"></span>
                      </div>
                      <div className="grid-item__option" data-parent="Archive">
                        <span className="flat-icon icon--16 icon--archive"></span>
                      </div>
                    </div>
                    <div className="grid-item__scanning"></div>
                    <div className="grid-item__content">
                      <div className="grid-item__url">/subdomain/specificpage/pagename</div>
                      <div className="grid-item__last-scanned">Last scanned <strong>Jun 2, 2016</strong></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="chrome__footer">

            <div className="load-more">
              <button className="load-more__button">Load more</button>
            </div>

            <ul className="pagination">
              <li className="pagination__prev">Prev</li>
              <li className="pagination__item">1</li>
              <li className="pagination__item pagination__item--selected">2</li>
              <li className="pagination__item">3</li>
              <li className="pagination__item">4</li>
              <li className="pagination__next">Next</li>
            </ul>

            <ul className="pagination">
              <li className="pagination__prev">First</li>
              <li className="pagination__item">1</li>
              <li className="pagination__item">...</li>
              <li className="pagination__item">22</li>
              <li className="pagination__item pagination__item--selected">23</li>
              <li className="pagination__item">24</li>
              <li className="pagination__item">...</li>
              <li className="pagination__item">50</li>
              <li className="pagination__next">Last</li>
            </ul>

            <ul className="previous-next">
              <li className="previous-next__prev">
                <span className="flat-icon icon--16 icon--arrow-left"></span>
              </li>
              <li className="previous-next__next">
                <div className="previous-next__text">
                  Next
                </div>
                <div className="previous-next__icon">
                  <span className="flat-icon icon--16 icon--arrow-right"></span>
                </div>
              </li>
            </ul>

            <ul className="pagination-simple">
              <li className="pagination-simple__prev">
                <span className="flat-icon icon--16 icon--arrow-left"></span>
              </li>
              <li className="pagination-simple__state">3 of 10</li>
              <li className="pagination-simple__next">
                <span className="flat-icon icon--16 icon--arrow-right"></span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
