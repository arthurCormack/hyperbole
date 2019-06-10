<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Space_Theme
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
	<?php if (is_active_sidebar( 'footer-widget' )): ?>
		<div class="footer-middle space-padding bg-dark">
			<div class="container">
				<div class="row">
					<?php 
						dynamic_sidebar('footer-widget');
					 ?>
				</div>
			</div>
		</div>
	<?php endif; ?>
		<div class="footer-bottom">
				<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="site-info">
		<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'gute' ) ); ?>"><?php
					/* translators: %s: CMS name, i.e. WordPress. */
					printf( esc_html__( 'Proudly powered by %s', 'gute' ), 'WordPress' );
				?></a>
				<span class="sep"> | </span>
				<?php
					/* translators: 1: Theme name, 2: Theme author. */
					printf( esc_html__( 'Theme: %1$s by %2$s', 'gute' ), 'gute', '<a href="'.esc_url('https://wpthemespace.com/product/gute/').'">wpthemespace.com</a>' );
				?>
					</div><!-- .site-info -->
				</div>
				<div class="col-md-6">
					<div class="footer-menu text-right">
						<?php
						wp_nav_menu( array(
						    'theme_location' => 'footer-menu', // Defined when registering the menu
						    'container'      => false,
						    'menu_class'     => 'footer-nav',
						    'fallback_cb'     => '__return_false',
						        ) );
						        ?>
					</div>
				</div>
			</div>
		</div>
		
		</div>
	
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
