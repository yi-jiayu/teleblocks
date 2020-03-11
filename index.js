import Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';
import * as En from 'blockly/msg/en';

import blocks from './blocks.json';

Blockly.setLocale(En);

Blockly.defineBlocksWithJsonArray(blocks);

document.addEventListener('DOMContentLoaded', function () {
  const workspace = Blockly.inject('blocklyDiv',
      {toolbox: document.getElementById('toolbox')});

  const generateCode = function () {
    document.getElementById('output').textContent = Blockly['Python'].workspaceToCode(workspace);
  };

  workspace.addChangeListener(generateCode);
});