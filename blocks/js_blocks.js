// js_blocks.js

// Define all custom blocks using JSON
Blockly.defineBlocksWithJsonArray([
  // Variable Declaration Block with var, let, const
  {
    "type": "js_variable_declare",
    "message0": "%1 %2 = %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DECLARATION",
        "options": [
          ["var", "var"],
          ["let", "let"],
          ["const", "const"]
        ]
      },
      {
        "type": "field_input",
        "name": "VAR",
        "text": "myVar"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "Declare a variable using var, let, or const.",
    "helpUrl": ""
  },

  // Variable Assignment Block
  {
    "type": "js_variable_assign",
    "message0": "%1 = %2",
    "args0": [
      {
        "type": "field_input",
        "name": "VAR",
        "text": "myVar"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "Assign a new value to a variable.",
    "helpUrl": ""
  },

  // Variable Increment/Decrement Block
  {
    "type": "js_variable_increment",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "VAR",
        "text": "myVar"
      },
      {
        "type": "field_dropdown",
        "name": "OPERATOR",
        "options": [
          ["++", "++"],
          ["--", "--"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "Increment or decrement a variable.",
    "helpUrl": ""
  },

  // Function Definition Block with Parameters
  {
    "type": "js_function_with_params",
    "message0": "function %1 (%2) {",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "myFunction"
      },
      {
        "type": "field_input",
        "name": "PARAMS",
        "text": "param1, param2"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "CONTENT",
        "check": null
      }
    ],
    "message2": "}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Define a function with parameters.",
    "helpUrl": ""
  },

  // Function Call Block with Arguments (Dynamic Number of Args)
  {
    "type": "js_function_call",
    "message0": "%1(%2);",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "myFunction"
      },
      {
        "type": "input_value",
        "name": "ARGS",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Call a function with arguments.",
    "helpUrl": ""
  },

  // If-Elif-Else Block
  {
    "type": "js_if_elif_else",
    "message0": "if %1 {",
    "args0": [
      {
        "type": "input_value",
        "name": "IF_CONDITION",
        "check": "Boolean"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "IF_DO",
        "check": null
      }
    ],
    "message2": "else if %1 {",
    "args2": [
      {
        "type": "input_value",
        "name": "ELIF_CONDITION",
        "check": "Boolean"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "name": "ELIF_DO",
        "check": null
      }
    ],
    "message4": "else {",
    "message5": "%1",
    "args5": [
      {
        "type": "input_statement",
        "name": "ELSE_DO",
        "check": null
      }
    ],
    "message6": "}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "If-Elif-Else condition.",
    "helpUrl": ""
  },

  // Math Operations Block
  {
    "type": "js_math_operations",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["+", "+"],
          ["-", "-"],
          ["*", "*"],
          ["/", "/"]
        ]
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "Perform a mathematical operation.",
    "helpUrl": ""
  },

  // Comparison Operations Block
  {
    "type": "js_comparison_operations",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": null
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["==", "=="],
          ["!=", "!="],
          [">", ">"],
          ["<", "<"],
          [">=", ">="],
          ["<=", "<="]
        ]
      },
      {
        "type": "input_value",
        "name": "B",
        "check": null
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Compare two values.",
    "helpUrl": ""
  },

  // Logical Operations Block
  {
    "type": "js_logical_operations",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Boolean"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["&&", "&&"],
          ["||", "||"]
        ]
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Perform a logical operation.",
    "helpUrl": ""
  },

  // Return Statement Block
  {
    "type": "js_return",
    "message0": "return %1",
    "args0": [
      {
        "type": "input_value",
        "name": "RETURN",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Return a value from a function.",
    "helpUrl": ""
  },

  // Console Log Block
  {
    "type": "js_console_log",
    "message0": "console.log(%1)",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "Log a message to the console.",
    "helpUrl": ""
  },

  // Alert Block
  {
    "type": "js_alert",
    "message0": "alert(%1)",
    "args0": [
      {
        "type": "input_value",
        "name": "MESSAGE",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "Display an alert box with the specified message.",
    "helpUrl": ""
  },

  // Event Listener Block
  {
    "type": "js_event_listener",
    "message0": "document.getElementById(%1).addEventListener(%2, function() {",
    "args0": [
      {
        "type": "field_input",
        "name": "ELEMENT_ID",
        "text": "btn"
      },
      {
        "type": "field_dropdown",
        "name": "EVENT",
        "options": [
          ["click", "click"],
          ["mouseover", "mouseover"],
          ["mouseout", "mouseout"]
        ]
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO",
        "check": null
      }
    ],
    "message2": "});",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Add an event listener to an element.",
    "helpUrl": ""
  },

  // DOMContentLoaded Event Listener Block
  {
    "type": "js_event_listener_domcontentloaded",
    "message0": "document.addEventListener('DOMContentLoaded', function() {",
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO",
        "check": null
      }
    ],
    "message2": "});",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Execute code when the DOM is fully loaded.",
    "helpUrl": ""
  },

  // HTTP GET Request Block
  {
    "type": "js_http_get",
    "message0": "fetch(%1).then(response => response.json()).then(data => console.log(data));",
    "args0": [
      {
        "type": "input_value",
        "name": "URL",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290,
    "tooltip": "Make an HTTP GET request.",
    "helpUrl": ""
  },

  // Traditional For Loop Block
  {
    "type": "js_for_loop",
    "message0": "for (let %1 = %2; %1 < %3; %1 += %4) {",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "i"
      },
      {
        "type": "input_value",
        "name": "START",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "END",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "STEP",
        "check": "Number"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO",
        "check": null
      }
    ],
    "message2": "}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Traditional for loop in JavaScript.",
    "helpUrl": ""
  },

  // For...of Loop Block
  {
    "type": "js_for_of_loop",
    "message0": "for (let %1 of %2) {",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "ARRAY",
        "check": "Array"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO",
        "check": null
      }
    ],
    "message2": "}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "For...of loop in JavaScript.",
    "helpUrl": ""
  },

  // For...in Loop Block
  {
    "type": "js_for_in_loop",
    "message0": "for (let %1 in %2) {",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "key"
      },
      {
        "type": "input_value",
        "name": "OBJECT",
        "check": "Object"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO",
        "check": null
      }
    ],
    "message2": "}",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "For...in loop in JavaScript.",
    "helpUrl": ""
  },

  // Array Declaration Block
  {
    "type": "js_array_declare",
    "message0": "%1 %2 = [%3]",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DECLARATION",
        "options": [
          ["var", "var"],
          ["let", "let"],
          ["const", "const"]
        ]
      },
      {
        "type": "field_input",
        "name": "VAR",
        "text": "myArray"
      },
      {
        "type": "input_value",
        "name": "ELEMENTS",
        "check": "Array",
        "default": "[]"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Declare an array.",
    "helpUrl": ""
  },

  // Access Array Element Block
  {
    "type": "js_array_access",
    "message0": "%1[%2]",
    "args0": [
      {
        "type": "input_value",
        "name": "ARRAY",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "INDEX",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 260,
    "tooltip": "Access an element in an array by index.",
    "helpUrl": ""
  },

  // Add to Array (Push) Block
  {
    "type": "js_array_push",
    "message0": "%1.push(%2)",
    "args0": [
      {
        "type": "input_value",
        "name": "ARRAY",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "ELEMENT",
        "check": null
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Add an element to the end of an array.",
    "helpUrl": ""
  },

  // Array Length Block
  {
    "type": "js_array_length",
    "message0": "%1.length",
    "args0": [
      {
        "type": "input_value",
        "name": "ARRAY",
        "check": "Array"
      }
    ],
    "output": "Number",
    "colour": 260,
    "tooltip": "Get the length of an array.",
    "helpUrl": ""
  },

  // Iterate Over Array Using forEach Block
  {
    "type": "js_array_foreach",
    "message0": "array.forEach(function(%1) {",
    "args0": [
      {
        "type": "field_variable",
        "name": "ITEM",
        "variable": "item"
      }
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO",
        "check": null
      }
    ],
    "message2": "});",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Iterate over each element in an array using forEach.",
    "helpUrl": ""
  },

  // Number Input Block
  {
    "type": "number_input",
    "message0": "%1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "value": 0
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "Number input.",
    "helpUrl": ""
  }
]);

// JavaScript Code Generators

// Variable Declaration
Blockly.JavaScript['js_variable_declare'] = function(block) {
  var declaration = block.getFieldValue('DECLARATION');
  var variable = block.getFieldValue('VAR');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var code = declaration + ' ' + variable + ' = ' + value + ';\n';
  return code;
};

// Variable Assignment
Blockly.JavaScript['js_variable_assign'] = function(block) {
  var variable = block.getFieldValue('VAR');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var code = variable + ' = ' + value + ';\n';
  return code;
};

// Variable Increment/Decrement
Blockly.JavaScript['js_variable_increment'] = function(block) {
  var variable = block.getFieldValue('VAR');
  var operator = block.getFieldValue('OPERATOR');
  var code = variable + operator + ';\n';
  return code;
};

// Function Definition with Parameters
Blockly.JavaScript['js_function_with_params'] = function(block) {
  var functionName = block.getFieldValue('NAME');
  var params = block.getFieldValue('PARAMS');
  var statements = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  var code = 'function ' + functionName + '(' + params + ') {\n' + statements + '}\n';
  return code;
};

// Function Call with Arguments
Blockly.JavaScript['js_function_call'] = function(block) {
  var functionName = block.getFieldValue('NAME');
  var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || '';
  var code = functionName + '(' + args + ');\n';
  return code;
};

// If-Elif-Else Block
Blockly.JavaScript['js_if_elif_else'] = function(block) {
  var ifCondition = Blockly.JavaScript.valueToCode(block, 'IF_CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
  var ifStatements = Blockly.JavaScript.statementToCode(block, 'IF_DO');
  var elifCondition = Blockly.JavaScript.valueToCode(block, 'ELIF_CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
  var elifStatements = Blockly.JavaScript.statementToCode(block, 'ELIF_DO');
  var elseStatements = Blockly.JavaScript.statementToCode(block, 'ELSE_DO');
  
  var code = `if (${ifCondition}) {\n${ifStatements}} else if (${elifCondition}) {\n${elifStatements}} else {\n${elseStatements}}\n`;
  return code;
};

// Math Operations
Blockly.JavaScript['js_math_operations'] = function(block) {
  var a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var op = block.getFieldValue('OP');
  var b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = a + ' ' + op + ' ' + b;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Comparison Operations
Blockly.JavaScript['js_comparison_operations'] = function(block) {
  var a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var op = block.getFieldValue('OP');
  var b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = a + ' ' + op + ' ' + b;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Logical Operations
Blockly.JavaScript['js_logical_operations'] = function(block) {
  var a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  var op = block.getFieldValue('OP');
  var b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  var code = a + ' ' + op + ' ' + b;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Return Statement
Blockly.JavaScript['js_return'] = function(block) {
  var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_NONE) || 'null';
  var code = 'return ' + returnValue + ';\n';
  return code;
};

// Console Log
Blockly.JavaScript['js_console_log'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';
  var code = 'console.log(' + text + ');\n';
  return code;
};

// Alert
Blockly.JavaScript['js_alert'] = function(block) {
  var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || '""';
  var code = 'alert(' + message + ');\n';
  return code;
};

// Event Listener
Blockly.JavaScript['js_event_listener'] = function(block) {
  var elementId = Blockly.JavaScript.quote_(block.getFieldValue('ELEMENT_ID'));
  var eventType = Blockly.JavaScript.quote_(block.getFieldValue('EVENT'));
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  
  var code = `document.getElementById(${elementId}).addEventListener(${eventType}, function() {\n${statements_do}});\n`;
  return code;
};

// DOMContentLoaded Event Listener
Blockly.JavaScript['js_event_listener_domcontentloaded'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `document.addEventListener('DOMContentLoaded', function() {\n${statements_do}});\n`;
  return code;
};

// HTTP GET Request
Blockly.JavaScript['js_http_get'] = function(block) {
  var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE) || '""';
  var code = `fetch(${url})\n  .then(response => response.json())\n  .then(data => console.log(data));\n`;
  return code;
};

// Traditional For Loop
Blockly.JavaScript['js_for_loop'] = function(block) {
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ASSIGNMENT) || '10';
  var step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `for (let ${variable} = ${start}; ${variable} < ${end}; ${variable} += ${step}) {\n${statements_do}};\n`;
  return code;
};

// For...of Loop
Blockly.JavaScript['js_for_of_loop'] = function(block) {
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_NONE) || '[]';
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `for (let ${variable} of ${array}) {\n${statements_do}};\n`;
  return code;
};

// For...in Loop
Blockly.JavaScript['js_for_in_loop'] = function(block) {
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || '{}';
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `for (let ${variable} in ${object}) {\n${statements_do}};\n`;
  return code;
};

// Array Declaration
Blockly.JavaScript['js_array_declare'] = function(block) {
  var declaration = block.getFieldValue('DECLARATION');
  var variable = block.getFieldValue('VAR');
  var elements = Blockly.JavaScript.valueToCode(block, 'ELEMENTS', Blockly.JavaScript.ORDER_NONE) || '[]';
  var code = declaration + ' ' + variable + ' = [' + elements + '];\n';
  return code;
};

// Access Array Element
Blockly.JavaScript['js_array_access'] = function(block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_MEMBER) || '[]';
  var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE) || '0';
  var code = array + '[' + index + ']';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

// Add to Array (Push)
Blockly.JavaScript['js_array_push'] = function(block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_MEMBER) || '[]';
  var element = Blockly.JavaScript.valueToCode(block, 'ELEMENT', Blockly.JavaScript.ORDER_NONE) || 'null';
  var code = array + '.push(' + element + ');\n';
  return code;
};

// Array Length
Blockly.JavaScript['js_array_length'] = function(block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_MEMBER) || '[]';
  var code = array + '.length';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

// Iterate Over Array Using forEach
Blockly.JavaScript['js_array_foreach'] = function(block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_MEMBER) || '[]';
  var item = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('ITEM'), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `${array}.forEach(function(${item}) {\n${statements_do}});\n`;
  return code;
};

// Number Input
Blockly.JavaScript['number_input'] = function(block) {
  var number = block.getFieldValue('NUM');
  var code = number;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
