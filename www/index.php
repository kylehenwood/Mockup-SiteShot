<?php
session_start();
include_once "views/viewClass.php";
/*
// Relearning the PHP

- View Class?
This class controls the displaying of the HTML on the page,
I should probably write a header.php and footer.php

- Model Class?
this is the class which holds all of the functions that I wil be calling,
this class extends the database class. that which includes all the functions
that require a database connection.

*/

class PageSelector
{
	public function run()
	{
		//print_r ($_SESSION);
		//print_r ($_POST);

		// Grab the page ID from the URL, if it doesn't exist
		// set the page to home

		if (isset($_GET['pageID'])) {
			$pageID = $_GET['pageID'];
		} else {
			$pageID = 'web';
		}

		$model = null;
		$rs = null;

		// picking a page layout based on the pageID
		switch ($pageID) {
			case 'web': include('views/webViewClass.php');
				$view = new HomeView($rs);
				break;

			case 'app': include('views/appViewClass.php');
				$view = new AppView($rs,$model);
				break;

			default;
				include('views/webViewClass.php');
				$view = new HomeView($rs);
				break;

		}

		// run displayPage function if no page is defined
		$view->displayPage();
	}
}


$page = new PageSelector;
$page->run();
