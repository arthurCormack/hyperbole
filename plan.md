The plan for me, Arthur, doing this hyperbole thing.

ok. Make it work.

Make the `docker-compose up` work, so that it runs properly, and we can see it running, on a port. It doesn't have to be port 80.

Make the diagram that shows how it works.
Make a few little sketchs as well to illustrate:

How it works in a nutshell

Getting Started
Using Docker for local dev.
Caveat: You don't need to use docker. I include it here, because it's a very fast way to get started.

How it would work in production is another matter, but the gist of it is still the same, some kind of basic proxying. If it is load balanced between multiple wp servers, sticky sessions would probably be a good idea. Otherwise, maybe consider using a JWT authentication / id/ SSO provider instead of traditional wp mechanism.

The demo, should start, and if it is a fresh installation of wordpress, it should create a few sample posts. So that when we go to try it out, we see some lorem ipsum posts and maybe some cat pictures.

Then, send out some messages to key people in the wordpress and react circles, announcing the arrival of this thing.
