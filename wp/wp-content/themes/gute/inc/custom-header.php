<?php
/**
 * Sample implementation of the Custom Header feature
 *
 * You can add an optional custom header image to header.php like so ...
 *
	<?php the_header_image_tag(); ?>
 *
 * @link https://developer.wordpress.org/themes/functionality/custom-headers/
 *
 * @package gute
 */

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses gute_header_style()
 */
function gute_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'gute_custom_header_args', array(
		'default-image'          => '',
		'default-text-color'     => '000000',
		'width'                  => 1800,
		'height'                 => 600,
		'flex-height'            => true,
		'wp-head-callback'       => '',
	) ) );
}
add_action( 'after_setup_theme', 'gute_custom_header_setup' );
