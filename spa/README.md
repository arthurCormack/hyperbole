<img src="https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Hyperbole</strong></div>
<div align="center">A Hybrid: the joining of a modern SPA Architechture to Wordpress.</div>
#Introduction
Hyperbole is a way of making a website, where content is controlled by Wordpress (or soon Drupal) and the presentation of that content
happens in a Universal (isomorphic) Single Page Application.
... need to insert an explanation of why this was necessary ... user experience, speed, functionality.
... why not just use WP as it is. For many websites, this might be the best direction to take.
## Why this project was started
I work for a media company, we have a number of writers and editors that are already familiar with Wordpress.
We wanted to keep using wordpress, but also to be able to do things like start a radio stream playing, and navigate around the site, without interrupting the stream. Or realtime updating of content, via socket.io. Or having really snappy Photo galleries.

## An Overview of How it works
Content is managed in the CMS (Wordpress, or soon, Drupal). Wordpress is the most popular CMS out there. It's awesome, and free and open-sourced. We have a user base that is familiar with it.

The SPA gets the content via JSON REST APIs.
Initial html is rendered on a NodeJS Server, and returned to client browsers. Subsequent content is rendered with client JS.

The tech stack of the SPA utilizes many popular and awesome libraries, like React, Redux, Redux-Saga, ReSelect, etc.
It was based of the amazing react-boilerplate project. Much of the structure, organization, and conventions are based on the React Boilerplate. And so this project owes a debt of gratitude and much appreciation to that project.
  
A proxy server is key, so that requests to CMS urls go to the CMS ( /wp-admin, /wp-json, etc. )
In this repo, we use NGINX for proxying, but there are many other ways to do it: HAProxy, Squid, Cloudfront, AWS ALBs, etc.

<br />

<div align="center">
  <!-- Dependency Status -->

  <!-- devDependency Status -->

  <!-- Build Status -->

  <!-- Test Coverage -->

</div>
<div align="center">
  <!-- Backers -->

  <!-- Sponsors -->

  <!-- Gitter -->

</div>

<br />

<div align="center">
  <sub>Created by <a href="https://twitter.com/arthurcormack">Arthur Cormack</a> and maintained with ❤️ by an amazing <a href="https://github.com/orgs/hyperbole/people">team of developers</a>.</sub>
</div>

## Features

<dl>
  <dt></dt>
  <dd></dd>
  <dt></dt>
  <dd></dd>
  <dt></dt>
  <dd></dd>
  <dt></dt>
  <dd></dd>
  <dt></dt>
  <dd></dd>
</dl>


<!-- <dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl> -->

But wait... there's more!

- _The best test setup:_ Automatically guarantee code quality and non-breaking
  changes. (Seen a react app with 100% test coverage before?)
- _Native web app:_ Your app's new home? The home screen of your users' phones.
- _The fastest fonts:_ Say goodbye to vacant text.
- _Stay fast_: Profile your app's performance from the comfort of your command
  line!
- _Catch problems:_ AppVeyor and TravisCI setups included by default, so your
  tests get run automatically on Windows and Unix.

There’s also a <a href="https://vimeo.com/168648012">fantastic video</a> on how to structure your React.js apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions.

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, `styled-components`, redux-saga, FontFaceObserver</i></sub>

## Quick start

1.  Make sure that you have Node.js v8.10 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.

Now you're ready to rumble!

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## Supporters

## License

This project is licensed under the MIT license, Copyright (c) 2018 Arthur
Cormack. For more information see `LICENSE.md`.