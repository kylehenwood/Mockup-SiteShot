<?php
if (isset($_GET['page'])) {
  $pageName = $_GET['page'];

  $activeClass = "navigation-item--active";

  // navitems
  $navProfile = null;
  $navNotifications = null;
  $navBilling = null;

  switch ($pageName) {
    case $pageName == 'account-profile';
      $navProfile = $activeClass;
      break;
    case $pageName == 'account-notifications';
      $navNotifications = $activeClass;
      break;
    case $pageName == 'account-billing';
      $navBilling = $activeClass;
      break;
  }
}
?>

<!-- layout__navigation -->
<div class="layout-app__navigation">
  <div class="center center--1120">
    <div class="app-navigation">
      <div class="app-navigation__website">
        <h1 class="heading-size-1">Kyle Henwood</h1>
      </div>

      <!-- navigation -->
      <div class="app-navigation__navigation">
        <div class="site-navigation clearfix">
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navProfile);?>" href="index.php?pageID=app&page=account-profile">
              <div class="navigation-item__text">Profile</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navNotifications);?>" href="index.php?pageID=app&page=account-notifications">
              <div class="navigation-item__text">Notifications</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
          <div class="site-navigation__item">
            <a class="navigation-item <?php printf($navBilling);?>" href="index.php?pageID=app&page=account-billing">
              <div class="navigation-item__text">Billing & Usage</div>
              <div class="navigation-item__underline"></div>
            </a>
          </div>
        </div>
      </div>
      <!-- navigation:end -->

    </div>
  </div>
</div>