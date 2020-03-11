import Blockly from 'blockly';
import 'blockly/python'
import * as En from 'blockly/msg/en';

Blockly.setLocale(En);

document.addEventListener('DOMContentLoaded', function () {
  const workspace = Blockly.inject('blocklyDiv',
      {toolbox: document.getElementById('toolbox')});

  function myUpdateFunction(event) {
    const code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('output').textContent = code;
  }

  workspace.addChangeListener(myUpdateFunction);
});