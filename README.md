# Static-HTML-blog-pages
Static blog pages to learn how to create web-pages in HTML and CSS.

Folder structure is as follows:

├── TASK                  (It contains the task images)
├── public                (The production files goes here)
│   ├── assets
│   │   ├── css
│   │   │   └── fonts
│   │   ├── images
│   │   └── js
│   └── index.html
├── README.md
└── resources             (The dev files goes here)
    └── assets
        ├── scripts       (The Javascript files goes here)
        └── styles
            ├── css       (The css files goes here and compiles to production css folder using gulp)
            └── scss      (The scss files goes here and compiles to production css folder using gulp)

The Task folder contains the PSD files of the blog pages.
I have used gulp to compile the SCSS files.
SCSS files gets concatinated with CSS files and minified version goes into public folder which is the production folder.
The Dynamic version of this project can be found in the Dynamic-javascript-blog-pages.