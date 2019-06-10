<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
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
		<h1 class="img-title">
			<?php
							/* translators: %s: search query. */
			printf( esc_html__( 'Search Results for: %s', 'gute' ), '<span>' . get_search_query() . '</span>' );
							?>
		</h1>
	</header><!-- .entry-header -->

</div>
<div class="container space-padding">
	<div class="row">
		<div class="col-md-<?php echo esc_attr( $gute_grid_number ); ?>">
			<section id="primary" class="content-area">
				<main id="main" class="site-main">
					<div class="row">

					<?php
					/* Start the Loop */
					while ( have_posts() ) :
						the_post();

						/**
						 * Run the loop for the search to output the results.
						 * If you want to overload this in a child theme then include a file
						 * called content-search.php and that will be used instead.
						 */
						get_template_part( 'template-parts/content', 'search' );

					endwhile;?>
					</div>
					<?php

					the_posts_navigation();

				else :

					get_template_part( 'template-parts/content', 'none' );

				endif;
				?>

				</main><!-- #main -->
			</section><!-- #primary -->
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
