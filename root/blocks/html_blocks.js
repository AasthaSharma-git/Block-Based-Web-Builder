// blocks/html_blocks.js


  // HTML <html> block
  Blockly.Blocks['html_html'] = {
    init:function(){
    // Opening tag: <html>
    this.appendDummyInput()
        .appendField('<')
        .appendField(new Blockly.FieldLabel("html"))  // Opening tag name
        .appendField('>');

    // Statement input for nested blocks inside the <html> tag
    this.appendStatementInput("CONTENT")
        .setCheck(null)
        .appendField("");

    // Closing tag: </html>
    this.appendDummyInput()
        .appendField("</")
        .appendField(new Blockly.FieldLabel("html"))  // Closing tag name
        .appendField('>');

    this.setColour(160);  // Set block color
    this.setTooltip("Head section.");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }
  };
  
  Blockly.JavaScript['html_html'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
    var code = '<html>\n' + content + '\n</html>';
    return code;
  };
  
  // HTML <head> block
Blockly.Blocks['html_head'] = {
  init: function() {
    // Opening tag: <head>
    this.appendDummyInput()
        .appendField('<')
        .appendField(new Blockly.FieldLabel("head"))  // Opening tag name
        .appendField('>');

    // Statement input for nested blocks inside the <head> tag
    this.appendStatementInput("CONTENT")
        .setCheck(null)
        .appendField("");

    // Closing tag: </head>
    this.appendDummyInput()
        .appendField("</")
        .appendField(new Blockly.FieldLabel("head"))  // Closing tag name
        .appendField('>');

    // Allow the block to connect to other blocks
    this.setPreviousStatement(true, null);  // Connection from above
    this.setNextStatement(true, null);  // Connection below

    this.setColour(160);  // Set block color
    this.setTooltip("HTML");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }
};

  
  Blockly.JavaScript['html_head'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
    var code = '<head>\n' + content + '\n</head>\n';
    return code;
  };
  
  // HTML <body> block
  Blockly.Blocks['html_body'] = {
    init: function() {
     // Opening tag: <body>
    this.appendDummyInput()
    .appendField('<')
    .appendField(new Blockly.FieldLabel("body"))  // Opening tag name
    .appendField('>');

// Statement input for nested blocks inside the <body> tag
this.appendStatementInput("CONTENT")
    .setCheck(null)
    .appendField("");

// Closing tag: </body>
this.appendDummyInput()
    .appendField("</")
    .appendField(new Blockly.FieldLabel("body"))  // Closing tag name
    .appendField('>');

// Allow the block to connect to other blocks
this.setPreviousStatement(true, null);  // Connection from above
this.setNextStatement(true, null);  // Connection below

this.setColour(160);  // Set block color
this.setTooltip("Body section.");  // Tooltip for guidance
this.setHelpUrl("");  // URL for help (optional)
}
    
  };
  
  Blockly.JavaScript['html_body'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
    var code = '<body>\n' + content + '\n</body>';
    return code;
  };

  // HTML <h1> to <h6> block with input for heading text
Blockly.Blocks['html_heading'] = {
  init: function() {
    // Dropdown to select the heading level (h1 to h6)
    this.appendDummyInput()
        .appendField('<')
        .appendField(new Blockly.FieldDropdown([
          ["h1", "h1"],
          ["h2", "h2"],
          ["h3", "h3"],
          ["h4", "h4"],
          ["h5", "h5"],
          ["h6", "h6"]
        ]), "HEADING_LEVEL")
        .appendField('>');

    // Input field for the heading text
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Heading Text"), "HEADING_TEXT");

    // Automatically closing the selected heading tag
    this.appendDummyInput()
        .appendField("</")
        .appendField(new Blockly.FieldLabelSerializable(""), "HEADING_LEVEL_CLOSING")
        .appendField('>');

    // Allow the block to connect to other blocks
    this.setPreviousStatement(true, null);  // Connection from above
    this.setNextStatement(true, null);  // Connection below

    this.setColour(160);  // Set block color
    this.setTooltip("Heading element (h1 to h6).");
    this.setHelpUrl("");
  },
  onchange: function() {
    // Synchronize the closing tag with the heading level
    var headingLevel = this.getFieldValue('HEADING_LEVEL');
    this.getField('HEADING_LEVEL_CLOSING').setValue(headingLevel);
  }
};
Blockly.JavaScript['html_heading'] = function(block) {
  var headingLevel = block.getFieldValue('HEADING_LEVEL');  // Get the selected heading level
  var headingText = block.getFieldValue('HEADING_TEXT');    // Get the user-entered heading text

  // Generate the HTML for the heading element with the entered text
  var code = '<' + headingLevel + '>' + headingText + '</' + headingLevel + '>\n';
  return code;
};


  // HTML <p> block
