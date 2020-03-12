import Blockly from 'blockly/core';
import 'blockly/blocks';
import * as En from 'blockly/msg/en';

import blocks from './blocks.json';

Blockly.setLocale(En);
Blockly.defineBlocksWithJsonArray(blocks);

// use `Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(window.workspace))`
// to dump workspace to XML.
window.Blockly = Blockly;
document.addEventListener('DOMContentLoaded', function () {
  window.workspace = Blockly.inject('blocklyDiv',
      {toolbox: document.getElementById('toolbox')});
});
