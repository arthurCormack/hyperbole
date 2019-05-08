<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package gute
 */
if ( is_active_sidebar( 'sidebar-1' ) ) {
	$gute_grid_number = 9 ;
}else{
	$gute_grid_number = 12 ;
}
get_header();

?>
<div class="page-head">
	 <?php
	 	the_header_image_tag();	
	 ?>
	 <div class="overlay-text"></div>
	<header class="img-header">
		<h1 class="img-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'gute' ); ?></h1>
	</header><!-- .entry-header -->

</div>
<div class="container space-padding">
	<div class="row">
		<div class="col-md-<?php echo esc_attr( $gute_grid_number ); ?>">
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<section class="error-404 not-found">
				<div class="page-content">
					<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'gute' ); ?></p>

					<?php
					get_search_form(); ?>


				<div class="row widget-404">
					<div class="col-md-6">
						<?php
					the_widget( 'WP_Widget_Recent_Posts' );
					?>
					</div>
					<div class="col-md-6">
						<div class="widget widget_categories">
							<h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', 'gute' ); ?></h2>
							<ul>
								<?php
								wp_list_categories( array(
									'orderby'    => 'count',
									'order'      => 'DESC',
									'show_count' => 1,
									'title_li'   => '',
									'number'     => 10,
								) );
								?>
							</ul>
						</div><!-- .widget -->
					</div>
				</div>
				
				<div class="row widget-404">
					<div class="col-md-6">
						<?php 
						/* translators: %1$s: smiley */
					$gute_archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', 'gute' ), convert_smilies( ':)' ) ) . '</p>';
					the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$gute_archive_content" );
						 ?>
					</div>
					<div class="col-md-6">
						<?php
					the_widget( 'WP_Widget_Tag_Cloud' );
					?>
					</div>
				</div>
	
					
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->
		</div>
		<?php if ( is_active_sidebar( 'sidebar-1' ) ): ?>
		<div class="col-md-3">
			<?php get_sidebar(); ?>
		</div>
		<?php endif; ?>
	</div>
</div>
<?php
get_footer();