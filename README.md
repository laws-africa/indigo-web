# Indigo Web

[![Build Status](https://travis-ci.org/laws-africa/indigo-web.svg)](http://travis-ci.org/laws-africa/indigo-web)

Stylesheets for use with HTML documents published using the [Indigo platform](https://indigo.readthedocs.org).
They make Akoma Ntoso documents look beautiful.

## Usage

First, wrap your Akoma Ntoso HTML content with the `.akoma-ntoso` class, such as:

```html
<div class="akoma-ntoso">...</div>
```

Second, include the CSS as described below.

### From CDN

Use the assets directly from the [jsDelivr](https://www.jsdelivr.com) CDN:

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/laws-africa/indigo-web@3.4.0/css/akoma-ntoso.min.css">

### From your server

Install indigo-web using npm:

    $ npm install indigo-web

Then use either the compiled CSS:

    <link rel="stylesheet" type="text/css" href="indigo-web/css/akoma-ntoso.min.css">

Or use the SCSS files:

    @import 'indigo-web/scss/akoma-ntoso';

## Overriding variables

You can override variables when using SCSS by copying them from ``_variables.scss`` into ``_custom.scss`` and changing
their values.

## Building

To build changes:

* gem install sass
* ./build.sh
* git add css/*

## Release process

* update VERSION
* update version in `package.json`
* update version in URL in README
* update Version History (below)
* build as above
* tag release: `git tag vX.X.X`
* push to GitHub: `git push origin --tags`
* publish to npm: `npm publish --dry-run`

# Version history

## 3.4.0 (16 July 2019)

* Styling for new generated verification notice in coverpages

## 3.3.0 (7 June 2019)

* Include a small amount of whitespace after very long outdented numbers to prevent clashing with text when the numbers are wide

## 3.2.0 (1 May 2019)

* display .akn-p elements as blocks with paragraph spacing
* last child in table cell mustn't have padding

## 3.1.0 (23 April 2019)

* longTitle is a block element with padding beneath it

## 3.0.0 (22 April 2019)

* Correctly support overriding SCSS variables
* Add PT Serif from Google Fonts as a font fallback. This better supports print environments and Linux systems.

## 2.0.0 (28 March 2019)

* Show .akn-paragraph as a block
* Show .akn-longTitle in bold
* Don't indent .akn-subsection and .akn-paragraph if they have .akn--no-indent
* Moved away from custom CDN, use jsdelivr instead.

## 1.0.1 (22 May 2018)

* Minor fixes

## 1.0.0 (22 May 2018)

* Support for country-specific traditions
* Polish tradition
* Moved to npm in favour of bower

## 0.1.3 (22 October 2017)

* Styling for images

## 0.1.2 (19 March 2017)

* Styling for rendering commencement and assent notices as list items, not headings.

## 0.1.1 (19 March 2016)

* Bump base font size to 15px to improve legibility with serif fonts.

## 0.1.0 (19 March 2016)

* Initial release

# License

Licensed under an MIT license.
