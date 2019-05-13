<?php
function guess_404_permalink($someSlug) {
	global $wpdb;
  if ( $someSlug ) {
    $where = $wpdb->prepare("post_name LIKE %s", $wpdb->esc_like( $someSlug ) . '%');
    $post_id = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE $where AND post_status = 'publish'");
    if ( ! $post_id ) {
      return false;
    }
    return str_replace(home_url(), "", get_permalink($post_id));// gives us a relative url!
  }
  return false;
}