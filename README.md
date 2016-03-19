# Indigo Web

Stylesheets and Javascript for use with HTML documents published using the [Indigo platform](https://indigo.readthedocs.org).

## Usage

Install indigo-web using bower:

    $ bower install indigo-web

Then use either the compiled CSS:

    <link rel="stylesheet" type="text/css" href="indigo-web/css/akoma-ntoso.min.css">

Or use the SCSS files:

    @import 'indigo-web/scss/akoma-ntoso';

## Overriding variables

You can override variables when using SCSS by copying them from ``_variables.scss`` into ``_custom.scss`` and changing
their values.

# License

Licensed under an MIT license.
