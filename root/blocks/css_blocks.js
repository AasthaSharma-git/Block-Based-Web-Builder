// css_blocks.js
Blockly.Blocks['css_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set color")
            .appendField(new Blockly.FieldDropdown([
                ["Red", "red"],
                ["Green", "green"],
                ["Blue", "blue"],
                ["Black", "black"],
                ["White", "white"],
                ["Custom", "custom"]
            ]), "COLOR");
        this.appendValueInput("CUSTOM_COLOR")
            .setCheck("String")
            .appendField("to");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Set a color property.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_background_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set background color")
            .appendField(new Blockly.FieldDropdown([
                ["Red", "red"],
                ["Green", "green"],
                ["Blue", "blue"],
                ["Black", "black"],
                ["White", "white"],
                ["Custom", "custom"]
            ]), "COLOR");
        this.appendValueInput("CUSTOM_BACKGROUND_COLOR")
            .setCheck("String")
            .appendField("to");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Set a background color property.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_font_size'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set font size to")
            .appendField(new Blockly.FieldNumber(16), "SIZE")
            .appendField("px");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the font size in pixels.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_margin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set margin")
            .appendField(new Blockly.FieldNumber(0), "MARGIN")
            .appendField("px");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the margin size in pixels.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_padding'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set padding")
            .appendField(new Blockly.FieldNumber(0), "PADDING")
            .appendField("px");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the padding size in pixels.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_width'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set width to")
            .appendField(new Blockly.FieldNumber(100), "WIDTH")
            .appendField("px");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the width in pixels.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_height'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set height to")
            .appendField(new Blockly.FieldNumber(100), "HEIGHT")
            .appendField("px");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the height in pixels.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_display'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set display to")
            .appendField(new Blockly.FieldDropdown([
                ["block", "block"],
                ["inline", "inline"],
                ["flex", "flex"],
                ["grid", "grid"],
                ["none", "none"]
            ]), "DISPLAY_TYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the display property.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['css_position'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set position to")
            .appendField(new Blockly.FieldDropdown([
                ["static", "static"],
                ["relative", "relative"],
                ["absolute", "absolute"],
                ["fixed", "fixed"],
                ["sticky", "sticky"]
            ]), "POSITION_TYPE");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Set the position property.");
        this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['css_color'] = function(block) {
    var dropdown_color = block.getFieldValue('COLOR');
    var customColor = Blockly.JavaScript.valueToCode(block, 'CUSTOM_COLOR', Blockly.JavaScript.ORDER_ATOMIC);
    var colorCode = (dropdown_color === 'custom' && customColor) ? customColor : dropdown_color;
    
    var code = `'color: ${colorCode};'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_background_color'] = function(block) {
    var dropdown_color = block.getFieldValue('COLOR');
    var customColor = Blockly.JavaScript.valueToCode(block, 'CUSTOM_BACKGROUND_COLOR', Blockly.JavaScript.ORDER_ATOMIC);
    var colorCode = (dropdown_color === 'custom' && customColor) ? customColor : dropdown_color;
    
    var code = `'background-color: ${colorCode};'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_margin'] = function(block) {
    var number_margin = block.getFieldValue('MARGIN');
    
    var code = `'margin: ${number_margin}px;'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_font_size'] = function(block) {
    var number_size = block.getFieldValue('SIZE');
    
    var code = `'font-size: ${number_size}px;'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_padding'] = function(block) {
    var number_padding = block.getFieldValue('PADDING');
    
    var code = `'padding: ${number_padding}px;'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_width'] = function(block) {
    var number_width = block.getFieldValue('WIDTH');
    
    var code = `'width: ${number_width}px;'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_height'] = function(block) {
    var number_height = block.getFieldValue('HEIGHT');
    
    var code = `'height: ${number_height}px;'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_display'] = function(block) {
    var dropdown_display = block.getFieldValue('DISPLAY_TYPE');
    
    var code = `'display: ${dropdown_display};'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['css_position'] = function(block) {
    var dropdown_position = block.getFieldValue('POSITION_TYPE');
    
    var code = `'position: ${dropdown_position};'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  