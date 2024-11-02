
Blockly.Blocks['html_attribute_id'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("id=")
      .appendField(new Blockly.FieldTextInput(''), 'ID');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the id attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_id'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the ID field value
  var id = block.getFieldValue('ID');

  // Combine the left block's code with this block's id attribute
  var code = leftCode + `id="${id}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_href'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("href=")
      .appendField(new Blockly.FieldTextInput(''), 'href');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the id attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_href'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the href field value
  var href = block.getFieldValue('href');

  // Combine the left block's code with this block's href attribute
  var code = leftCode + `href="${href}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_src'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("src=")
      .appendField(new Blockly.FieldTextInput(''), 'src');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the src attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_src'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the src field value
  var src = block.getFieldValue('src');

  // Combine the left block's code with this block's src attribute
  var code = leftCode + `src="${src}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_alt'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("alt=")
      .appendField(new Blockly.FieldTextInput(''), 'alt');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the alt attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_alt'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the alt field value
  var href = block.getFieldValue('alt');

  // Combine the left block's code with this block's alt attribute
  var code = leftCode + `alt="${alt}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Class attribute block
Blockly.Blocks['html_attribute_class'] = {
  init: function () {
    this.appendValueInput('LEFT_INPUT')  // Adding left input
      .setCheck('text')  // Change this to the specific type if needed
      .appendField("class=")
      .appendField(new Blockly.FieldTextInput(''), 'CLASS');
    this.setOutput(true, 'String');  // This block outputs a string
    this.setColour('#FFD700');
    this.setTooltip('Sets the class attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

// JavaScript generator for the class attribute block
Blockly.JavaScript['html_attribute_class'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the class field value
  var className = block.getFieldValue('CLASS');

  // Combine the left block's code with this block's class attribute
  var code = leftCode + `class="${className}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_style'] = {
  init: function () {
    
    this.appendValueInput('LEFT_INPUT')  // Input for chaining multiple attributes
      .setCheck('String')
      .appendField("style=")

    this.appendDummyInput("PROPERTIES")
        .appendField('')
        

    this.setOutput(true, 'String');  // Output is a string, part of an attribute chain
    
    this.setColour('#FFD700');
    
    this.setTooltip('Sets inline styles for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_style'] = function (block) {
  // Get the concatenated CSS code from the connected blocks
  var styleCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Combine all CSS properties into the style attribute
  var code = `style="${styleCode.trim()}" `  // Trim to remove extra spaces

  return [code, Blockly.JavaScript.ORDER_ATOMIC];  // Return as an array
};

Blockly.Blocks['html_attribute_type'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("type=")
      .appendField(new Blockly.FieldDropdown([
        ["button", "button"],
        ["submit", "submit"],
        ["text", "text"],
        ["checkbox", "checkbox"],
        ["radio", "radio"],
        ["file", "file"],
        ["hidden", "hidden"],
        ["image", "image"],
        ["password", "password"],
        ["reset", "reset"],
      ]), 'TYPE');
    this.setOutput(true, 'String');
    this.setColour('#FFD700');
    this.setTooltip('Sets the type attribute for an HTML element like button or input.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_type'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var code = `type="${type}"`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_disabled'] = {
  init: function () {
    this.appendValueInput('LEFT_INPUT')
      .setCheck(null)
      .appendField("disabled");

    // This block outputs a string, which will be used in the HTML tag
    this.setOutput(true, 'String');
    this.setColour('#FFD700');
    this.setTooltip('Makes HTML Element disabled.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_disabled'] = function (block) {
  // Get all the connected blocks on the left (chaining)
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Combine all the style properties together into a single string
  var code = `disabled="disabled" `;  // trim to remove extra spaces

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_width'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("width=")
      .appendField(new Blockly.FieldTextInput(''), 'width');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the width attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_width'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the width field value
  var width = block.getFieldValue('width');

  // Combine the left block's code with this block's width attribute
  var code = leftCode + `width="${width}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_height'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("height=")
      .appendField(new Blockly.FieldTextInput(''), 'height');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the height attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_height'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the src field value
  var height = block.getFieldValue('height');

  // Combine the left block's code with this block's height attribute
  var code = leftCode + `height="${height}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_border'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("border=")
      .appendField(new Blockly.FieldTextInput(''), 'data');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Specify border of the table.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_border'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the data field value
  var border = block.getFieldValue('data');

  // Combine the left block's code with this block's id attribute
  var code = leftCode + `border="${border}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_for'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("for=")
      .appendField(new Blockly.FieldTextInput(''), 'data');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the for attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_for'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the data field value
  var data = block.getFieldValue('data');

  // Combine the left block's code with this block's for attribute
  var code = leftCode + `for="${data}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_name'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("name=")
      .appendField(new Blockly.FieldTextInput(''), 'data');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the name attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_name'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the data field value
  var name = block.getFieldValue('data');

  // Combine the left block's code with this block's name attribute
  var code = leftCode + `name="${name}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_value'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("value=")
      .appendField(new Blockly.FieldTextInput(''), 'data');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the value attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_for'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the data field value
  var value = block.getFieldValue('data');

  // Combine the left block's code with this block's value attribute
  var code = leftCode + `value="${value}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_size'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("size=")
      .appendField(new Blockly.FieldNumber(1, 1), "SIZE");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Sets the size of an input field.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size");
  }
};

Blockly.JavaScript['html_attribute_size'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var sizeValue = block.getFieldValue('SIZE');
  var code = `${leftCode}size="${sizeValue}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_maxlength'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("maxlength=")
      .appendField(new Blockly.FieldNumber(1, 1), "MAXLENGTH");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Sets the maximum number of characters allowed in an input field.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength");
  }
};

Blockly.JavaScript['html_attribute_maxlength'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var maxlengthValue = block.getFieldValue('MAXLENGTH');
  var code = `${leftCode}maxlength="${maxlengthValue}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_multiple'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("multiple");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Allows the user to select multiple values.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple");
  }
};

Blockly.JavaScript['html_attribute_multiple'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var code = `${leftCode}multiple `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_pattern'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("pattern=")
      .appendField(new Blockly.FieldTextInput(""), "PATTERN");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Specifies a regular expression that the input's value must match.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern");
  }
};

Blockly.JavaScript['html_attribute_pattern'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var patternValue = block.getFieldValue('PATTERN');
  var code = `${leftCode}pattern="${patternValue}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_placeholder'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("placeholder=")
      .appendField(new Blockly.FieldTextInput("Enter text"), "PLACEHOLDER");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Sets a placeholder text for an input field.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder");
  }
};

Blockly.JavaScript['html_attribute_placeholder'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var placeholderValue = block.getFieldValue('PLACEHOLDER');
  var code = `${leftCode}placeholder="${placeholderValue}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_required'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("required");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Makes the input field required.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required");
  }
};

Blockly.JavaScript['html_attribute_required'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var code = `${leftCode}required `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_autofocus'] = {
  init: function() {
    this.appendValueInput("LEFT_INPUT")
      .setCheck(null)
      .appendField("autofocus");
    this.setOutput(true, "String");
    this.setColour('#FFD700');
    this.setTooltip("Automatically focuses the input field when the page loads.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autofocus");
  }
};

Blockly.JavaScript['html_attribute_autofocus'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var code = `${leftCode}autofocus `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_lang'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("lang=")
      .appendField(new Blockly.FieldTextInput(''), 'data');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the lang attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_lang'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the data field value
  var lang = block.getFieldValue('data');

  // Combine the left block's code with this block's lang attribute
  var code = leftCode + `lang="${lang}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_title'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("title=")
      .appendField(new Blockly.FieldTextInput(''), 'data');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the title attribute for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_title'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the data field value
  var title = block.getFieldValue('data');

  // Combine the left block's code with this block's title attribute
  var code = leftCode + `title="${title}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_onclick'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("onclick=")
      .appendField(new Blockly.FieldTextInput(''), 'ONCLICK');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#FFD700');
    this.setTooltip('Sets the onclick attribute for an HTML element.');
    this.setHelpUrl('https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick');
  }
};

Blockly.JavaScript['html_attribute_onclick'] = function (block) {
  // Get the code from any connected blocks on the left
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Get the onclick field value
  var onclick = block.getFieldValue('ONCLICK');

  // Combine the left block's code with this block's onclick attribute
  var code = leftCode + `onclick="${onclick}" `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



