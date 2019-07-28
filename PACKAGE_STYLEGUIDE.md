# MiniNova Package Styleguide

Last Updated: 2019-07-27

This document will go into detail on how to design a good and readable package
file for MiniNova to handle.

## File Location and Name

The MiniNova native packages use a special trick to mimic the way Java packages
work. Every section of the package name before the last section is a series of
nested directories, and the last package section name gives the name of the
JavaScript file. So the package at `mn.math.basic` is actually a `.js` file at
`.../mn/math/basic.js`. The default value of `...` is `lib/mininova/`.

## Package Barebones

To start, there are two things a package must have. The first is a private
scope. You must also have access to the most recent version of MiniNova, that
is, MiniNova is being built right now, we need to add on to it. This is done in
the code you see below:

```js
(async function(mn) {
  // Package code goes here.
  window.mn = mn;
})(window.mn)
```

Let's go through each line:

1. `(async function(mn) {` &mdash; This opens the private scope that is required
   to build a MiniNova package from scratch. Number 4 gets into detail as to
   what the `mn` is. The `async` denotation is to tell the JSVM not to continue
   with the next bit of code until it is done. This makes it so that certain
   packages may not be overwritten by others.
2. `// Package code goes here.` &mdash; No explanation needed, really.
3. `window.mn = mn;` &mdash; This takes all of the information you have put into
   the private scoped MiniNova object, and puts it into the public-global scope
   for your users to use.
4. `})(window.mn)` &mdash; This is what is passed into the anonymous function
   (private scope) as `mn`. As you may be able to tell, it is the most current
   version of MiniNova as it is being constructed.

> Read
> https://www.dummies.com/web-design-development/javascript/how-to-use-anonymous-functions-to-code-with-javascript/
> to learn more about anonymous, self-invoking functions

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

We also need to know when the package has finished loading. This can be done
with a simple call to `console.debug`, a function in the console object that
is not used that much, but is extremely helpful in certain situations, because
the messages it produces are of a slightly higher verbosity than normal logs.
This means that if you don't need it all of the time, or maybe you are logging
much unneeded data for the moment, you can just filter it out, but still get
critical messages like error messages.

Add the code below to the bottom of your package:

```js
console.debug("my.custom.package MiniNova Custom Package Installed");
// NOTE: The "Custom" denotation is not present in the standard MiniNova
// packages, because they are native to MiniNova.
```

## MiniNova Namespace Denotation

The last thing we need to do before we get into basic rules of thumb for package
content is to declare a namespace for our content. After your "Sanity
Protection" code, enter the following: (Note: After this, you start writing
content for the package.)

```js
mn.namespace_name = (mn.namespace_name||{});
```

This is probably the simplest piece of code you'll write. `mn` is simply just
the original MiniNova object we'll be adding on to, and `namespace_name` is just
a placeholder for the name of the namespace. The namespace is generally the same
as the second to last section in the package name. This is why there is an
`mn.math.PI` instead of an `mn.basic.PI`, or something else, because the file
that the `PI` value is defined in is at `mn.math.basic`.

Congratulations! Now all you have to do to define a new entry is to enter:

```js
mn.namespace_name.entry_name = ...
```

Remember, your package is not distributed with the rest of MiniNova, so you will
have to do your own version control. Also, no one will be fooled when you decide
take out half of MiniNova's content. JavaScript is not compiled for a reason: it
is open-source this way.

## General Nitpicks for Package Content

This is a broad section filled with advice for how to format the code you write.
Feel free to experiment with what you think is needed.

### Package Entry Count

In general, you should keep the number of entries you create per file under 50.
50 is pushing it, and anything above that is considered a substantial file, and
shouldn't be considered a package. Note: Entries do not include values inside
other objects, just the objects themselves, so

```js
entries.obj = {};

entries.obj.foo = "foo";

entries.func = function() {this.foo = "foo";}
entries.func.prototype.setBar = function() {this.foo = "bar";}

entries.func.createNew = function() {return new entries.func();}
```

Collectively counts as two entries, and not five.

### Version Dependencies

Sometimes, you may be working with an older version of MiniNova than your
package expected. This may be an issue if you need to access a newer external
package that doesn't otherwise exist. To deal with this, enter the following
code anywhere you need to write version-dependent code:

```js
if(mn.__VERSION__.CODE>=firstVersionCodeFromNeededFeature) {
  // Code for it existing
} else {
  // "Catch" code
}
```

This is why in the JSDoc of every package and entry is listed an `@version`
attribute with a number. That number is what you input as
`firstVersionCodeFromNeededFeature`.

Note: Not needed for features with a version code from `0`.

### External Package Dependencies

DO NOT USE `mn.loadPackage()` INSIDE YOUR PACKAGES. The reason async is defined
with the package declaration is to avoid thread-causing-like errors. Instead,
load the package before loading the one with the dependency, and add the
following code to the one with the dependency right after the initial sanity
protection code.

```js
if(!mn.__loadedPackages__["package.name.file"]) {
  console.error("package.name.file was not included when <this_package> needed it. Move or create an mn.loadPackage call right before loading <this_package>.");
}
```

NOTE: It is unwise to have interdependencies, but if needed, don't use the above
code, and don't use anything from the dependent package unless you are in a
function, or other executing body that will run after all packages have been
run. And, if you really want to be safe, have the above code in the sections you
need it!

### JSDoc Documentation

Custom packages follow different JSDoc rules than the native ones, so here are
both:

**Native Rules**

```js
/**
 * Summary of the entry or other element.
 *
 * Further, in depth description.
 *
 * @constructor <If a constructor>
 * @param {string} s Desc. <If needed>
 * @type {number} <If needed>
 * @const {number} <Same as type annotation but for constants>
 * @throws {Error} Desc. <If needed>
 * @returns {number} Desc. <If needed>
 * @typedef {Object} DataObject <Should be placed with constructor>
 *
 * @version 0 versionCode
 * @author John Doe <Nice to have, but not needed>
 * @see mn.math.PI <Not needed, but useful for referencing>
 */

// Do NOT use any other JSDoc comment annotations.
```

**Custom**

```js
/**
 * Summary of the entry or other element.
 *
 * Further, in depth description.
 *
 * @constructor <If a constructor>
 * @param {string} s Desc. <If needed>
 * @type {number} <If needed>
 * @const {number} <Same as type annotation but for constants>
 * @throws {Error} Desc. <If needed>
 * @returns {number} Desc. <If needed>
 * @typedef {Object} DataObject <Should be placed with constructor>
 *
 * @see mn.math.PI <Not needed, but useful for referencing>
 */

// Other JSDoc annotations are deemed not needed, but feel free to use them.
```

The only time JSDoc format is required is for native packages, and you don't
write those, so this is an optional critique.
