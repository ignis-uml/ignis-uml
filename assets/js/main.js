require('../css/main.css');

import Vue from 'vue';
import oCanvas from 'ocanvas';

import 'ace-builds/src-min-noconflict/ace' // Load Ace Editor

// Import initial theme and mode so we don't have to wait for 2 extra HTTP requests
import 'ace-builds/src-min-noconflict/theme-chrome'
import 'ace-builds/src-min-noconflict/mode-javascript'

// cdnjs didn't have a "no-conflict" version, so we'll use jsdelivr
const CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.3.3/src-min-noconflict';

const $rules = {
    start: [
        {
            token: 'empty_line',
            regex: /^\s*$/,
            next: 'start',
        },
        // We can validate the headers with regex
        {
            token: ['text', 'keyword.control', 'comment', 'text'],
            regex: /(\s*)([\w-]+)(: )(.*)/,
            next: 'apiHeaders',
        },
        // And mark the invalid ones
        {
            token: ['text', 'invalid.illegal', 'comment', 'text'],
            regex: /(\s*)(.*)(: )(.*)/,
            next: 'apiHeaders',
        },
    ],
    otherRulesBlock: [
        {
            regex: /^ \+/,
            token: 'keyword',
            next: 'otherRulesBlock',
        },
        // { ... }
    ],
};

ace.define('ace/mode/custom', ['require', 'exports', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/custom_highlight_rules'], (acequire, exports) => {
    const oop = acequire('ace/lib/oop');
    const TextMode = acequire('ace/mode/text').Mode;
    const CustomHighlightRules = acequire('ace/mode/custom_highlight_rules').CustomHighlightRules;

    oop.inherits(Mode, TextMode); // ACE's way of doing inheritance

    exports.Mode = Mode; // eslint-disable-line no-param-reassign
});

// This is where we really create the highlighting rules
ace.define('ace/mode/custom_highlight_rules', ['require', 'exports', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], (acequire, exports) => {
    const oop = acequire('ace/lib/oop');
    const TextHighlightRules = acequire('ace/mode/text_highlight_rules').TextHighlightRules;

    const CustomHighlightRules = function CustomHighlightRules() {
        this.$rules = new TextHighlightRules().getRules(); // Use Text's rules as a base
    };

    oop.inherits(CustomHighlightRules, TextHighlightRules);

    exports.CustomHighlightRules = CustomHighlightRules;
});

// Now we tell ace to use the CDN locations to look for files
ace.config.set('basePath', CDN);
ace.config.set('modePath', CDN);
ace.config.set('themePath', CDN);
ace.config.set('workerPath', CDN);



// Create Editor
const editor = ace.edit('editor', {
    mode: "ace/mode/html",
        theme: "ace/theme/dracula",
        maxLines: 50,
        minLines: 10,
        fontSize: 18
});

// Set Editor Theme and Mode
// editor.setTheme('ace/theme/chrome');
editor.session.setMode('ace/mode/javascript');

// editor.setTheme("ace/theme/monokai");
// editor.getSession().setMode("ace/mode/javascript");

editor.resize();
/*
var app = new Vue({
    delimiters: ['${', '}'],
    el: '#x',
    data: {
        message: 'Hello Vue!'
    }
});

// pass options to ace.edit
ace.edit(element, {
    mode: "ace/mode/javascript",
    selectionStyle: "text"
});
// use setOptions method to set several options at once
editor.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
});
// use setOptions method
editor.setOption("mergeUndoDeltas", "always");

// some options are also available as methods e.g.
// editor.setTheme(...)

// to get the value of the option use
editor.getOption("optionName");

*/
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');


var canvas = oCanvas.create({
    canvas: "#canvas",
    fps: 60
});
var button = canvas.display.rectangle({
    x: canvas.width / 2,
    y: canvas.width / 5,
    origin: { x: "center", y: "top" },
    width: 300,
    height: 100,
    fill: "linear-gradient(315deg, #079, #013)",
    shadow: "0 0 20px rgba(0,0,0, 0.8)"
});
canvas.addChild(button);

var increase = true;
button.bind("click tap", function () {
    if (increase) {
        increase = false;

        this.stop().animate({
            x: canvas.width / 2,
            y: canvas.height / 1.5,
            height: 300,
            rotation: 180
        });
    } else {
        increase = true;

        this.stop().animate({
            x: canvas.width / 2,
            y: canvas.width / 5,
            height: 100,
            rotation: 0
        });
    }
});

