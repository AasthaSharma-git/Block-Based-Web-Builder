// css_blocks.js

// Block for setting the color style
Blockly.Blocks['css_color'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allow chaining on the left
        .setCheck(null)
        .appendField("color:")
        .appendField(new Blockly.FieldTextInput('red'), 'COLOR');
    this.setOutput(true, 'String');
    this.setColour('#8EB140');
    this.setTooltip('Sets the color style property.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['css_color'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var color = block.getFieldValue('COLOR');
  var code = leftCode + `color: ${color}; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Background color block
Blockly.Blocks['css_background_color'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')
        .setCheck(null)  // Allows any type of input
        .appendField("background-color:")
        .appendField(new Blockly.FieldTextInput(''), 'COLOR');  // Text input for color value

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');
    this.setTooltip("Set a background color property.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_background_color'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var colorValue = block.getFieldValue('COLOR');
  var code = `${leftCode}background-color: ${colorValue}; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Font size block
Blockly.Blocks['css_font_size'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)
        .appendField("font-size:")
        .appendField(new Blockly.FieldNumber(16), "SIZE")
        .appendField("px");
    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');
    this.setTooltip("Set the font size in pixels.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_font_size'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var fontSize = block.getFieldValue('SIZE');
  var code = `${leftCode}font-size: ${fontSize}px; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Margin block
Blockly.Blocks['css_margin'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)  // Allows any type of input
        .appendField("margin:")
        .appendField(new Blockly.FieldTextInput('0'), 'MARGIN')  // Text input for margin value
        .appendField("px");

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');
    this.setTooltip("Set the margin size in pixels.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_margin'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var marginValue = block.getFieldValue('MARGIN');

  var code = `${leftCode}margin: ${marginValue}px; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Padding block
Blockly.Blocks['css_padding'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)  // Allows any type of input
        .appendField("padding:")
        .appendField(new Blockly.FieldTextInput('0'), 'PADDING')  // Text input for padding value
        .appendField("px");

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');
    this.setTooltip("Set the padding size in pixels.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_padding'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var paddingValue = block.getFieldValue('PADDING');

  var code = `${leftCode}padding: ${paddingValue}px; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Width block
Blockly.Blocks['css_width'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)  // Allows any type of input
        .appendField("width:")
        .appendField(new Blockly.FieldTextInput('100'), 'WIDTH')  // Text input for width value
        .appendField("px");

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');
    this.setTooltip("Set the width in pixels.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_width'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var widthValue = block.getFieldValue('WIDTH');

  var code = `${leftCode}width: ${widthValue}px; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Height block
Blockly.Blocks['css_height'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)  // Allows any type of input
        .appendField("height:")
        .appendField(new Blockly.FieldTextInput('100'), 'HEIGHT')  // Text input for height value
        .appendField("px");

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');
    this.setTooltip("Set the height in pixels.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_height'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var heightValue = block.getFieldValue('HEIGHT');

  var code = `${leftCode}height: ${heightValue}px; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Display block
Blockly.Blocks['css_display'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)
        .appendField("display:")
        .appendField(new Blockly.FieldDropdown([
            ["block", "block"],
            ["inline", "inline"],
            ["flex", "flex"],
            ["grid", "grid"],
            ["none", "none"]
        ]), "DISPLAY_TYPE");
    this.setOutput(true, "String");
    this.setColour('#8EB140');
    this.setTooltip("Set the display property.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_display'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var displayType = block.getFieldValue('DISPLAY_TYPE');
  var code = `${leftCode}display: ${displayType}; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Position block
Blockly.Blocks['css_position'] = {
  init: function() {
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)
        .appendField("position:")
        .appendField(new Blockly.FieldDropdown([
            ["static", "static"],
            ["relative", "relative"],
            ["absolute", "absolute"],
            ["fixed", "fixed"],
            ["sticky", "sticky"]
        ]), "POSITION_TYPE");
    this.setOutput(true, "String");
    this.setColour('#8EB140');
    this.setTooltip("Set the position property.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_position'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var positionType = block.getFieldValue('POSITION_TYPE');
  var code = `${leftCode}position: ${positionType}; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// CSS Rule block (updated)
Blockly.Blocks['css_rule'] = {
  init: function() {
    // Initial input for the selector
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('selector'), 'SELECTOR')  // CSS Selector
        .appendField('{');

    // Input for chaining multiple style properties
    this.appendValueInput('PROPERTIES')
        .setCheck(null);  // Allow any style properties to be chained

    this.appendDummyInput()
        .appendField('}');  // Closing brace

    // Block settings
    this.setPreviousStatement(true, null);  // Allows this block to connect to others
    this.setNextStatement(true, null);  // Allows chaining more blocks after this
    this.setColour('#8EB140');  // Set block color
    this.setTooltip('Defines a CSS rule with a selector and properties.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['css_rule'] = function(block) {
  // Get the selector (e.g., '.class' or '#id')
  var selector = block.getFieldValue('SELECTOR');

  // Retrieve the chain of style properties (chained blocks)
  var properties = Blockly.JavaScript.valueToCode(block, 'PROPERTIES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Generate the full CSS rule
  var code = `${selector} {\n${properties.trim()}\n}\n`;
  
  return code;
};

// Text Decoration Block
Blockly.Blocks['css_text_decoration'] = {
  init: function() {
    // Main text decoration dropdown
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)  // Allows any type of input
        .appendField("text-decoration:")
        .appendField(new Blockly.FieldDropdown([
            ["none", "none"],
            ["underline", "underline"],
            ["overline", "overline"],
            ["line-through", "line-through"]
        ]), 'DECORATION_TYPE');  // Dropdown for the text-decoration type

 

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');  // Set block color
    this.setTooltip("Set the text decoration with optional style, color, and thickness.");
    this.setHelpUrl("");
  }
};


Blockly.JavaScript['css_text_decoration'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  var decorationType = block.getFieldValue('DECORATION_TYPE');

  // Generate CSS code for text-decoration properties
  var code = `${leftCode}text-decoration: ${decorationType};\n`;
 

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Font Family Block
Blockly.Blocks['css_font_family'] = {
  init: function() {
    // Dropdown for predefined font families
    this.appendValueInput('LEFT_INPUT')  // Allows chaining on the left side
        .setCheck(null)  // Allows any type of input
        .appendField("font-family:")
        .appendField(new Blockly.FieldDropdown([
            ["Arial", "Arial, sans-serif"],
            ["Verdana", "Verdana, sans-serif"],
            ["Georgia", "Georgia, serif"],
            ["Times New Roman", "Times New Roman, serif"],
            ["Courier New", "Courier New, monospace"],
        ]), 'FONT_FAMILY');  // Dropdown for font-family selection
    
  

    this.setOutput(true, "String");  // Set output type
    this.setColour('#8EB140');  // Set block color
    this.setTooltip("Set the font-family.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['css_font_family'] = function(block) {
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  var fontFamily = block.getFieldValue('FONT_FAMILY');

  // Use the custom font if "Custom" is selected, otherwise use the predefined option
  var finalFontFamily = fontFamily

  var code = `${leftCode}font-family: ${finalFontFamily}; `;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

