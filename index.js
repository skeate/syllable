'use strict';

var syllable = require('syllable');

var $input = document.getElementsByTagName('textarea')[0];
var $output = document.getElementsByTagName('output')[0];

$input.addEventListener('input', oninputchange);

oninputchange();

function oninputchange() {
  $output.textContent = $input.value.split(/\s+/g).map(syllable).reduce(sum);
}

function sum(a, b) {
  return a + b;
}
