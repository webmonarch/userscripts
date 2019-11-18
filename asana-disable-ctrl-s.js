// ==UserScript==
// @name         Asana - Disable CTRL-S
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable CTRL-S on Asana
// @author       You
// @match        https://app.asana.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("keydown", function(e) {
        if (e.metaKey && e.keyCode === 83) {
            console.warn('Tampermonkey: Disabled CTRL-S on element', e.currentTarget);

            e.stopPropagation();
            e.preventDefault();
        }
    }, false)

})();