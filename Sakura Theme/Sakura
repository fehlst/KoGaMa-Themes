// ==UserScript==
// @name         ❀Kogama Sakura Theme❀
// @namespace    https://github.com/fehlst
// @version      1.4
// @description  Cute Sakura Theme
// @author       fehlst
// @match        *://*.kogama.com/*
// @grant        GM_addStyle
// @grant        GM_addElement
// @run-at       document-end
// @icon         https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsakura-festival-2%2F512%2FSakura-spring-japanese-03-512.png&f=1&nofb=1&ipt=b6ef045597803e38e19eb9164ca278373bed6e5939b23ccd02b346faecc0c89f&ipo=images
// ==/UserScript==


(function() {
    'use strict';

 
    GM_addElement(document.head, 'link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Playfair+Display:wght@500&display=swap'
    });

    
    GM_addStyle(`
        /* Globale Font */
        * {
            font-family: 'Dancing Script', cursive !important;
        }

        /* Titles in Playfair Display */
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif !important;
        }

        /* Background */
        body {
            background: url('https://img.freepik.com/fotos-gratis/bela-cena-de-desenho-animado-de-paisagem-de-sakura-de-anime_23-2151035212.jpg') no-repeat center center fixed !important;
            background-size: cover !important;
        }

        /* Black Bars */
        div[style*="background: black"],
        div[style*="background: #000"],
        div[style*="background-color: rgb(0, 0, 0)"],
        div[style*="rgba(0,0,0"],
        div[class*="side" i], /* Sidebars */
        div[class*="nav" i],  /* Navigationsleisten */
        div[class*="foot" i], /* Footer */
        div[class*="panel" i] /* Panels */
        {
            background: rgba(255, 182, 193, 0.1) !important;
            backdrop-filter: blur(25px) !important;
            border: none !important;
        }

        
        div[class*="side"] *,
        div[class*="nav"] *,
        div[class*="foot"] *,
        div[class*="panel"] * {
            color: white !important;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }

        /* Buttons & Links */
        button, .btn, [class*="button"] {
            background: rgba(255, 136, 164, 0.6) !important;
            border-radius: 12px !important;
            font-family: 'Dancing Script' !important;
            font-weight: 700 !important;
        }

        a {
            color: #ff69b4 !important;
            text-decoration: none !important;
        }

        /* Debug-Banner */
        #sakura-debug {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #ff69b4;
            color: white;
            padding: 12px;
            border-radius: 8px;
            z-index: 999999;
            font-family: 'Dancing Script', cursive !important;
            font-size: 1.2em;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
    `);

    
    const debug = document.createElement('div');
    debug.id = 'sakura-debug';
    debug.innerHTML = '🌸 SAKURA THEME ACTIVATED';
    document.body.appendChild(debug);
})();
