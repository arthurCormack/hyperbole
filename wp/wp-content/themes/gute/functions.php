<?php
/**
 * Space Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package gute
 */

if ( ! function_exists( 'gute_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function gute_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Space Theme, use a find and replace
		 * to change 'gute' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'gute', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'gute' ),
			'footer-menu' => esc_html__( 'Footer Menu', 'gute' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'gute_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 100,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
		/**
		 * Add editor style
		 *
		 */
		add_editor_style( array(get_stylesheet_uri(),'assets/css/bootstrap.min.css' ) );


	}
endif;
add_action( 'after_setup_theme', 'gute_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function gute_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'gute_content_width', 640 );
}
add_action( 'after_setup_theme', 'gute_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function gute_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'gute' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'gute' ),
		'before_widget' => '<section id="%1$s" class="widget sidebar %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer widget', 'gute' ),
		'id'            => 'footer-widget',
		'description'   => esc_html__( 'Add footer widgets here.', 'gute' ),
		'before_widget' => '<div class="col-md-4"><div id="%1$s" class="footer-widget %2$s">',
		'after_widget'  => '</div></div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Mail champ widget', 'gute' ),
		'id'            => 'mail-widget',
		'description'   => esc_html__( 'Add mail code widgets here.', 'gute' ),
		'before_widget' => '<div id="%1$s" class="mail-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '',
		'after_title'   => '',
	) );
}
add_action( 'widgets_init', 'gute_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function gute_scripts() {
	wp_enqueue_style( 'bootstrap', get_template_directory_uri().'/assets/css/bootstrap.min.css',array(),'4.2.0','all' );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri().'/assets/css/font-awesome.min.css',array(),'4.7.0','all' );
	wp_enqueue_style( 'gute-default', get_template_directory_uri().'/assets/css/default.css',array(),'1.0.4','all' );
	wp_enqueue_style( 'gute-style', get_stylesheet_uri(),array(),'1.0.4','all' );


	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '20180810', true );
	wp_enqueue_script( 'gute-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '20180810', true );
	wp_enqueue_script( 'gute-skip-link-focus-fix', get_template_directory_uri() . '/assets/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'gute_scripts' );

function gute_pagination(){
	global $wp_query;
	$links = get_the_posts_pagination( array(
		'current' => max(1,get_query_var('paged')),
		'total' => $wp_query->max_num_pages,
		'type' =>'list',
		'mid_size' =>3,
	) );
	$links = str_replace("page-numbers", "pagination_num", $links);
	$links = str_replace("<ul class='pagination_num'>", "<ul>", $links);
	$links = str_replace("next pagination_num", "pagination_next", $links);
	$links = str_replace("prev pagination_num", "pagination_prev", $links);

	echo wp_kses_post($links);
}




/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Bootstrap nev walker
 */
require get_template_directory() . '/inc/bootstrap-navwalker.php';


/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Customizer pro info .
 */
require get_template_directory() . '/inc/info/class-customize.php';
/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load theme about section.
 */
if ( is_admin() ) {
    require_once trailingslashit( get_template_directory() ) . 'inc/about/class.about.php';
    require_once trailingslashit( get_template_directory() ) . 'inc/about/about.php';
}

function gute_excerpt_length( $length ) {
    return 25;
}
add_filter( 'excerpt_length', 'gute_excerpt_length', 999 );

