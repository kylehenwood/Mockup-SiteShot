<html class="svg js cssanimations csstransitions"><head lang="en">
  <meta charset="UTF-8">
  <title>SiteShot</title>
  <link rel="stylesheet" type="text/css" href="scss/public.css">
  <script type="text/javascript" src="js/vendor/jquery-1.9.0.min.js"></script>
  <script type="text/javascript" src="js/vendor/modernizr-2.6.2.min.js"></script>
  <script type="text/javascript" src="js/main.js"></script>
  <link rel="icon" type="image/png" href="mark_favicon.png">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic,300,300italic" rel="stylesheet" type="text/css">
</head>
<body class="layout-app toast-container">

<?php include './_views/modal--upgrade.php'; ?>

  <div class="layout-app__toast">
    <div class="toast">
      <div class="toast__icon">
        <span class="flat-icon icon--16 icon--tick"></span>
      </div>
      <div class="toast__message">This is a piece of toast</div>
      <div class="toast__dismiss">
        <span class="flat-icon icon--16 icon--cross"></span>
      </div>
    </div>

  </div>

  <!-- layout__header -->
  <div class="layout-app__header">
    <div class="center center--1120">
      <div class="app-header-layout">

        <?php if ($headerLogo === true) { ?>

        <!-- Logo -->
        <div class="app-header-layout__logo"></div>

      <?php } else { ?>
        <!-- All Websites -->
        <div class="app-header-layout__websites">
          <a class="websites-button" href="index.php?pageID=app&page=dashboard">
            <div class="websites-button__icon">
              <span class="flat-icon icon--16 icon--arrow-left"></span>
            </div>
            <div class="websites-button__text">All projects</div>
          </a>
        </div>
      <?php } ?>

        <!-- profile -->
        <div class="app-header-layout__profile">
          <div class="profile js-profile">
            <div class="profile__button">
              <a class="profile-button js-profile-button">
                <div class="profile-button__name">Kyle Henwood</div>
                <div class="profile-button__icon">
                  <span class="flat-icon icon--16 icon--dropdown-arrow"></span>
                </div>
              </a>
            </div>
            <div class="profile__dropdown">
              <div class="profile-dropdown js-profile-dropdown">
                <div class="profile-dropdown__profile">
                  <div class="profile-dropdown__avatar"></div>
                  <div class="profile-dropdown__username">Kyle Henwood</div>
                  <div class="profile-dropdown__email">kyle.henwood@gmail.com</div>
                  <div class="profile-dropdown__button">
                    <a class="button button--32 button--pink-stroke" href="index.php?pageID=app&page=account-profile">Edit profile</a>
                  </div>
                </div>
                <div class="profile-dropdown__section">
                  <a class="profile-dropdown__item" href="index.php?pageID=app&page=account-notifications">Notifications</a>
                  <a class="profile-dropdown__item" href="index.php?pageID=app&page=account-billing">Billing & Usage</a>
                  <a class="profile-dropdown__item" href="../www/index.php">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Upgrade -->
        <div class="app-header-layout__upgrade">
          <a class="header-upgrade-button js-modal-trigger">Upgrade now!</a>
        </div>


      </div>
    </div>
  </div>
