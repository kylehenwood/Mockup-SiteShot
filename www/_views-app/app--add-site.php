<div class="layout-app__container layout-app__container--auth">

  <div class="center center--1120">

  <div class="chrome">
    <div class="chrome__header">
      <ul class="breadcrumb clearfix">
        <li class="breadcrumb__item">
          <div class="breadcrumb-item">
            <a class="breadcrumb-item__link" href="index.php?pageID=app&amp;page=dashboard">
              All websites
            </a>
          </div>
        </li>
        <li class="breadcrumb__item breadcrumb__item--animate">
          <div class="breadcrumb-item breadcrumb-item--icon">
            <div class="breadcrumb-item__icon">
              <span class="flat-icon icon--16 icon--arrow-right"></span>
            </div>
            <a class="breadcrumb-item__text">
              Add site
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="chrome__content">

      <div class="center center--800">


        <!-- name + domain -->
        <div class="module module--white module--margin">

          <!-- module circle -->
          <div class="module__circle">
            <div class="number-circle">
              <div class="number-circle__number">1</div>
              <div class="number-circle__circle"></div>
            </div>
          </div>

          <div class="module__header">
            <h4 class="heading-style">Add website</h4>
          </div>

          <!-- Form -->
          <div class="module__body js-1-form">


            <form class="add-domain">
              <label class="add-domain__label">Domain address (example: www.website.io)</label>
              <div class="add-domain__element">
                <div class="domain-elements">
                  <div class="domain-elements__protocol">
                    <div class="select-box">
                      <div class="select-box__icon">
                        <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                      </div>
                      <div class="select-box__element">
                        <select class="select-style select-style--disabled" disabled>
                          <option>http://</option>
                          <option>https://</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="domain-elements__url">
                    <input class="input-style" type="text" placeholder="www.website.io">
                  </div>
                </div>
              </div>
              <div class="add-domain__validation">Please enter a valid domain</div>
              <div class="add-domain__submit">
                <button class="button button--40 button--green js-1-toggle">Save</button>
              </div>
            </form>


          </div>
        </div>


        <!-- seperator -->
        <div class="module-seperator">
          <div class="module-seperator__background"></div>
          <div class="module-seperator__count">Step 1</div>
        </div>


        <!-- message -->
        <div class="page-alert page-alert--green">
          <div class="page-alert__content">
            <p class="text-center">You can add to, or edit these settings at any time.</p>
          </div>
        </div>


        <!-- pages + auto crawl -->
        <div class="module module--white module--margin">
          <div class="module__header">
            <h4 class="heading-style">Add pages: MAX 5</h4>
          </div>

          <!-- module circle -->
          <div class="module__circle">
            <div class="number-circle">
              <div class="number-circle__number">2</div>
              <div class="number-circle__circle"></div>
            </div>
          </div>


          <div class="module__body">
            <!-- add pages -->
            <div class="add-website__pages">
              <ul class="add-pages">

                <!-- base domain -->
                <li class="add-pages__page add-pages__page--green">
                  <div class="brick-page">
                    <div class="brick-page__domain">
                      www.website.io/
                    </div>
                    <div class="brick-page__input">
                      <input class="input-style" type="text" placeholder="" value="" disabled="">
                    </div>
                    <div class="brick-page__switch">
                      <label class="switch">
                        <input class="switch__input" type="checkbox" checked="">
                        <div class="switch__toggle"></div>
                      </label>
                    </div>
                  </div>
                </li>

                <!-- added page -->
                <li class="add-pages__page add-pages__page--green">
                  <div class="brick-page">
                    <div class="brick-page__domain">
                      www.website.io/
                    </div>
                    <div class="brick-page__input">
                      <input class="input-style" type="text" placeholder="page-address" value="home" disabled="">
                    </div>
                    <div class="brick-page__button">
                      <button class="button button--40 button--add-remove">
                        <div class="button-inner button-inner--icon-after">
                          <div class="button-inner__text">Added</div>
                          <div class="button-inner__icon-after">
                            <span class="flat-icon icon--16 icon--tick"></span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>

                <!-- typing... add page -->
                <li class="add-pages__page">
                  <div class="brick-page">
                    <div class="brick-page__domain">
                      www.website.io/
                    </div>
                    <div class="brick-page__input">
                      <input class="input-style" type="text" placeholder="page-address" value="features/multiple-reso...">
                    </div>
                    <div class="brick-page__button">
                      <button class="button button--40 button--pink">
                        <div class="button-inner button-inner--icon-after">
                          <div class="button-inner__text">Add</div>
                          <div class="button-inner__icon-after">
                            <span class="flat-icon icon--16 icon--plus"></span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>

                <!-- empty... add page -->
                <li class="add-pages__page">
                  <div class="brick-page">
                    <div class="brick-page__domain">
                      www.website.io/
                    </div>
                    <div class="brick-page__input">
                      <input class="input-style" type="text" placeholder="page-address">
                    </div>
                    <div class="brick-page__button">
                      <button class="button button--40 button--grey button--disabled" disabled="" title="you need to add an address">
                        <div class="button-inner button-inner--icon-after">
                          <div class="button-inner__text">Add</div>
                          <div class="button-inner__icon-after">
                            <span class="flat-icon icon--16 icon--plus"></span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>


          <!-- footer -->
          <div class="module__footer module__footer--border">
            <a class="button button--40 button--green" href="index.php?pageID=app&page=site-pages">Save &amp; continue</a>
          </div>


        </div>


        <!-- seperator -->
        <div class="module-seperator">
          <div class="module-seperator__background"></div>
          <div class="module-seperator__count">Step 2</div>
        </div>



        <div class="module module--white">
          <div class="module__header">
            <h1 class="heading-style">Resolutions &amp; browsers</h1>
          </div>


          <div class="module__circle">
            <div class="number-circle">
              <div class="number-circle__number">1</div>
              <div class="number-circle__circle"></div>
            </div>
          </div>

          <div class="module__body">


            <div class="typography">
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

<pre><code>
    #header h1 a {
    display: block;
    width: 300px;
    height: 80px;
    }
  </code></pre>
            </div>


          </div>
        </div>


      </div>
    </div>
  </div>
</div>
</div>