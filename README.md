# hyperbole
A slightly catchier name that HWPURBP (Hybrid Wordpress Universal React Boilerplate).

## Overview
What is Hyperbole?
It is a hybrid web framework with a few different technology stacks that work in tandem with one another.

Part of it is a the popular traditional CMS, Wordpress. Another Part is a modern isomorphic single page application (SPA), built with NodeJS, React, and a few other clever libraries.

Wordpress is used for creating content, and provides a JSON REST API, which is called by the SPA, both in client browsers, and on the node server during server-side rendering.  

Getting these two different stacks to play nicely together is actually not that difficult. It requires a reverse proxy server to route wordpress requests to wordpress, and all other requests to node.

In the interest of making it easy to set up and try out, I've created a docker-compose file.


These are the steps to getting started:

1) Clone the repo

2) cd into the dir

3) run docker-compose up -d
  - this will take a while on the first try, since it will first need to download a few images.
  - make sure you aren't already running anything on port 80.
  - it will now be running in developemnt mode.

4) in your browser, go to http://localhost/wp-admin and go through the steps to set up wordpress.
5) go to /wp-admin/plugins and enable the hyperbole plugin.

6) go to http://localhost to see it in action


In Production:


And there is also some proxying that helps them play nicely together. In the repo we have a an nginx conf that I like to use when I'm developing locally, but in other contexts, like in aws, for example, I would replicate the same sort of proxying with cloudfront/load balancers.
