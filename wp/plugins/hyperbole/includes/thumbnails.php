<?php
function hyperbole_setupthumbnails() {
	add_theme_support( 'post-thumbnails' );
  add_image_size( 'square_160', 160, 160, true);
  add_image_size( 'square_240', 240, 240, true);
  add_image_size( 'square_320', 320, 320, true);
  add_image_size( 'square_640', 640, 640, true);
  add_image_size( 'thumb_1440p', 2560, 1440, false);
  add_image_size( 'thumb_1080p', 1920, 1080, false);
  add_image_size( 'thumb_720p', 1280, 720, false);
  add_image_size( 'thumb_480p', 720, 480, false);
  add_image_size( 'thumb_360p', 480, 360, false);
  add_image_size( 'thumb_240p', 352, 240, false);
  add_image_size( 'sharing', 560, 480, false ); // sized for sharing to facebook, twitter, etc.
}
add_action( 'init', 'hyperbole_setupthumbnails' );