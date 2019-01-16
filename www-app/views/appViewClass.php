<?php
class AppView extends View {

  private $model;
  public $project;
  public $viewContent;


  // define this
  public function __construct($rs, $model) {
    $this->rs = $rs;
    $this->model = $model;
  }


  protected function displayContent()	{



    if (isset($_GET['page'])) {

      $pageName = $_GET['page'];
      $headerLogo = false;

      switch ($pageName) {

        // --
        // Chicken Lady Duck
        // --

        case $pageName == 'dashboard':
          $headerLogo = true;
          include './_views/chrome-header.php';
          include './_views/app--dashboard.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'add-site':
          $headerLogo = true;
          include './_views/chrome-header.php';
          include './_views/app--add-site.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'site-pages';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-pages.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'site-pages-page';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-pages-page.php';
          include './_views/chrome-footer.php';
          break;



        case $pageName == 'site-settings';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-settings.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'site-integrations';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-integrations.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'site-integrations-integration';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-integrations-integration.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'site-notifications';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-notifications.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'site-people';
          include './_views/chrome-header.php';
          include './_views/chrome-navigation.php';
          include './_views/app--site-people.php';
          include './_views/chrome-footer.php';
          break;


        // --
        // Account
        // --

        case $pageName == 'account-profile';
          include './_views/chrome-header.php';
          include './_views/account--navigation.php';
          include './_views/account--profile.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'account-notifications';
          include './_views/chrome-header.php';
          include './_views/account--navigation.php';
          include './_views/account--notifications.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'account-billing';
          include './_views/chrome-header.php';
          include './_views/account--navigation.php';
          include './_views/account--billing.php';
          include './_views/chrome-footer.php';
          break;


        // --
        // Billing
        // --

        case $pageName == 'account-billing-select';
          include './_views/chrome-header.php';
          include './_views/account--billing-select.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'account-billing-payment';
          include './_views/chrome-header.php';
          include './_views/account--billing-payment.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'account-billing-result';
          include './_views/chrome-header.php';
          include './_views/account--billing-result.php';
          include './_views/chrome-footer.php';
          break;


        // --
        // Sign in || Sign up
        // --

        case $pageName == 'sign-in';
          include './_views/auth--header.php';
          include './_views/auth--sign-in.php';
          include './_views/chrome-footer.php';
          break;

        case $pageName == 'sign-up';
          include './_views/auth--header.php';
          include './_views/auth--sign-up.php';
          include './_views/chrome-footer.php';
          break;

        default:
          include './_views/auth--header.php';
          include './_views/auth--404.php';
          include './_views/chrome-footer.php';
          break;
      }
    } else {

      include './_views/auth--header.php';
      include './_views/auth--404.php';
      include './_views/auth--footer.php';

    }


    return false;
  }
}
