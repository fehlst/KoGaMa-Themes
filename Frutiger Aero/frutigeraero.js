// ==UserScript==
// @name         KoGaMa Frutiger Aero Theme
// @namespace    https://github.com/fehlst
// @version      1.3
// @description  Frutiger Aero Theme for KoGaMa
// @author       fehlst
// @match        *://*.kogama.com/*
// @icon         https://www.chip.de/ii/1/5/5/4/3/1/5/6/Bildschirmfoto_2012-07-16_um_17.26.16-fc3c4a99fc9f6821.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const frutigerAeroStyle = `
        @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;600&display=swap');

        :root {
            --aero-bg: rgba(255, 255, 255, 0.85);
            --aero-glass: rgba(235, 245, 255, 0.75);
            --aero-border: rgba(255, 255, 255, 0.8);
            --aero-text: #000000;
            --aero-text-secondary: #333333;
            --aero-accent: #0078d7;
            --aero-accent-light: #2196f3;
            --aero-font: 'Segoe UI', sans-serif;
            --aero-shadow: 0 0 20px rgba(0, 120, 215, 0.25);
            --aero-glow: 0 0 25px rgba(33, 150, 243, 0.5);
            --aero-highlight: rgba(245, 250, 255, 0.9);
            --aero-inactive: rgba(200, 215, 230, 0.7);
            --aero-gradient: linear-gradient(to bottom, var(--aero-highlight) 0%, var(--aero-glass) 50%, rgba(235, 245, 255, 0.7) 100%);
            --aero-text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        body {
            background-image: url('https://frutigeraeroarchive.org/images/wallpapers/miscellaneous/miscellaneous_5.jpg') !important;
            background-size: cover !important;
            background-position: center !important;
            background-attachment: fixed !important;
            color: var(--aero-text) !important;
            font-family: var(--aero-font) !important;
            letter-spacing: 0.2px !important;
            text-shadow: var(--aero-text-shadow) !important;
        }

        /* KoGaMa Logo */
        a.MuiTypography-root[title="KoGaMa"] img {
            content: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01093dcf-3500-4866-b84d-fb3c90fa9cfc/dgi80co-34ffa867-fdbd-479b-8562-c8e89181792c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDkzZGNmLTM1MDAtNDg2Ni1iODRkLWZiM2M5MGZhOWNmY1wvZGdpODBjby0zNGZmYTg2Ny1mZGJkLTQ3OWItODU2Mi1jOGU4OTE4MTc5MmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Blk-4vlfZ2YLyxpYerG6ORDCP35lV0g0gnP4zXbDufc') !important;
            height: auto !important;
            width: auto !important;
            max-height: 40px !important;
        }

        /* Header und Navigation */
        .header, .navbar, div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-dense._1sUGu.css-qizlhk,
        ._2mwlM, ._2Jlgl, .MuiCollapse-root, .MuiCollapse-vertical, ._1GTM6, ._290sk, ._1u05O, ._3RptD, div.tRx6U,
        .MuiCollapse-wrapper, .MuiCollapse-wrapperInner, ._3hI0M, ._3WhKY, .fodSP, ._34V3h, ._3BE5c, ._1ww_g, .aIhLa,
        ._18cmu, ._3ocQQ, ._3IcTR, ._1x2If, ._6PeV-, ._1r6yE, .akxxI, .UA3TP, .xUQNK, ._2mn_m, ._3tYRU, ._2loQt {
            background: var(--aero-glass) !important;
            backdrop-filter: blur(15px) saturate(180%) !important;
            border: 1px solid var(--aero-border) !important;
            box-shadow: var(--aero-shadow), inset 0 1px 1px var(--aero-highlight) !important;
            border-radius: 0 0 12px 12px !important;
            color: var(--aero-text) !important;
        }

        /* Friend Chat */
        .zUJzi, ._2BvOT, .o_DA6, .uwn5j, ._2ycRP, ._3qT0c, .F3PyX, ._375XK {
            background: var(--aero-glass) !important;
            backdrop-filter: blur(15px) saturate(180%) !important;
            border: 1.5px solid var(--aero-border) !important;
            border-radius: 12px !important;
            box-shadow: var(--aero-shadow), inset 0 1px 1px var(--aero-highlight) !important;
        }

        /* Chat Namen Fix */
        ._2XaOw, ._2XaOw * {
            background: var(--aero-bg) !important;
            border-radius: 8px !important;
            margin: 10px !important;
            padding: 10px !important;
            color: var(--aero-text) !important;
            text-shadow: none !important;
            font-weight: 500 !important;
        }

        .F3PyX {
            border-radius: 12px 12px 0 0 !important;
        }

        /* Buttons */
        .btn, button {
            background: var(--aero-gradient) !important;
            color: var(--aero-text) !important;
            border: 1.5px solid var(--aero-border) !important;
            border-radius: 7px !important;
            backdrop-filter: blur(8px) !important;
            font-family: var(--aero-font) !important;
            font-weight: 400 !important;
            transition: all 0.25s ease !important;
            box-shadow: var(--aero-shadow), inset 0 1px 0 var(--aero-highlight), 0 0 0 transparent !important;
            letter-spacing: 0.3px !important;
            text-shadow: var(--aero-text-shadow) !important;
        }

        .btn:hover, button:hover {
            background: linear-gradient(to bottom, var(--aero-accent-light), var(--aero-accent)) !important;
            color: white !important;
            box-shadow: var(--aero-glow), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
            transform: translateY(-2px) !important;
            border-color: rgba(255, 255, 255, 0.95) !important;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) !important;
        }

        .btn:active, button:active {
            transform: translateY(1px) !important;
            box-shadow: var(--aero-shadow), inset 0 2px 3px rgba(0, 0, 0, 0.2) !important;
        }

        /* Karten und Container */
        .card, .container, .panel, div._1Yhgq, div._6cutH, div._1pEP2, div._23o8J,
        .MuiPaper-root, .MuiCard-root, ._2DyPn {
            background: var(--aero-glass) !important;
            backdrop-filter: blur(15px) saturate(180%) !important;
            border: 1.5px solid var(--aero-border) !important;
            border-radius: 12px !important;
            box-shadow: var(--aero-shadow), inset 0 1px 1px var(--aero-highlight) !important;
            padding: 18px !important;
            transition: all 0.35s ease !important;
            color: var(--aero-text) !important;
        }

        /* Verbesserte Lesbarkeit für Text in Containern */
        .card *, .container *, .panel *, div._1Yhgq *, div._6cutH *, div._1pEP2 *, div._23o8J *,
        .MuiPaper-root *, .MuiCard-root *, ._2DyPn * {
            color: var(--aero-text) !important;
            text-shadow: var(--aero-text-shadow) !important;
        }

        .card:hover, .container:hover, .panel:hover, div._1Yhgq:hover, div._6cutH:hover, div._1pEP2:hover, div._23o8J:hover,
        .MuiPaper-root:hover, .MuiCard-root:hover, ._2DyPn:hover {
            box-shadow: var(--aero-glow), inset 0 1px 1px var(--aero-highlight) !important;
            transform: translateY(-3px) !important;
            background: var(--aero-bg) !important;
        }

        /* Input Felder */
        input, textarea, select {
            background: var(--aero-bg) !important;
            border: 1.5px solid var(--aero-border) !important;
            border-radius: 6px !important;
            color: var(--aero-text) !important;
            font-family: var(--aero-font) !important;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.12) !important;
            padding: 8px 10px !important;
            transition: all 0.25s ease !important;
            letter-spacing: 0.2px !important;
        }

        input:focus, textarea:focus, select:focus {
            border-color: var(--aero-accent) !important;
            box-shadow: var(--aero-glow), inset 0 2px 4px rgba(0, 0, 0, 0.08) !important;
            outline: none !important;
            transform: scale(1.02) !important;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 12px !important;
            background: var(--aero-glass) !important;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--aero-accent) !important;
            border-radius: 6px !important;
            border: 2px solid var(--aero-border) !important;
            background-image: var(--aero-gradient) !important;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--aero-accent-light) !important;
        }

        ::-webkit-scrollbar-track {
            background: var(--aero-glass) !important;
            border-radius: 6px !important;
            box-shadow: inset 0 0 6px rgba(0, 120, 215, 0.12) !important;
        }

        /* Tabellen */
        table {
            background: var(--aero-glass) !important;
            border-collapse: separate !important;
            border-spacing: 0 !important;
            border-radius: 12px !important;
            overflow: hidden !important;
            box-shadow: var(--aero-shadow), inset 0 1px 1px var(--aero-highlight) !important;
        }

        th, td {
            border: 1.5px solid var(--aero-border) !important;
            padding: 10px 14px !important;
            background: var(--aero-glass) !important;
            transition: all 0.25s ease !important;
            color: var(--aero-text) !important;
            text-shadow: var(--aero-text-shadow) !important;
        }

        th {
            background: var(--aero-gradient) !important;
            font-weight: 600 !important;
            letter-spacing: 0.3px !important;
        }

        tr:hover td {
            background: var(--aero-highlight) !important;
            box-shadow: var(--aero-glow) !important;
        }

        
        a {
            color: var(--aero-accent) !important;
            text-decoration: none !important;
            transition: all 0.2s ease !important;
            font-weight: 500 !important;
            text-shadow: none !important;
        }

        a:hover {
            color: var(--aero-accent-light) !important;
            text-shadow: var(--aero-glow) !important;
        }

        [title]:hover::after {
            content: attr(title) !important;
            position: absolute !important;
            bottom: 120% !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            padding: 8px 12px !important;
            background: var(--aero-bg) !important;
            border: 1.5px solid var(--aero-border) !important;
            border-radius: 6px !important;
            backdrop-filter: blur(15px) saturate(180%) !important;
            box-shadow: var(--aero-shadow), var(--aero-glow) !important;
            font-size: 13px !important;
            white-space: nowrap !important;
            z-index: 1000 !important;
            letter-spacing: 0.2px !important;
            color: var(--aero-text) !important;
            text-shadow: var(--aero-text-shadow) !important;
        }

        
        ._28mON, ._28mON * {
            color: var(--aero-text) !important;
            text-shadow: var(--aero-text-shadow) !important;
        }
    `;

    
    const styleElement = document.createElement('style');
    styleElement.textContent = frutigerAeroStyle;
    document.head.appendChild(styleElement);
})();
