<?php
function hyperbole_get_attachment_image($attachment_id, $size = 'thumbnail', $icon = false, $attr = '') {
    $html = '';
    $image = wp_get_attachment_image_src($attachment_id, $size, $icon);
		if ( $image ) {
        list($src, $width, $height) = $image;
        $hwstring = image_hwstring($width, $height);
        $size_class = $size;
        if ( is_array( $size_class ) ) {
            $size_class = join( 'x', $size_class );
        }
        $attachment = get_post($attachment_id);
        $default_attr = array(
            'src'   => $src,
            'class' => "attachment-$size_class size-$size_class",
            'alt'   => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ),
						'srcSet' => wp_get_attachment_image_srcset( $attachment_id )
        );

        $attr = wp_parse_args( $attr, $default_attr );

        // Generate 'srcset' and 'sizes' if not already present.
        if ( empty( $attr['srcSet'] ) ) {
						$attr['srcset_alreaddyset'] = 'false';
            $image_meta = wp_get_attachment_metadata( $attachment_id );

            if ( is_array( $image_meta ) ) {
                $size_array = array( absint( $width ), absint( $height ) );
                $srcset = wp_calculate_image_srcset( $size_array, $src, $image_meta, $attachment_id );
                $sizes = wp_calculate_image_sizes( $size_array, $src, $image_meta, $attachment_id );

								//not getting in here?
								$attr['srcSet'] = $srcset;

                if ( $srcset && ( $sizes || ! empty( $attr['sizes'] ) ) ) {
                    $attr['srcSet'] = $srcset;
                    if ( empty( $attr['sizes'] ) ) {
                        $attr['sizes'] = $sizes;
                    }
                }
            } else {
							$attr['srcSet'] = 'not available?';
						}
        } else {
					$attr['srcset_alreaddyset'] = 'true';
				}

        /**
         * Filters the list of attachment image attributes.
         *
         *
         * @param array        $attr       Attributes for the image markup.
         * @param WP_Post      $attachment Image attachment post.
         * @param string|array $size       Requested size. Image size or array of width and height values
         *                                 (in that order). Default 'thumbnail'.
         */
        $attr = apply_filters( 'wp_get_attachment_image_attributes', $attr, $attachment, $size );
        $attr = array_map( 'esc_attr', $attr );
    }
	return $attr;
}