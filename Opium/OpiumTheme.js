// ==UserScript==
// @name         KoGaMa Opium Theme
// @namespace    https://github.com/fehlst
// @version      1.0
// @description  Opium Theme for Kogama
// @author       fehlst
// @match        https://www.kogama.com/*
// @icon         https://i.discogs.com/5qxvewTfgF49H4Wu1cxjipMID3dkjGPZCSmZnZ5ouNk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTI3Njc2/NzAtMTcwNDA2ODg1/MC0zNjMzLmpwZWc.jpeg
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        * {
            font-family: 'Rockwell', 'Courier Bold', 'Courier', Georgia, Times, 'Times New Roman', serif !important;
            transition: all 0.2s ease-in-out;
        }

        html, body {
            background: url('https://c.tenor.com/_BcviaAHY5YAAAAd/tenor.gif') no-repeat center center fixed !important;
            background-size: cover !important;
            color: #ffffff !important;
            animation: fadeInText 1.5s ease-out;
        }

        @keyframes fadeInText {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        a, h1, h2, h3, h4, h5, h6 {
            color: #ffffff !important;
            text-shadow: 0 0 6px #ffffff;
        }

        button, input, textarea, select {
            background-color: rgba(26, 26, 26, 0.7) !important;
            border: 1px solid #ffffff !important;
            color: #ffffff !important;
            border-radius: 8px !important;
            padding: 6px 10px !important;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(3px);
        }

        button:hover, input:hover, select:hover, textarea:hover {
            animation: shake 0.4s infinite;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
            transform: scale(1.03);
        }

        @keyframes shake {
            0% { transform: translate(0, 0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(-1px, 1px); }
            80% { transform: translate(1px, -1px); }
            100% { transform: translate(0, 0); }
        }

        ::selection {
            background: #ffffff;
            color: #0a0a0a;
        }

        .glow {
            animation: whiteglow 2s infinite;
        }

        @keyframes whiteglow {
            0% { text-shadow: 0 0 5px #ffffff; }
            50% { text-shadow: 0 0 15px #ffffff; }
            100% { text-shadow: 0 0 5px #ffffff; }
        }

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #111;
        }

        ::-webkit-scrollbar-thumb {
            background: #fff;
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #aaa;
        }

        .container, .box, .card, .panel {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            backdrop-filter: blur(5px);
            padding: 10px;
            box-shadow: 0 0 20px rgba(255,255,255,0.05);
        }

        /* Neues CSS für das Logo */
        a.MuiTypography-root[title="KoGaMa"] img {
            content: url('https://ih1.redbubble.net/image.2950444449.6282/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp') !important;
            width: auto !important;
            height: 40px !important;
        }
    `);
})();
