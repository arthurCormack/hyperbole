<?php
/**
 * About setup
 *
 * @package gute
 */

if ( ! function_exists( 'gute_about_setup' ) ) :

	/**
	 * About setup.
	 *
	 * @since 1.0.0
	 */
	function gute_about_setup() {
		$theme = wp_get_theme();
		$config = array(
		// Menu name under Appearance.
		'menu_name'               => esc_html__( 'gute Info', 'gute' ),
		// Page title.
		'page_name'               => esc_html__( 'gute Info', 'gute' ),
		/* translators: Main welcome title */
		'welcome_title'         => sprintf( esc_html__( 'Welcome to %s! - Version ', 'gute' ), $theme['Name'] ),
		// Main welcome content
			// Welcome content.
			'welcome_content' => sprintf( esc_html__( '%1$s is now installed and ready to use. We want to make sure you have the best experience using the theme and that is why we gathered here all the necessary information for you. Thanks for using our theme!', 'gute' ), $theme['Name'] ),

			// Tabs.
			'tabs' => array(
				'getting_started' => esc_html__( 'Getting Started', 'gute' ),
				'recommended_actions' => esc_html__( 'Recommended Actions', 'gute' ),
				'useful_plugins'  => esc_html__( 'Useful Plugins', 'gute' ),
				'free_pro'  => esc_html__( 'Free Vs Pro', 'gute' ),
				),

			// Quick links.
			'quick_links' => array(
                'theme_url' => array(
                    'text' => esc_html__( 'Theme Details', 'gute' ),
                    'url'  => 'https://wpthemespace.com/product/gute',
                ),
                'demo_url' => array(
                    'text' => esc_html__( 'View Demo', 'gute' ),
                    'url'  => 'http://gute.wpthemium.com/',
                ),
                'documentation_url' => array(
                    'text'   => esc_html__( 'View Documentation', 'gute' ),
                    'url'    => 'http://gute.wpthemium.com/doc/',
                    'button' => 'primary',
                ),
                'video_url' => array(
                    'text'   => esc_html__( 'Show Video', 'gute' ),
                    'url'    => 'https://www.youtube.com/watch?v=FogqFZy3xfs&t',
                    'button' => 'primary',
                ),
                'update_url' => array(
                    'text'   => esc_html__( 'UPGRADE PRO', 'gute' ),
                    'url'    => 'https://wpthemespace.com/product/gute',
                    'button' => 'danger',
                ),
            ),

			// Getting started.
			'getting_started' => array(
				'one' => array(
					'title'       => esc_html__( 'Theme Documentation', 'gute' ),
					'icon'        => 'dashicons dashicons-format-aside',
					'description' => esc_html__( 'Please check our full documentation for detailed information on how to setup and customize the theme.', 'gute' ),
					'button_text' => esc_html__( 'View Documentation', 'gute' ),
					'button_url'  => 'http://gute.wpthemium.com/doc/',
					'button_type' => 'primary',
					'is_new_tab'  => true,
					),
				'two' => array(
					'title'       => esc_html__( 'Theme Options', 'gute' ),
					'icon'        => 'dashicons dashicons-admin-customizer',
					'description' => esc_html__( 'Theme uses Customizer API for theme options. Using the Customizer you can easily customize different aspects of the theme.', 'gute' ),
					'button_text' => esc_html__( 'Customize', 'gute' ),
					'button_url'  => wp_customize_url(),
					'button_type' => 'primary',
					),
				'three' => array(
					'title'       => esc_html__( 'Show Video', 'gute' ),
					'icon'        => 'dashicons dashicons-layout',
					'description' => sprintf( esc_html__( 'You may show Gute short video for better understanding', 'gute' ), esc_html__( 'One Click Demo Import', 'gute' ) ),
					'button_text' => esc_html__( 'Show video', 'gute' ),
					'button_url'  => 'https://www.youtube.com/watch?v=FogqFZy3xfs&t',
					'button_type' => 'primary',
					'is_new_tab'  => true,
					),
				'four' => array(
					'title'       => esc_html__( 'Demo Content', 'gute' ),
					'icon'        => 'dashicons dashicons-layout',
					'description' => sprintf( esc_html__( 'Demo content is pro feature. To import sample demo content, %1$s plugin should be installed and activated. After plugin is activated, visit Import Demo Data menu under Appearance.', 'gute' ), esc_html__( 'One Click Demo Import', 'gute' ) ),
					),
				'five' => array(
				    'title'       => esc_html__( 'Set Widgets', 'gute' ),
				    'icon'        => 'dashicons dashicons-tagcloud',
				    'description' => esc_html__( 'Set widgets in your sidebar, Offcanvas as well as footer.', 'gute' ),
				    'button_text' => esc_html__( 'Add Widgets', 'gute' ),
				    'button_url'  => admin_url().'/widgets.php',
				    'button_type' => 'link',
				    'is_new_tab'  => true,
				),
				'six' => array(
					'title'       => esc_html__( 'Theme Preview', 'gute' ),
					'icon'        => 'dashicons dashicons-welcome-view-site',
					'description' => esc_html__( 'You can check out the theme demos for reference to find out what you can achieve using the theme and how it can be customized. Theme demo only work in pro theme', 'gute' ),
					'button_text' => esc_html__( 'View Demo', 'gute' ),
					'button_url'  => 'http://gute.wpthemium.com/gute-preview',
					'button_type' => 'link',
					'is_new_tab'  => true,
					),
                'seven' => array(
                    'title'       => esc_html__( 'Contact Support', 'gute' ),
                    'icon'        => 'dashicons dashicons-sos',
                    'description' => esc_html__( 'Got theme support question or found bug or got some feedbacks? Best place to ask your query is the dedicated Support forum for the theme.', 'gute' ),
                    'button_text' => esc_html__( 'Contact Support', 'gute' ),
                    'button_url'  => 'https://wpthemespace.com/support/',
                    'button_type' => 'link',
                    'is_new_tab'  => true,
                ),
				),

					'useful_plugins'        => array(
						'description' => esc_html__( 'Theme supports some helpful WordPress plugins to enhance your site. But, please enable only those plugins which you need in your site. For example, enable WooCommerce only if you are using e-commerce.', 'gute' ),
						'already_activated_message' => esc_html__( 'Already activated', 'gute' ),
						'version_label' => esc_html__( 'Version: ', 'gute' ),
						'install_label' => esc_html__( 'Install and Activate', 'gute' ),
						'activate_label' => esc_html__( 'Activate', 'gute' ),
						'deactivate_label' => esc_html__( 'Deactivate', 'gute' ),
						'content'                   => array(
							array(
								'slug' => 'x-instafeed',
								'icon' => 'svg',
							),
							array(
								'slug' => 'gallery-box',
								'icon' => 'svg',
							),
							array(
								'slug' => 'contact-form-7',
								'icon' => 'svg',
							)
						),
					),
					// Required actions array.
					'recommended_actions'        => array(
						'install_label' => esc_html__( 'Install and Activate', 'gute' ),
						'activate_label' => esc_html__( 'Activate', 'gute' ),
						'deactivate_label' => esc_html__( 'Deactivate', 'gute' ),
						'content'            => array(
							'gallery-box' => array(
								'title'       => __('Gallery Box', 'gute' ),
								'description' => __( 'This recommended plugin is the best image and video gallery plugin. You may show your image, video and portfolio by this gallery plugin.', 'gute' ),
								'plugin_slug' => 'gallery-box',
								'id' => 'gallery-box'
							),
							'go-pro' => array(
								'title'       => '<a target="_blank" class="activate-now button button-danger" href="https://wpthemespace.com/product/gute">'.__('UPGRADE TO PRO','gute').'</a>',
								'description' => __( 'You will get more features and quicker support with the Pro version.', 'gute' ),
								'id' => 'go-pro'
							),
						),
					),
			// Free vs pro array.
			'free_pro'                => array(
				'free_theme_name'     => __('gute','gute'),
				'pro_theme_name'      => __('gute Pro','gute'),
				'pro_theme_link'      => 'https://wpthemespace.com/product/gute-pro/',
				/* translators: View link */
				'get_pro_theme_label' => sprintf( __( 'Get %s', 'gute' ), 'gute Pro' ),
				'features'            => array(
					array(
						'title'       => esc_html__( 'Daring Design for Devoted Readers', 'gute' ),
						'description' => esc_html__( 'gute\'s design helps you stand out from the crowd and create an experience that your readers will love and talk about. With a flexible home page you have the chance to easily showcase appealing content with ease.', 'gute' ),
						'is_in_lite'  => 'true',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Mobile-Ready For All Devices', 'gute' ),
						'description' => esc_html__( 'gute makes room for your readers to enjoy your articles on the go, no matter the device their using. We shaped everything to look amazing to your audience.', 'gute' ),
						'is_in_lite'  => 'true',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Home slider', 'gute' ),
						'description' => esc_html__( 'gute gives you extra slider feature. You can create awesome home slider in this theme.', 'gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Widgetized Sidebars To Keep Attention', 'gute' ),
						'description' => esc_html__( 'gute comes with a widget-based flexible system which allows you to add your favorite widgets over the Sidebar as well as on offcanvas too.', 'gute' ),
						'is_in_lite'  => 'true',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Multiple Header Layout', 'gute' ),
						'description' => esc_html__( 'gute gives you extra ways to showcase your header with miltiple layout option you can change it on the basis of your requirement', 'gute' ),
						'is_in_lite'  => 'true',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Banner Slider Options', 'gute' ),
						'description' => esc_html__( 'gute\'s PRO version comes with more Slider options to display and filter posts. For instance, you can have far more control on setting the source of the posts or how they are displayed, everything to push the content to the right people and promote it by the blink of an eye.', 'gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Flexible Home Page Design', 'gute' ),
						'description' => esc_html__( 'gute\'s PRO version has more controll available to enable you to place widgets on Footer or Below the Post at the end of your articles.', 'gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Masonry grid layout', 'gute' ),
						'description' => esc_html__( 'gute PRO verison has masonry grid layout so you can show your blog with awesome masonry grid layout with all devices supporte.', 'gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Advance Customizer Options', 'gute' ),
						'description' => esc_html__( 'Advance control for each element gives you different way of customization and maintained you site as you like and makes you feel different.', 'gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Advance Pagination', 'gute' ),
						'description' => esc_html__( 'Multiple Option of pagination via customizer can be obtained on your site like Infinite scroll, Ajax Button On Click, Number as well as classical option are available.','gute' ),
						'is_in_lite'  => 'ture',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Flexible Color Scheme', 'gute' ),
						'description' => esc_html__( 'Match your unique style in an easy and smart way by using an intuitive interface that you can fine-tune it until it fully represents you and matches your particular blogging needs.','gute' ),
						'is_in_lite'  => 'ture',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'Premium Support and Assistance', 'gute' ),
						'description' => esc_html__( 'We offer ongoing customer support to help you get things done in due time. This way, you save energy and time, and focus on what brings you happiness. We know our products inside-out and we can lend a hand to help you save resources of all kinds.','gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
					array(
						'title'       => esc_html__( 'No Credit Footer Link', 'gute' ),
						'description' => esc_html__( 'You can easily remove the Theme: gute by gute copyright from the footer area and make the theme yours from start to finish.', 'gute' ),
						'is_in_lite'  => 'false',
						'is_in_pro'   => 'true',
					),
				),
			),

			);

		gute_About::init( $config );
	}

endif;

add_action( 'after_setup_theme', 'gute_about_setup' );


//Admin notice 
function gute_admin_notice__error() {
    if(get_option('gnotice')){
        return;
    }
	$class = 'gute-notice notice notice-warning is-dismissible';
	$message = __( '<strong><span style="color:green;">Limited time offer For You:</span>  <span style="color:red">Gute PRO Now $19 Only.</span> You will get 3 diffrent blog style, masonry grid layout gallery features, on click demo install and many more features.</strong>', 'gute' );
    $url1 = esc_url('https://wpthemespace.com/product/gute/');
    $url2 =esc_url('https://www.youtube.com/watch?v=FogqFZy3xfs&t');

	printf( '<div class="%1$s" style="padding:10px 15px 20px;text-transform:uppercase"><p>%2$s</p><a target="_blank" class="button button-info" href="%3$s" style="margin-right:10px">'.__('View details','gute').'</a><a target="_blank" class="button button-primary" href="%4$s">'.__('Show Video','gute').'</a><button style="margin-left:10px" class="button button-info gute-dismiss">Dissimiss the notice</button></div>', esc_attr( $class ), wp_kses_post( $message ),$url1,$url2 ); 
}
add_action( 'admin_notices', 'gute_admin_notice__error' );

function gute_admin_notice_option(){
    if(isset($_GET['dismissed']) && $_GET['dismissed'] == 1 ){
        update_option( 'gnotice', 1);
    }
}
add_action('init','gute_admin_notice_option');