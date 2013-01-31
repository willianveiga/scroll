/**
    Copyright 2013 Willian Gustavo Veiga

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*globals window */
var WillianVeiga = WillianVeiga || {};
WillianVeiga.Scroll = WillianVeiga.Scroll || {};

(function (namespace) {
    'use strict';

    var element,
        defaultOptions,
        clickEvent,
        scrollEvent,
        setInitialElementStyle;

    defaultOptions = {showLinkAfter: 10};

    namespace.Back = function (inputElement, options) {
        var option;

        element = inputElement;
        for (option in options) {
            if (options.hasOwnProperty(option)) {
                defaultOptions[option] = options[option];
            }
        }
        setInitialElementStyle();
    };

    namespace.Back.prototype.bindEvents = function () {
        element.addEventListener('click', clickEvent);
        window.addEventListener('scroll', scrollEvent);
    };

    namespace.Back.prototype.unbindEvents = function () {
        element.removeEventListener('click', clickEvent);
        window.removeEventListener('scroll', scrollEvent);
    };

    setInitialElementStyle = function () {
        var style = element.style;
        style.position = 'fixed';
        style.display = 'none';
    };

    clickEvent = function (event) {
        event.preventDefault();
        window.scrollTo(0, 0);
    };

    scrollEvent = function () {
        element.style.display = this.scrollY >= defaultOptions.showLinkAfter
            ? 'block'
            : 'none';
    };
}(WillianVeiga.Scroll));
