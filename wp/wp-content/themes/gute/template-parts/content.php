<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gute
 */

?>
<?php if (is_single()):
?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php gute_post_thumbnail(); ?>
		<header class="entry-header">
			<?php
				the_title( '<h1 class="entry-title">', '</h1>' );
			if ( 'post' === get_post_type() ) :
				?>
				<div class="single-meta">
					<span class="author"><?php echo wp_kses_post(get_avatar( get_the_author_meta('ID'))); ?> <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>"><?php echo esc_html(get_the_author_meta( 'display_name')); ?></a></span>
					<span><i class="fa fa-clock-o"></i> <?php echo esc_html(get_the_date(get_option( 'date_format' ))); ?></span>
					
				</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->
		<div class="entry-content">
			<?php
			the_content( sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'gute' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'gute' ),
				'after'  => '</div>',
			) );
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php gute_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	</article><!-- #post-<?php the_ID(); ?> -->
<?php else:
$gute_post_view = get_theme_mod( 'gute_post_view', 'list' );
if($gute_post_view == 'grid' ){
	$gute_view_class = 'post-card';
	$gute_view_column = 'col-lg-4 col-md-6 grid-post';
	$gute_img_column = '';
	$gute_text_column = '';
}else{
	$gute_view_class = 'row gute-row';
	$gute_view_column = 'col-md-12 list-post';
	$gute_img_column = 'col-lg-4 col-md-6';
	$gute_text_column = 'col-lg-8 col-md-6';
}
 ?>
	<div class="<?php echo esc_attr($gute_view_column); ?>">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="card <?php echo esc_attr($gute_view_class); ?> ">
			<div class="<?php echo esc_attr($gute_img_column); ?> card-img-set">
				<?php
				if(has_post_thumbnail()){
				 the_post_thumbnail( 'mediume', array('class'=> 'Card image cap') );
				}else{?>
					<img src="<?php echo esc_url(get_template_directory_uri().'/assets/img/default-img.jpg'); ?>" alt="<?php the_title(); ?>">
			<?php } ?>
				
				<div class="card-meta">
					<span><i class="fa fa-clock-o"></i> <?php echo esc_html(get_the_date(get_option( 'date_format' ))); ?></span>
					<span class="author"><?php echo wp_kses_post(get_avatar( get_the_author_meta('ID'))); ?> <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>"><?php echo esc_html(get_the_author_meta( 'display_name')); ?></a></span>
					
				</div><!-- .entry-meta -->
			</div>
			<div class="<?php echo esc_attr($gute_text_column); ?> card-body">
				<?php the_title( '<h5 class="card-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h5>' ); ?>
				<p class="card-text">
				<?php echo wp_trim_words( get_the_content(), '30' ) ?>
			    </p>
			    <a href="<?php the_permalink(); ?>" class="btn btn-outline-dark shadow"><?php esc_html_e('Read more','gute'); ?></a>
			</div>
			<div class="card-footer">
				<?php gute_entry_footer(); ?>
			</div><!-- .entry-footer -->
		</div>



	</article><!-- #post-<?php the_ID(); ?> -->
</div>
<?php endif; ?>
