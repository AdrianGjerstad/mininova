# MiniNova Package Styleguide

Last Updated: 2019-07-27

This document will go into detail on how to design a good and readable package
file for MiniNova to handle.

## Package Barebones

To start, there are two things a package must have. The first is a private
scope. You must also have access to the most recent version of MiniNova, that
is, MiniNova is being built right now, we need to add on to it. This is done in
the code you see below:

```js
(async function(mn) {
  // Package code goes here.
})(window.mn)
```

Let's go through each line:

1. `(async function(mn) {` &mdash; This opens the private scope that is required
   to build a MiniNova package from scratch. Number 3 gets into detail as to
   what the `mn` is. The `async` denotation is to tell the JSVM not to continue
   with the next bit of code until it is done. This makes it so that certain
   packages may not be overwritten by others.
2. `// Package code goes here.` &mdash; No explanation needed, really.
3. `})(window.mn)` &mdash; This is what is passed into the anonymous function
   (private scope) as `mn`. As you may be able to tell, it is the most current
   version of MiniNova as it is being constructed.

> Read
> https://www.dummies.com/web-design-development/javascript/how-to-use-anonymous-functions-to-code-with-javascript/
> to learn more about anonymous functions/self-invoking functions

## Information and Sanity Protection

We all know that errors are annoying, but that is mostly due to the fact that we
don't want to debug something for the 30,000th time. To fix this, we can make
warnings whenever something isn't quite right. In this case, if `mn` wasn't
defined, we can easily assume that the user didn't use the root file
(`mininova.js`) to load in packages.

Add the code below to the beginning of your package:

```js
if(typeof mn === "undefined") {
  mn = {};
  console.warn("You did not use mininova.js for loading!");
}
```
