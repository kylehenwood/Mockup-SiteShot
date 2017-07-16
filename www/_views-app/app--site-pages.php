<div class="layout-app__container">
  <div class="center center--1120">
    <div class="chrome">

      <div class="chrome__header">
        <h2 class="heading-style">Pages</h2>
      </div>

      <!-- diff page -->
      <div class="chrome__body">
        <div class="pages-header">
          <div class="pages-header__search">
            <div class="search-input">
              <div class="search-input__icon">
                <span class="flat-icon icon--16 icon--microscope"></span>
              </div>
              <input class="search-input__input input-style" placeholder="search pages...">
            </div>
          </div>
          <div class="pages-header__sort">
            <div class="dropdown js-dropdown">
              <div class="dropdown__button">
                <div class="button button--40 button--white js-dropdown-button">
                  <div class="button-inner button-inner--icon-after button-inner--block">
                    <div class="button-inner__text">Sort: Recent</div>
                    <div class="button-inner__icon-after">
                      <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown__content">
                <div class="dropdown-content js-dropdown-content">
                  <div class="dropdown-content__item">
                    <div class="dropdown-item">
                      <div class="dropdown-item__text">Recent</div>
                    </div>
                    <div class="dropdown-item">
                      <div class="dropdown-item__text">Manual</div>
                    </div>
                    <div class="dropdown-item">
                      <div class="dropdown-item__text">Alphabetical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="pages-header__manage">
            <div class="dropdown js-dropdown">
              <div class="dropdown__button">
                <div class="button button--40 button--white js-dropdown-button">
                  <div class="button-inner button-inner--block button-inner--icon-after">
                    <div class="button-inner__text">Manage pages</div>
                    <div class="button-inner__icon-after">
                      <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown__content dropdown__content--dock-right">
                <div class="dropdown-content js-dropdown-content">
                  <div class="dropdown-content__item">
                    <div class="dropdown-item">
                      <div class="dropdown-item__text">Add pages</div>
                    </div>
                    <div class="dropdown-item">
                      <div class="dropdown-item__text">Remove pages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pages-grid clearfix">
          <?php for ($count = 0; $count < 12; $count = $count + 1) { ?>
            <div class="pages-grid__item">


              <!-- page item -->
              <?php if (rand(1, 10) === 1) { ?>
                <a class="grid-item grid-item--stencil js-grid-item" href="index.php?pageID=app&page=site-pages-page">
              <?php } else { ?>
                  <a class="grid-item grid-item--stencil js-grid-item" href="index.php?pageID=app&page=site-pages-page">
              <?php } ?>


                <?php if (rand(1, 3) === 1) { ?>

                  <div class="grid-item__indicator">
                    <div class="alert-pulse alert-pulse--pink"></div>
                  </div>

                <?php } ?>


                <div class="grid-item__syncing">
                  <div class="aperture aperture--24 aperture--white">
                    <div class="aperture__ring"></div>
                    <div class="aperture__icon"></div>
                  </div>
                </div>

                <div class="grid-item__thumbnail"></div>

                <div class="grid-item__options">
                  <div class="grid-item__option" data-parent="Remove">
                    <span class="flat-icon icon--16 icon--trash"></span>
                  </div>
                  <div class="grid-item__option" data-parent="Scan">
                    <span class="flat-icon icon--16 icon--scan"></span>
                  </div>
                  <div class="grid-item__option" data-parent="Edit">
                    <span class="flat-icon icon--16 icon--edit"></span>
                  </div>
                  <div class="grid-item__option" data-parent="Archive">
                    <span class="flat-icon icon--16 icon--archive"></span>
                  </div>
                </div>

                <div class="grid-item__scanning"></div>

                <div class="grid-item__content">
                  <div class="grid-item__url">/subdomain/specificpage/pagename</div>
                  <div class="grid-item__last-scanned">Last scanned <strong>Jun 2, 2016</strong></div>
                </div>
              </a>



            </div>
          <?php } ?>
        </div>
      </div>

      <div class="chrome__footer">


        <div class="load-more">
          <button class="load-more__button">Load more</button>
        </div>


        <!-- general -->
        <ul class="pagination">
          <li class="pagination__prev">Prev</li>
          <li class="pagination__item">1</li>
          <li class="pagination__item pagination__item--selected">2</li>
          <li class="pagination__item">3</li>
          <li class="pagination__item">4</li>
          <li class="pagination__next">Next</li>
        </ul>


        <!-- general 2-->
        <ul class="pagination">
          <li class="pagination__prev">First</li>
          <li class="pagination__item">1</li>
          <li class="pagination__item">...</li>
          <li class="pagination__item">22</li>
          <li class="pagination__item pagination__item--selected">23</li>
          <li class="pagination__item">24</li>
          <li class="pagination__item">...</li>
          <li class="pagination__item">50</li>
          <li class="pagination__next">Last</li>
        </ul>


        <!-- prev + next -->
        <ul class="previous-next">
          <li class="previous-next__prev">
            <span class="flat-icon icon--16 icon--arrow-left"></span>
          </li>
          <li class="previous-next__next">
            <div class="previous-next__text">
              Next
            </div>
            <div class="previous-next__icon">
              <span class="flat-icon icon--16 icon--arrow-right"></span>
            </div>
          </li>
        </ul>


        <!-- state -->
        <ul class="pagination-simple">
          <li class="pagination-simple__prev">
            <span class="flat-icon icon--16 icon--arrow-left"></span>
          </li>
          <li class="pagination-simple__state">3 of 10</li>
          <li class="pagination-simple__next">
            <span class="flat-icon icon--16 icon--arrow-right"></span>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>