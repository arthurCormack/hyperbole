<?php
  //hyperbole_excerpt
  function hyperbole_excerpt($whichPostID=false, $limit=100, $stripShortCodes=true) {
    $limit = intval($limit);//in case we get sent a string
    if ($whichPostID) {
      $somePostID = $whichPostID;
      $somePost = get_post($whichPostID);
    } else {
      //if we aren't passed a post id, use global post by default
      global $post;
      $somePost = $post;
      $somePostID = $somePost->ID;
    }
    
    $someContent = "";
    
    if (has_excerpt($somePostID)) {
      
      if ($stripShortCodes) {
        $someContent .= strip_shortcodes( strip_tags($somePost->post_excerpt) );
      } else {
        $someContent .= strip_tags($somePost->post_excerpt);
      }
     
    } else {
      
      if ($stripShortCodes) {
        $someContent .= strip_shortcodes( strip_tags($somePost->post_content));
      } else {
        $someContent .= strip_tags($somePost->post_content);
      }
    }
    // Find the last space (between words we're assuming) after the max length.
    if (strlen($someContent) > $limit) {
       $last_space = strrpos( substr( strip_tags($someContent), 0, $limit), ' ');
      // Trim
      $trimmed_text = substr(strip_tags($someContent), 0, $last_space);
    } else {
      $trimmed_text = $someContent;
    }

  }