<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
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
<?php if ( have_posts() ) : ?>

<div class="page-head">
	 <?php
	 	the_header_image_tag();	
	 ?>
	 <div class="overlay-text"></div>
	<header class="img-header">
		<?php
				the_archive_title( '<h1 class="img-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>
	</header><!-- .entry-header -->

</div>
<div class="container space-padding">
	<div class="row">
		<div class="col-md-<?php echo esc_attr( $gute_grid_number ); ?>">
			<div id="primary" class="content-area">
				<main id="main" class="site-main">

				<div class="row">
				<?php

				/* Start the Loop */
				while ( have_posts() ) :
					the_post();

					/*
					 * Include the Post-Type-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_type() );

				endwhile; ?>
			</div>
	<?php
			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
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
