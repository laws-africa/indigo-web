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

    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/laws-africa/indigo-web@5.2.2/css/indigo-web.min.css">

### From your server

Install indigo-web using npm:

    $ npm install indigo-web

Then use either the compiled CSS:

    <link rel="stylesheet" type="text/css" href="indigo-web/css/indigo-web.min.css">

Or use the SCSS files:

    @import 'indigo-web/scss/indigo-web';

## Overriding variables

You can override variables when using SCSS by copying them from ``_variables.scss`` into ``_custom.scss`` and changing
their values.

## Building

To build changes:

* npm install
* npm run build
* git add css/*

## Release process

* update VERSION
* update version in `package.json`
* update version in URL in README
* update Version History (below)
* build as above
* tag release: `git tag vX.X.X`
* push to GitHub: `git push; git push origin --tags`
* publish to npm: `npm publish --dry-run`

# Version history

## 5.2.2 (15 November 2021)
* Move all styling into mixins,so other libraries can include our mixins and include them in their 
  own top-level selectors
* Replace ruby sass with npm sass   

## 5.2.1 (27 October 2021)

* Bulleted lists

## 5.2.0 (31 May 2021)

* Namibia (na) formatting

## 5.1.1 (23 March 2021)

* Support for commencement note on coverpage

## 5.1.0 (12 October 2020)

* Support for footnotes
* Support for embeddedStructures
* Support for headings for subsections, paragraphs and subparagraphs

## 5.0.0 (4 June 2020)

This version assumes AKN 3.0 documents from Indigo.

* Attachments (schedules) should not have italicised headings

## 4.0.0 (21 April 2020)

* BREAKING: akoma-ntoso.scss is now indigo-web.scss
* BREAKING: akoma-ntoso.css is now indigo-web.css

## 3.13.0 (15 April 2020)

* Cross headings in KE aren't italicised

## 3.12.0 (20 March 2020)

* Styling for parent work title on generated coverpage

## 3.11.0 (25 February 2020)

* Styling for commencement dates on generated coverpage

## 3.10.0 (23 January 2020)

* Styling for .place-name in generated coverpage

## 3.9.0 (3 December 2019)

* Utilities for aligning text: ``akn--text-left``, ``akn--text-right`` and ``akn--text-center``

## 3.8.0 (16 October 2019)

* Added Kenya (KE) styling
* KE: remarks are not italicised, and single-line remarks are centered

## 3.7.0 (4 October 2019)

* Styling for new .as-at-date-notice element on generated coverpage
* Split out generated coverpage styling into separate file

## 3.6.1 (19 September 2019)

* Explicit styling for crossHeading elements (italics)
* hcontainer elements are block elements
* Reduce spacing between schedule title and headings

## 3.5.0 (17 July 2019)

* Explicit font for h1, h2, h3, h4, h5 tags

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
