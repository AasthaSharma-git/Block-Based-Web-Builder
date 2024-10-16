// blocks/html_blocks.js

// HTML <html> block
Blockly.Blocks['html_html'] = {
  init: function () {
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

    this.setColour('#5C81A6');  // Set block color
    this.setTooltip("Head section.");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }
};

Blockly.JavaScript['html_html'] = function (block) {
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  var code = '<html>\n' + content + '\n</html>';
  return code;
};

// HTML <head> block
Blockly.Blocks['html_head'] = {
  init: function () {
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

    this.setColour('#5C81A6');  // Set block color
    this.setTooltip("HTML");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }
};


Blockly.JavaScript['html_head'] = function (block) {
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  var code = '<head>\n' + content + '\n</head>\n';
  return code;
};

// HTML <body> block
Blockly.Blocks['html_body'] = {
  init: function () {
    // Opening tag: <body>
    this.appendDummyInput()
      .appendField('<')
      .appendField(new Blockly.FieldLabel("body"))  // Opening tag name

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("")

    this.appendDummyInput()
      .appendField('>');

    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField('');

    // Closing tag: </body>
    this.appendDummyInput()
      .appendField("</")
      .appendField(new Blockly.FieldLabel("body"))  // Closing tag name
      .appendField('>');

    // Allow the block to connect to other blocks
    this.setPreviousStatement(true, null);  // Connection from above
    this.setNextStatement(true, null);  // Connection below

    this.setColour('#5C81A6');  // Set block color
    this.setTooltip("Body section.");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }

};

Blockly.JavaScript['html_body'] = function (block) {
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Concatenate attributes and remove trailing spaces

  attributes = attributes.trim();
  var code = `<body ${attributes}>\n  ${content}  \n</body>`;
  return code;
};

// HTML <h1> to <h6> block with input for heading text
Blockly.Blocks['html_heading'] = {
  init: function () {
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


    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("")

    this.appendDummyInput()
      .appendField('>');

    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput('Heading_Text'), 'HEADING_TEXT');

    // Automatically closing the selected heading tag
    this.appendDummyInput()
      .appendField("</")
      .appendField(new Blockly.FieldLabelSerializable(""), "HEADING_LEVEL_CLOSING")
      .appendField('>');

    // Allow the block to connect to other blocks
    this.setPreviousStatement(true, null);  // Connection from above
    this.setNextStatement(true, null);  // Connection below

    this.setColour('#5C81A6');  // Set block color
    this.setTooltip("Heading element (h1 to h6).");
    this.setHelpUrl("");
  },
  onchange: function () {
    // Synchronize the closing tag with the heading level
    var headingLevel = this.getFieldValue('HEADING_LEVEL');
    this.getField('HEADING_LEVEL_CLOSING').setValue(headingLevel);
  }
};
Blockly.JavaScript['html_heading'] = function (block) {
  var headingLevel = block.getFieldValue('HEADING_LEVEL');  // Get the selected heading level
  var headingText = block.getFieldValue('HEADING_TEXT');    // Get the user-entered heading text

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  // Generate the HTML for the heading element with the entered text
  var code = `<${headingLevel} ${attributes}>${headingText}</${headingLevel}>\n`;
  return code;
};
// HTML <p> block
Blockly.Blocks['html_p'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('<')
      .appendField("p");

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("");

    this.appendDummyInput("")
      .appendField('>');

    // Content input
    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput('Paragraph'), 'PARAGRAPH');

    // Closing tag
    this.appendDummyInput()
      .appendField("</p>");

    // Allow the block to connect to other blocks
    this.setPreviousStatement(true, null);  // Connection from above
    this.setNextStatement(true, null);  // Connection below

    this.setColour('#5C81A6');  // Set block color
    this.setTooltip("Paragraph element.");  // Tooltip for guidance
    this.setHelpUrl("");  // URL for help (optional)
  }
};

Blockly.JavaScript['html_p'] = function (block) {
  var content = block.getFieldValue('PARAGRAPH') || '';  // Get the text input inside the paragraph  

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  // Generate the HTML with the content and attributes
  var code = `<p ${attributes}>\n${content}\n</p>\n`;
  return code;
};


