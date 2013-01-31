Scroll
======

Back 0.2
--------

Show/hide a link that scrolls back to top according to the document's scroll position.

Pure JavaScript implementation. You don't need any library or framework to use this piece of code.

Example
-------

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Example</title>
            <style>
            /**
             * DON'T FORGET TO ADD THE ELEMENT'S POSITION!
             * CONFIGURE THE WAY YOU WANT ...
             */
            #scroll-up-link {
                bottom: 0;
                right: 0;
            }
            </style>
        </head>
        <body>
            <!-- A lot of content here ... -->
            <a id="scroll-up-link" href="#">Scroll Up!</a>
            <script src="back.min.js"></script>
            <script>
            /*globals window, document, WillianVeiga */
            window.addEventListener('load', function () {
                'use strict';
    
                var link = document.getElementsByTagName('a')[0],
                    scrollBack = new WillianVeiga.Scroll.Back(link);
    
                scrollBack.bindEvents();
            });
            </script>
        </body>
    </html>

You can unbind all events calling unbindEvents:

    scrollBack.unbindEvents();

The showLinkAfter option represents the number of pixels from top of document scrollbar that is scrolled before the link appears:

    scrollBack = new WillianVeiga.Scroll.Back(link, {showLinkAfter: 1000});

Please, report bugs or fork it :)