Blockly.Blocks['html_p'] = {
  init: function() {
    // Opening tag: <p>
    this.appendDummyInput()
        .appendField('<')
        .appendField(new Blockly.FieldLabel("p"))
        .appendField('>');

     // Input field for the paragraph text
     this.appendDummyInput()
     .appendField(new Blockly.FieldTextInput("Paragraph"), "PARAGRAPH");


    // Closing tag: </p>
    this.appendDummyInput()
        .appendField("</")
        .appendField(new Blockly.FieldLabel("p"))
        .appendField('>');

    // Allow the block to connect to other blocks
    this.setPreviousStatement(true, null);  // Connection from above
    this.setNextStatement(true, null);  // Connection below

    this.setColour(160);  // Set block color
    this.setTooltip("Paragraph element.");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }
};

Blockly.JavaScript['html_p'] = function(block) {
  var content = block.getFieldValue('PARAGRAPH');    // Get the content inside the paragraph
  var code = '<p>\n' + content + '\n</p>\n';  // Generate the HTML for the paragraph with content inside
  return code;
};
// Button <button> block
Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('<')
      .appendField("button");

    // Add first attribute input
    this.appendValueInput("ATTRIBUTES_1")
      .setCheck('String')
      .appendField("");

    // Add a dummy input for the plus sign
    this.appendDummyInput("ADD_MORE_INPUT")
    //   .appendField(new Blockly.FieldImage("assets/plus.png", 15, 15, "+"), "ADD_MORE")
    //   .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('>');

    // Add content input
    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput('Click me!'), 'TEXT');

    // Closing tag
    this.appendDummyInput()
      .appendField("</")
      .appendField(new Blockly.FieldLabelSerializable("button"), "BUTTON_CLOSING")
      .appendField('>');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Button element');
    this.setHelpUrl('');

    // Initialize attribute count
    this.attributeCount = 1; // Keep track of the number of attributes

    // Manually listen for "+" sign click
    // this.getField("ADD_MORE").clickHandler_ = this.addMoreAttributes.bind(this);
  },

  /** Function to add more attribute inputs */
  // addMoreAttributes: function() {
  //   this.attributeCount++; // Increment the attribute count

  //   // Create a new value input for the next attribute
  //   const newInput = this.appendValueInput(`ATTRIBUTES_${this.attributeCount}`)
  //     .setCheck('String')
  //     .appendField(""); // Placeholder for attribute

  //   // Move the new input to be right after the previous attribute input
  //   const previousInput = this.getInput(`ATTRIBUTES_${this.attributeCount - 1}`);
  //   if (previousInput) {
  //     this.moveInputAfter(newInput, previousInput); // Move newInput after previousInput
  //   }

  //   // Rerender the block to reflect the new input field
  //   this.render(); // Ensure the block is re-rendered
  // },

  /** Helper function to move input after another input */
  // moveInputAfter: function(newInput, previousInput) {
  //   const inputList = this.inputList;
  //   const newInputIndex = inputList.indexOf(newInput);
  //   const previousInputIndex = inputList.indexOf(previousInput);

  //   // Remove newInput from its current position
  //   inputList.splice(newInputIndex, 1);
  //   // Insert it after previousInput
  //   inputList.splice(previousInputIndex + 1, 0, newInput);
    
  //   // Update the block to reflect the new order
  //   this.render();
  // }
};