// Button <button> block
Blockly.Blocks['html_button'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('<')
      .appendField("button");

    // Add first attribute input
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("");

    // Add a dummy input for the plus sign
    this.appendDummyInput("ADD_MORE_INPUT")
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
    this.setColour('#5C81A6');
    this.setTooltip('Button element');
    this.setHelpUrl('');

  },

};

// JavaScript generator for the button block
Blockly.JavaScript['html_button'] = function (block) {
  var buttonText = block.getFieldValue('TEXT');

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  // Create the opening <button> tag with attributes and text
  var code = `<button ${attributes}>${buttonText}`;

  // Get the content between the button tags
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT') || '';
  code += content;

  // Close the button tag
  code += '</button>\n';

  return code;
};



// Anchor <a> block
Blockly.Blocks['html_a'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<a href=")
      .appendField(new Blockly.FieldTextInput("http://example.com"), "URL")

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("")

    this.appendDummyInput()
      .appendField('>');

    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput("Link text"), "TEXT")

    this.appendDummyInput()
      .appendField("</a>");

    this.setPreviousStatement(true, null);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip("A hyperlink.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['html_a'] = function (block) {
  var url = block.getFieldValue('URL');
  var text = block.getFieldValue('TEXT');

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  var code = `<a href="${url}" ${attributes}>${text}</a>\n`;
  return code;
};



