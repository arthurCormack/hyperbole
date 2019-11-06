<?php
function hyperbole_getrecentposts() {
  return "hello from hyperbole_getrecentposts";
  
  $args = array(
    'post_type' => 'post',
    'posts_per_page' => 11,
    'post_status' => 'publish',
  );

  $recent_posts_query = wp_get_recent_posts( $args );
  

  $recent_posts = array();
  // we don't need all the data, just some of it. So we include only what we need, in order to keep the json light and snappy.
	foreach( $recent_posts_query as $someRecentPost ){

    $postObj = new stdClass;
    
    $id = $someRecentPost['ID'];
    $postObj->post_title = $someRecentPost['post_title'];
    $postObj->post_permalink = str_replace(home_url(), "", get_permalink($someRecentPost['ID']));
    $postObj->images = 
    $someObj->categories = get_the_category($id);
    $somePost->excerpt = hyperbole_excerpt($id, 100, true, false);

    array_push($recent_posts, $postObj);
	}

  return $recent_posts;

}