Qualicum Beach For...
=====================

A portal web site for the Town of Qualicum Beach. 

## Project Setup (Grunt for LESS and CSS files)

To set up the project, type the following in Terminal:

    git clone https://github.com/nerdburn/qualicum-beach.git qualicum-beach
    cd qualicum-beach
    npm install

This will install Grunt for concatenating and minifying LESS and CSS files. If you make any changes to the LESS files, you'll need to run:

    grunt
    
This will process the LESS into CSS as well as build the Javascript dependencies.
        
## How The CSS Is Organized

This site uses the LESS preprocessor for css and the files are organized according to the following structure. 

    css/
    modules/
    qb.less
    qb.css

The file qb.less contains just global LESS variables for use in other files, and then imports everything from modules/ at the end of the file. 

Grunt is used to compile all the files into a single qb.css file, which is included in the HTML.

### The css/modules/ Directory

Each module is either an HTML element or class name, with the exceptions of:

- *type.less* - Controls global typography settings.    
- *layout.less* - Controls global layout settings.
- *media-queries.less* - Defines breakpoints for responsive design.

The site is made up of usable "blocks" of HTML in <section> tags. Each section has a class name, which is how you can identify the CSS module.
    
### Section Blocks

Each of the blocks of HTML in the <section> tags represents it's own itended module in the CMS. These blocks should be interchangeable for building pages.