// Image <img> block
Blockly.Blocks['html_img'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<img src=")
      .appendField(new Blockly.FieldTextInput("http://example.com/image.jpg"), "SRC")
      .appendField("alt")
      .appendField(new Blockly.FieldTextInput("alt text"), "ALT")

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("")

    this.appendDummyInput()
      .appendField('>')
      .appendField("</img>");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip("An image.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['html_img'] = function (block) {
  var src = block.getFieldValue('SRC');
  var alt = block.getFieldValue('ALT');

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';

  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  var code = `<img src="${src}" alt="${alt}" ${attributes}>`;
  return code;
};

// Form <form> block
Blockly.Blocks['html_form'] = {
  init: function () {
    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField("Form")
      .appendField("action")
      .appendField(new Blockly.FieldTextInput(""), "ACTION")
      .appendField("method")
      .appendField(new Blockly.FieldTextInput("get"), "METHOD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip("A form.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['html_form'] = function (block) {
  var action = block.getFieldValue('ACTION');
  var method = block.getFieldValue('METHOD');
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  var code = '<form action="' + action + '" method="' + method + '">\n' + content + '</form>\n';
  return code;
};

// Block for <table> tag
Blockly.Blocks['html_table'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<table") // Label the block as a Table

   // Single attributes input for chaining multiple attribute blocks
   this.appendValueInput("ATTRIBUTES")
   .setCheck('String')
   .appendField("")

 this.appendDummyInput()
     .appendField('>');

 this.appendStatementInput("CONTENT")
     .setCheck(null)
     .appendField('');

    this.appendDummyInput()
      .appendField("</table>"); // Closing tag label
    this.setPreviousStatement(true, null); // Can connect to previous blocks
    this.setNextStatement(true, null); // Can connect to the next blocks
    this.setColour('#5C81A6'); // Set block color
    this.setTooltip("Creates a table in HTML."); // Tooltip
    this.setHelpUrl(""); // Help URL if needed
  }
};

// Generator for <table> block
Blockly.JavaScript['html_table'] = function (block) {
  var rows = Blockly.JavaScript.statementToCode(block, 'CONTENT'); // Collect rows (tr) inside the table

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  var code = `<table ${attributes}>\n ${rows} </table>\n`; // Generate the table with rows
  return code;
};


// Table row <tr> block
Blockly.Blocks['html_tr'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<tr>")

   // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
        .setCheck('String')
        .appendField("")
  
    this.appendDummyInput()
        .appendField('>');
  
    this.appendStatementInput("CONTENT")
        .setCheck(null)
        .appendField('');

    this.appendDummyInput()
      .appendField("</tr>"); // Closing tag label
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip("A table row.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['html_tr'] = function (block) {
  var cells = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();
  var code = `<tr $>\n ${cells} </tr>\n`;
  return code;
};


Blockly.Blocks['html_td'] = {
  init: function() {
    // Opening tag and attributes input
    this.appendDummyInput()
      .appendField('<td');

    // Add a value input for the attributes field
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField(' '); // Placeholder for attributes

    this.appendDummyInput()
      .appendField('>')
      .appendField(new Blockly.FieldTextInput('data'), 'CONTENT') // Direct content text input
      .appendField('</td>');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip('Table cell element with optional attributes.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_td'] = function (block) {
  // Get the content from the field text input (typed text)
  var content = block.getFieldValue('CONTENT') || ''; // Retrieve field content using getFieldValue

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  // Generate the HTML code for the <td> with the typed content
  var code = `<td ${attributes}>${content}</td>`;
  return code;
};


// Define the script block
Blockly.Blocks['js_script'] = {
  init: function () {
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
Blockly.JavaScript['js_script'] = function (block) {
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT'); // Get the statements inside the block
  var code = '<script>\n' + statements_script + '</script>\n'; // Wrap the code in script tags
  return code; // Return the code to be included in the generated script
};

Blockly.Blocks['html_div'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<div")

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
      .setCheck('String')
      .appendField("")

    this.appendDummyInput()
      .appendField('>');

    this.appendStatementInput("CONTENT")
      .setCheck(null)
      .appendField('');

    this.appendDummyInput()
      .appendField("</div>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip("Defines a div element with optional attributes, content, and styles.");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['html_div'] = function (block) {

  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  
  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();
  // Create the final HTML code
  var code = `<div ${attributes}>\n${content || ''}\n</div>\n`;

  return code;
};


Blockly.Blocks['html_attribute_id'] = {
  init: function () {
    // Adding a value input to allow connection on the left side
    this.appendValueInput('LEFT_INPUT')  // Input on the left
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("id")
      .appendField(new Blockly.FieldTextInput(''), 'ID');

    this.setOutput(true, null);  // Output on the right side
    this.setColour('#5C81A6');
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


// Class attribute block
Blockly.Blocks['html_attribute_class'] = {
  init: function () {
    this.appendValueInput('LEFT_INPUT')  // Adding left input
      .setCheck(null)  // Change this to the specific type if needed
      .appendField("class")
      .appendField(new Blockly.FieldTextInput(''), 'CLASS');
    this.setOutput(true, 'String');  // This block outputs a string
    this.setColour('#5C81A6');
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
    this.appendValueInput('LEFT_INPUT')  // Input for chaining multiple style properties
      .setCheck(null)
      .appendField("style");

    // This block outputs a string, which will be used in the HTML tag
    this.setOutput(true, 'String');
    this.setColour('#5C81A6');
    this.setTooltip('Sets inline styles for an HTML element.');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['html_attribute_style'] = function (block) {
  // Get all the connected blocks on the left (chaining)
  var leftCode = Blockly.JavaScript.valueToCode(block, 'LEFT_INPUT', Blockly.JavaScript.ORDER_ATOMIC) || '';

  console.log(leftCode);

  // Combine all the style properties together into a single string
  var code = `style="${leftCode.trim()}" `;  // trim to remove extra spaces

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['html_attribute_type'] = {
  init: function () {
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
    this.setColour('#5C81A6');
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
    this.appendDummyInput()

    this.setOutput(true, 'String'); // This will allow the block to connect below.
    this.setColour('#5C81A6');
    this.setTooltip('Sets the disabled attribute for an HTML element.');
    this.setHelpUrl('');

    // This allows connections only below and above this block
    this.setPreviousStatement(true, null); //Can connect to previous statement
    this.setNextStatement(true, null); // Can connect below
  }
};

Blockly.JavaScript['html_attribute_disabled'] = function (block) {
  var code = `disabled="disabled"`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block for <br> tag in HTML
Blockly.Blocks['html_br'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<br>"); // Label for the <br> tag
    this.setPreviousStatement(true, null); // Allow connecting to previous blocks
    this.setNextStatement(true, null); // Allow connecting to next blocks
    this.setColour('#5C81A6'); // Set block color
    this.setTooltip("Inserts a <br> tag for a line break in HTML."); // Tooltip for the block
    this.setHelpUrl(""); // Help URL if needed
  }
};

Blockly.JavaScript['html_br'] = function (block) {
  // Generates the <br> HTML tag
  return '<br>\n'; // Newline after <br> for better formatting
};

// Block for <ul> (unordered list) tag
Blockly.Blocks['html_ul'] = {
  init: function () {

    this.appendDummyInput()
      .appendField("<ul"); // Label the block

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
        .setCheck('String')
        .appendField("")
  
    this.appendDummyInput()
        .appendField('>');

    this.appendStatementInput("ITEMS") // Allow multiple <li> blocks
      .setCheck(null) // Allow any content inside <ul>

    this.appendDummyInput()
      .appendField("</ul>"); // Label the block
    this.setPreviousStatement(true, null); // Can connect to previous blocks
    this.setNextStatement(true, null); // Can connect to the next blocks
    this.setColour('#5C81A6'); // Set block color
    this.setTooltip("Creates an unordered list (<ul>) in HTML."); // Tooltip
    this.setHelpUrl(""); // Help URL if needed
  }
};

// Generator for <ul> block
Blockly.JavaScript['html_ul'] = function (block) {
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS'); // Collect <li> items

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();

  var code = `<ul ${attributes}>\n ${items} </ul>\n`; // Generate the unordered list with items
  return code;
};

// Block for <li> (list item) tag
Blockly.Blocks['html_li'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<li") // Opening tag label

       // Add a value input for the attributes field
       this.appendValueInput("ATTRIBUTES")
       .setCheck('String')
       .appendField(' '); // Placeholder for attributes
 
     this.appendDummyInput()
       .appendField('>')
       .appendField(new Blockly.FieldTextInput('Item'), 'CONTENT') // Direct content text input
       .appendField('</li>');

    this.setPreviousStatement(true, null); // Can connect to previous blocks
    this.setNextStatement(true, null); // Can connect to next blocks
    this.setColour('#5C81A6'); // Set block color
    this.setTooltip("Defines a list item (<li>) with editable content."); // Tooltip
    this.setHelpUrl(""); // Help URL if needed
  }
};

// Generator for <li> block
Blockly.JavaScript['html_li'] = function (block) {
  var content = block.getFieldValue('CONTENT') || ''; // Retrieve the list item content

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();
  
  var code = `<li ${attributes}>\n${content}\n</li>\n`; // Generate the <li> tag with content and attributes

  return code;
};

// Block for <ol> (ordered list) tag
Blockly.Blocks['html_ol'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("<ol"); // Label the block

    // Single attributes input for chaining multiple attribute blocks
    this.appendValueInput("ATTRIBUTES")
    .setCheck('String')
    .appendField("")
  
    this.appendDummyInput()
      .appendField('>');

    this.appendStatementInput("ITEMS") // Allow multiple <li> blocks
      .setCheck(null) // Allow any content inside <ol>

    this.appendDummyInput()
      .appendField("</ol>"); // Label the block
    this.setPreviousStatement(true, null); // Can connect to previous blocks
    this.setNextStatement(true, null); // Can connect to the next blocks
    this.setColour('#5C81A6'); // Set block color
    this.setTooltip("Creates an ordered list (<ol>) in HTML."); // Tooltip
    this.setHelpUrl(""); // Help URL if needed
  }
};

// Generator for <ol> block
Blockly.JavaScript['html_ol'] = function (block) {
  var items = Blockly.JavaScript.statementToCode(block, 'ITEMS'); // Collect <li> items

  // Get all connected attributes, properly handling chains
  var attributes = Blockly.JavaScript.valueToCode(block, 'ATTRIBUTES', Blockly.JavaScript.ORDER_ATOMIC) || '';
  
  // Concatenate attributes and remove trailing spaces
  attributes = attributes.trim();
  
  var code = `<ol ${attributes}>\n${items} </ol>\n`; // Generate the ordered list with items

  return code;
};
