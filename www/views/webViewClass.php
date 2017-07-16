<?php
class HomeView extends View {
	protected function displayContent()	{

    include './_views-web/chrome-header.php';
    include './_views-web/pub--home.php';
    include './_views-web/chrome-footer.php';

	}
}
