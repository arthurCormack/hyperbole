<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package gute
 */
if ( is_active_sidebar( 'sidebar-1' ) ) {
	$gute_grid_number = 9 ;
}else{
	$gute_grid_number = 12 ;
}
get_header();
while ( have_posts() ) :
	the_post(); 
?>
<div class="page-head">
	 <?php
	  if (has_post_thumbnail()) {
	 	the_post_thumbnail('large');
	 	}else{ 
	 	the_header_image_tag();	
	 }
	 ?>
	 <div class="overlay-text"></div>
	<header class="img-header">
		<?php the_title( '<h1 class="img-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

</div>
<div class="container space-padding">
	<div class="row">
		<div class="col-md-<?php echo esc_attr( $gute_grid_number ); ?>">
			<div id="primary" class="content-area">
				<main id="main" class="site-main">

					<?php
					
						get_template_part( 'template-parts/content', 'single' );

						the_post_navigation();

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;

					endwhile; // End of the loop.
					?>
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
