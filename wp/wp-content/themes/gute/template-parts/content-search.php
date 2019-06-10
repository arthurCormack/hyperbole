<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gute
 */
$gute_post_view = get_theme_mod( 'gute_post_view', 'grid' );
if($gute_post_view == 'grid' ){
	$gute_view_class = 'post-card';
	$gute_view_column = 'col-lg-4 col-md-6 grid-post';
}else{
	$gute_view_class = 'flex-md-row';
	$gute_view_column = 'col-md-12 list-post';
}
?>

	<div class="<?php echo esc_attr($gute_view_column); ?>">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="card <?php echo esc_attr($gute_view_class); ?> ">
			<div class="card-img-set">
				<?php the_post_thumbnail( 'mediume', array('class'=> 'Card image cap') ) ?>
				<div class="card-meta">
					<span><i class="fa fa-clock-o"></i> <?php echo esc_html(get_the_date(get_option( 'date_format' ))); ?></span>
					<span class="author"><?php echo wp_kses_post(get_avatar( get_the_author_meta('ID'))); ?> <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>"><?php echo esc_html(get_the_author_meta( 'display_name')); ?></a></span>
					
				</div><!-- .entry-meta -->
			</div>
			<div class="card-body">
				<?php the_title( '<h5 class="card-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h5>' ); ?>
				<p class="card-text">
				<?php the_excerpt(); ?>
			    </p>
			    <a href="<?php the_permalink(); ?>" class="btn btn-outline-dark shadow"><?php esc_html_e('Read more','gute'); ?></a>
			</div>
			<div class="card-footer">
				<?php gute_entry_footer(); ?>
			</div><!-- .entry-footer -->
		</div>



	</article><!-- #post-<?php the_ID(); ?> -->
</div>
