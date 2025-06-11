# CDCgov GitHub Organization Open Source Project Template

This repo is a compilation of the design system for the Data Integration Building Blocks (DIBBs) project at the CDC.
It's an attempt to provide a starting point for new and existing DIBBs team to use a unified design language that matches the
created specs from our design colleagues.

Included are

- A configuration of the base USWDS styles that the system is based on
- A Gulp compilation setup that translates the Sass into CSS (this is done by NextJS in most of the existing DIBBs projects / handled in different ways in the actual application frontends)
- A `design_system.scss` file that provides the actual design system overrides that are the "core" of the design system styles. The engineers made an implementation decision to implement the design system at the Sass level, maintaining the interface of the USWDS utility classes
- An example `index.html` that showcases the overriden styles / how to use access them in actual markup.

## Setup

Install the relevant packages using `npm install`. Then, run `npm run start` to spin up the simple Node server to see the complied styles at `localhost:8080`.

If you want to extend the Sass, make any changes you need and then compile it into CSS by running `npm run compile`. You might need to clear the cache in your local browser to see the changes.
