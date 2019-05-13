<?php
/**
* Plugin Name: Hyperbole
* Plugin URI: none
* Description: Custom JSON REST endpoints, an utility functions, for things like thumbnails, and wp hooks
* Version: 0.2.3
* Authors: Arthur Cormack
* Author URI: none
* License: none
*/

/**
 * One of the big things that we have to do, is perfect the cookie / mechanism, to enable the wp admin bar / or at least an edit button.
 * Do we want to be setting one of our own cookies, or instead use one of wp's cookies that is already set?
 * Also, is there a better way that we could pull the wp admin bar into play?
 * What about if it came from WP somehow, and never was a part of the react render. Like it was outside of the react dom.
 * ... outside of the <div id="app">? in a sibling dom node.
 * ... a mini api, for manipulating the dom outside of the react app?
 * 
 */

 /**
  * We should also think about what plugins should be required ... ACF? Yes. Let's make some opinionated decisions. H'mm ... maybe not. if we are going to make this repo public.
  * we don't want to depend on too many third party things, or any.
  * But we do want to include a basic plugin that does some basic stuff.
  * like set the permalink structure. And also set up an endpoint or two.
  * Getting a few posts for the homepage.
  * And also getting posts for categories and tags.
  * Don't worry about pagination. 
  * 
  */
  require('./includes/thumbnails.php');
  require('./includes/guess404Permalink.php');
  require('./includes/endpoints/homepage.php');
  require('./includes/endpoints/singleposts.php');
  require('./getAttachmentImage.php');// defines hyperbole_get_attachment_image
}

add_action( "rest_api_init", function () {
  // require a jwt to use the api?
  // so ... some routes, yes, and some, no
  // if it's just publicly available content why would we wast system resources parsing tokens when it isn't neccesary?
  
  register_rest_route( 'hyperbole/v1', '/getrecentposts', array(
		'methods' => 'GET',
			'callback' => 'hyperbole_getrecentposts',
		'args' => array(
		),
		'permission_callback' => function () {
			return true;
			//consider using some sort of key, so that this can't just be used willy nilly from external sources
		}
	) );
  
  register_rest_route( 'hyperbole/v1', '/getdatedpost/(?P<catslug>\S+)/(?P<yearslug>\d+)/(?P<monthslug>\d+)/(?P<dayslug>\d+)/(?P<postslug>\S+)', array(
		'methods' => 'GET',
		'callback' => 'hyperbole_getdatedpost',
		'args' => array(
			'catslug' => array(
				'validate_callback' => function($param, $request, $key) {
					return true;//how can it work when there are two different items in the route?
				}
			),
			'postslug' => array(
				'validate_callback' => function($param, $request, $key) {
					return true;
				}
			),
		),
		'permission_callback' => function () {
			return true;
			//consider using some sort of key, so that this can't just be used willy nilly from external sources
		}
	) );

}