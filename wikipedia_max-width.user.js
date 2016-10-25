// ==UserScript==
// @name         Wikipedia Max Width
// @namespace    http://netfall.io/
// @version      0.1
// @description  Limits the maximum vertical space Wikipedia is going to occupy on your screen for increased readability.
// @author       Netfall
// @match        *.wikipedia.org/wiki/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var body = document.getElementsByTagName("body")[0];
    body.style.maxWidth = "1000px";
    body.style.margin = "0 auto";

    var pageBase = document.getElementById("mw-page-base");
    pageBase.style.position = "absolute";
    pageBase.style.top = "0";
    pageBase.style.left = "0";
    pageBase.style.right = "0";

    var mwHead = document.getElementById("mw-head");
    mwHead.style.maxWidth = "1000px";
    mwHead.style.right = "auto";

    var simpleSearch = document.getElementById("simpleSearch");
    simpleSearch.style.width = "12.6em";

    var pSearch  = document.getElementById("p-search");
    pSearch.style.marginRight = "0";

    var pPersonal = document.getElementById("p-personal");
    pPersonal.style.right = "0";

    var panel = document.getElementById("mw-panel");
    panel.style.left = "auto";

    var content = document.getElementById("content");
    content.style.borderRightWidth = "1px";
    content.style.marginTop = "calc(5em - 1px)";
})();