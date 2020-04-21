#!/bin/bash
set -e
set -x

sass --style compressed scss/indigo-web.scss css/indigo-web.min.css
sass scss/indigo-web.scss css/indigo-web.css