// JavaScript generator for the button block
Blockly.JavaScript['html_button'] = function(block) {
  var buttonText = block.getFieldValue('TEXT');

  // Collect all attribute inputs into an array
  var attributes = [];
  for (let i = 1; i <= block.attributeCount; i++) {
    var attributeCode = Blockly.JavaScript.valueToCode(block, `ATTRIBUTES_${i}`, Blockly.JavaScript.ORDER_COMMA) || '';
    if (attributeCode) {
      attributes.push(attributeCode);
    }
  }

  // Join all attributes into a single string
  var attributesCode = attributes.join(' ');

  // Create the opening <button> tag with attributes and text
  var code = `<button ${attributesCode}>${buttonText}`;

  // Get the content between the button tags
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT') || '';
  code += content;

  // Close the button tag
  code += '</button>\n';

  return code;
};



  // Anchor <a> block
  Blockly.Blocks['html_a'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<a href=")
          .appendField(new Blockly.FieldTextInput("http://example.com"), "URL")
          .appendField(">")
          .appendField(new Blockly.FieldTextInput("Link text"), "TEXT");

      this.appendDummyInput()
          .appendField("</a>");

      this.setPreviousStatement(true, null);
           
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("A hyperlink.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['html_a'] = function(block) {
    var url = block.getFieldValue('URL');
    var text = block.getFieldValue('TEXT');
    var code = '<a href="' + url + '">' + text + '</a>';
    return code;
  };
  

  
  // Image <img> block
  Blockly.Blocks['html_img'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<img src=")
          .appendField(new Blockly.FieldTextInput("http://example.com/image.jpg"), "SRC")
          .appendField("alt")
          .appendField(new Blockly.FieldTextInput("alt text"), "ALT")
          .appendField(">");

      this.appendDummyInput()
       .appendField("</img>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("An image.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['html_img'] = function(block) {
    var src = block.getFieldValue('SRC');
    var alt = block.getFieldValue('ALT');
    var code = '<img src="' + src + '" alt="' + alt + '">';
    return code;
  };
  
  // Form <form> block
  Blockly.Blocks['html_form'] = {
    init: function() {
      this.appendStatementInput("CONTENT")
          .setCheck(null)
          .appendField("Form")
          .appendField("action")
          .appendField(new Blockly.FieldTextInput(""), "ACTION")
          .appendField("method")
          .appendField(new Blockly.FieldTextInput("get"), "METHOD");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("A form.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['html_form'] = function(block) {
    var action = block.getFieldValue('ACTION');
    var method = block.getFieldValue('METHOD');
    var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
    var code = '<form action="' + action + '" method="' + method + '">\n' + content + '</form>\n';
    return code;
  };
  
  // Table <table> block
  Blockly.Blocks['html_table'] = {
    init: function() {
      this.appendStatementInput("ROWS")
          .setCheck(null)
          .appendField("Table");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("A table.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['html_table'] = function(block) {
    var rows = Blockly.JavaScript.statementToCode(block, 'ROWS');
    var code = '<table>\n' + rows + '</table>\n';
    return code;
  };
  
  // Table row <tr> block
  Blockly.Blocks['html_tr'] = {
    init: function() {
      this.appendStatementInput("CELLS")
          .setCheck(null)
          .appendField("Table Row");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("A table row.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['html_tr'] = function(block) {
    var cells = Blockly.JavaScript.statementToCode(block, 'CELLS');
    var code = '<tr>\n' + cells + '</tr>\n';
    return code;
  };
  
  // Table cell <td> block
  Blockly.Blocks['html_td'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Table Cell")
          .appendField(new Blockly.FieldTextInput("data"), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("A table cell.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['html_td'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = '<td>' + text + '</td>\n';
    return code;
  };
  
// Define the script block
Blockly.Blocks['js_script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("<script>"); // Label for the script block

    this.appendStatementInput("SCRIPT") // Allow blocks to be added inside
        .setCheck(null); // Accept any type of blocks

    this.appendDummyInput()
        .appendField("</script>"); // Close the script block

    this.setColour(210); // Set block color
    this.setTooltip("A block for including JavaScript code."); // Tooltip
    this.setHelpUrl(""); // Help URL
    this.setPreviousStatement(true); // Allow previous connection
    this.setNextStatement(true); // Allow next connection
  }
};

// Generate JavaScript code for the script block
Blockly.JavaScript['js_script'] = function(block) {
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT'); // Get the statements inside the block
  var code = '<script>\n' + statements_script + '</script>\n'; // Wrap the code in script tags
  return code; // Return the code to be included in the generated script
};

Blockly.Blocks['html_div'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("div")
          .appendField("attributes")
          .appendField(new Blockly.FieldTextInput(''), 'ATTRIBUTES'); // For custom attributes
      this.appendValueInput('CONTENT')
          .setCheck(null)
          .appendField("content");
      this.appendValueInput('STYLE')
          .setCheck(null)
          .appendField("style");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Defines a div element with optional attributes, content, and styles.");
      this.setHelpUrl("");
  }
};
Blockly.JavaScript['html_div'] = function(block) {
  var attributesString = block.getFieldValue('ATTRIBUTES'); // Get the attributes string
  var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_ATOMIC); // Content inside the div
  var style = Blockly.JavaScript.valueToCode(block, 'STYLE', Blockly.JavaScript.ORDER_ATOMIC); // Style block

  // Prepare the attributes code
  var attributesCode = '';
  if (attributesString) {
      attributesCode = attributesString.split('+').map(function(attribute) {
          var [name, value] = attribute.split('=');
          return name && value ? ` ${name.trim()}="${value.trim()}"` : '';
      }).join('');
  }

  // If a style is provided, create the style attribute
  var styleCode = '';
  if (style) {
      styleCode = ` style="${style.replace(/['"]+/g, '')}"`; // Remove extra quotes from style string
  }

  // Create the final HTML code
  var code = `<div${attributesCode}${styleCode}>\n${content || ''}\n</div>\n`;

  return code;
};


Blockly.Blocks['html_attribute_id'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("id")
          .appendField(new Blockly.FieldTextInput(''), 'ID');
      this.setOutput(true, 'String');
      this.setColour(160);
      this.setTooltip('Sets the id attribute for an HTML element.');
      this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_id'] = function(block) {
  var id = block.getFieldValue('ID');
  var code = `id="${id}"`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Class attribute block
Blockly.Blocks['html_attribute_class'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("class")
          .appendField(new Blockly.FieldTextInput(''), 'CLASS');
      this.setOutput(true, 'String');  // This block outputs a string
      this.setColour(160);
      this.setTooltip('Sets the class attribute for an HTML element.');
      this.setHelpUrl('');
  }
};

// JavaScript generator for the class attribute block
Blockly.JavaScript['html_attribute_class'] = function(block) {
  var className = block.getFieldValue('CLASS');
  var code = `class="${className}"`;  // Generate the code for the class attribute
  return [code, Blockly.JavaScript.ORDER_ATOMIC];  // Return the code and its order
};

Blockly.Blocks['html_attribute_style'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("style")
          .appendField(new Blockly.FieldTextInput(''), 'STYLE');
      this.setOutput(true, 'String');
      this.setColour(160);
      this.setTooltip('Sets inline styles for an HTML element.');
      this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_style'] = function(block) {
  var style = block.getFieldValue('STYLE');
  var code = `style="${style}"`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_type'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("type")
          .appendField(new Blockly.FieldDropdown([
              ["button", "button"],
              ["submit", "submit"],
              ["reset", "reset"],
              ["text", "text"],
              ["password", "password"]
          ]), 'TYPE');
      this.setOutput(true, 'String');
      this.setColour(160);
      this.setTooltip('Sets the type attribute for an HTML element like button or input.');
      this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_type'] = function(block) {
  var type = block.getFieldValue('TYPE');
  var code = `type="${type}"`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['html_attribute_disabled'] = {
  init: function() {
      this.appendDummyInput()
      
      this.setOutput(true, 'String'); // This will allow the block to connect below.
      this.setColour(160);
      this.setTooltip('Sets the disabled attribute for an HTML element.');
      this.setHelpUrl('');

      // This allows connections only below and above this block
      this.setPreviousStatement(true,null); //Can connect to previous statement
      this.setNextStatement(true, null); // Can connect below
  }
};

Blockly.JavaScript['html_attribute_disabled'] = function(block) {
  var code = `disabled="disabled"`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

