<?php

abstract class View
{

  protected $rs;      //  contains page info as read from the pages table

  public function __construct($rs)
  {
    $this->rs = $rs;
  }

  // this gets called as soon as this view is extended
  // from a page view constructor

  public function displayPage()
  {
    // decide what the content should be up here ...
    // This way when we check if the request is a pjax request, We can just send
    // the content and end the process

    // construct current page
    $this->displayContent();

    return false;
  }

  abstract protected function displayContent();
}