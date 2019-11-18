// ==UserScript==
// @name         Confluence - Disable CTRL-S
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable CTRL-S on Confluence so I don't spam everyone
// @author       webmonarch
// @match        https://wiki.corp.adobe.com/pages/createpage.action?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const found = [
        document.body,
        document.querySelector('iframe').contentDocument.querySelector('#tinymce'),
        document.querySelector('input#content-title'),
    ];

    found.forEach(el => {
        console.log('Tampermonkey: : Adding listener for', el);
        el.addEventListener("keydown", function(e) {
            if (e.metaKey && e.keyCode === 83) {
                console.warn('Tampermonkey: Disabled CTRL-S on element', e.currentTarget);

                e.stopPropagation();
                e.preventDefault();
            }
        }, false);
    })

})();