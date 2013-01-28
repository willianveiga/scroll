Scroll
======

Back 0.1
--------

Show/hide a link that scrolls back to top according to the scroll position.

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
            <script src="scroll.back.min.js"></script>
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

Please, report bugs or fork it :)
