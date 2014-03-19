Qualicum Beach For...
=====================

A portal web site for the Town of Qualicum Beach. 

## Using LESS Preprocessor For CSS

This site uses the LESS preprocessor for css and the files are organized according to the following structure. 

    css/
    modules/
    qb.less
    qb.css

The file qb.less contains just global LESS variables for use in other files, and then imports everything from modules/ at the end of the file. Grunt is used to compile all the files into a single qb.css file, which is included in the HTML.

### The css/modules/ Directory

Each module is either an HTML element or class name, with the exceptions of:

type.less - Controls global typography settings.
layout.less - Controls global layout settings.
media-queries.less - Defines breakpoints for responsive design.

The site is made up of usable "blocks" of HTML in <section> tags. Each section has a class name, which is how you can identify the CSS module.

## Using Grunt For Compiling CSS and JS Files



