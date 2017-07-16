<?php
  if (isset($_GET['page'])) {
    $pageName = $_GET['page'];

    $activeClass = "navigation-item--active";

    // navitems
    $navPages = null;
    $navSettings = null;
    $navIntegrations = null;
    $navNotifications = null;
    $navPeople = null;
    $navDeployments = null;

    switch ($pageName) {
      case $pageName == 'site-pages' || $pageName == 'site-pages-page';
        $navPages = $activeClass;
        break;
      case $pageName == 'site-settings';
        $navSettings = $activeClass;
        break;
      case $pageName == 'site-integrations' || $pageName == 'site-integrations-integration';
        $navIntegrations = $activeClass;
        break;
      case $pageName == 'site-notifications';
        $navNotifications = $activeClass;
        break;
      case $pageName == 'site-people';
        $navPeople = $activeClass;
        break;
      case $pageName == 'deployments';
        $navDeployments = $activeClass;
        break;
    }
  }
?>

<!-- layout__navigation -->
<div class="layout-app__navigation">
  <div class="center center--1120">
    <div class="app-navigation">
      <div class="app-navigation__website">
        <h1 class="heading-size-1">www.website.io</h1>
      </div>

      <!-- quest -->
      <div class="app-navigation__quest">
        <div class="quest js-quest">
          <div class="quest__button">
            <div class="quest-button js-quest-button">
              <div class="quest-progress">
                <div class="quest-progress__percent">1/4</div>
                <div class="quest-progress__bar"></div>
              </div>
            </div>
          </div>
          <div class="quest__dropdown">
            <div class="quest-dropdown js-quest-dropdown">
              <div class="quest-dropdown__message">Complete the below tasks to get an extra 10 days trial!</div>
              <div class="quest-dropdown__quests">
                <div class="quest-item quest-item--complete">
                  <div class="quest-item__icon">
                    <span class="flat-icon icon--16 icon--circle-tick"></span>
                  </div>
                  <div class="quest-item__description">Add a site</div>
                  <div class="quest-item__info"></div>
                </div>
                <a class="quest-item" href="index.php?pageID=app&page=site-settings">
                  <div class="quest-item__icon">
                    <span class="flat-icon icon--16 icon--circle-cross"></span>
                  </div>
                  <div class="quest-item__description">Configure SiteShot webhook</div>
                  <div class="quest-item__info"></div>
                </a>
                <a class="quest-item" href="index.php?pageID=app&page=site-integrations">
                  <div class="quest-item__icon">
                    <span class="flat-icon icon--16 icon--circle-cross"></span>
                  </div>
                  <div class="quest-item__description">Setup an Integration</div>
                  <div class="quest-item__info"></div>
                </a>
                <a class="quest-item" href="index.php?pageID=app&page=site-people">
                  <div class="quest-item__icon">
                    <span class="flat-icon icon--16 icon--circle-cross"></span>
                  </div>
                  <div class="quest-item__description">Add a team member</div>
                  <div class="quest-item__info"></div>
                </a>
              </div>
              <div class="quest-dropdown__incentive">
                Bonus reward: -25% off first subscription.
              </div>
              <div class="quest-dropdown__claim">
                <a class="button button--40 button--pink button--disabled" title="You cannot claim the reward until you have complete the 4 steps">Claim reward</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- navigation -->
      <div class="app-navigation__navigation">
        <div class="site-navigation clearfix">
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navPages);?>" href="index.php?pageID=app&page=site-pages">
              <div class="navigation-item__text">Pages</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navSettings);?>" href="index.php?pageID=app&page=site-settings">
              <div class="navigation-item__text">Settings</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navIntegrations);?>" href="index.php?pageID=app&page=site-integrations">
              <div class="navigation-item__text">Integrations</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navNotifications);?>" href="index.php?pageID=app&page=site-notifications">
              <div class="navigation-item__text">Notifications</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navPeople);?>" href="index.php?pageID=app&page=site-people">
              <div class="navigation-item__text">People (NON MVP)</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navDeployments);?>" href="#">
              <div class="navigation-item__text">Deployments (NON MVP)</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
