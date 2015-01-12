'use strict';

/*
 * Dependencies.
 */

var syllable = require('wooorm/syllable@0.1.3');

/*
 * DOM elements.
 */

var $input = document.getElementsByTagName('textarea')[0];
var $output = document.getElementsByTagName('output')[0];

/*
 * Helper.
 */

function sum(a, b) {
    return a + b;
}

/*
 * Handler.
 */

function oninputchange() {
    $output.textContent = $input.value.split(/\s+/g).map(syllable).reduce(sum);
}

/*
 * Attach handler.
 */

$input.addEventListener('input', oninputchange);

/*
 * Initial answer.
 */

oninputchange();
