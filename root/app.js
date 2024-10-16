// app.js

// Initialize the Blockly workspace
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
  });
  
  // Data structure to hold user-created files
  var files = [];
  var currentFileIndex = -1;
  
  // Object to map filenames to their content for easy access
  var userFiles = {};
  
  // Function to add a new file
  function addFile(name, type) {
    // Check if file already exists
    if (userFiles.hasOwnProperty(`${name}.${type}`)) {
        alert(`File "${name}.${type}" already exists.`);
        return;
    }
  
    // Initialize file content based on type
    var initialBlocks = '';
    if (type === 'html') {
        initialBlocks = `<xml xmlns="https://developers.google.com/blockly/xml">
                          <block type="html_html" id="html_html"></block>
                        </xml>`;
    } else if (type === 'js') {
        initialBlocks = `<xml xmlns="https://developers.google.com/blockly/xml">
                          <block type="js_script" id="js_script"></block>
                        </xml>`;
    } else if (type === 'css') {
        initialBlocks = `<xml xmlns="https://developers.google.com/blockly/xml">
                          <block type="css_color" id="css_color"></block>
                        </xml>`;
    }
  
    // Create file object
    var fileObj = {
        name: name,
        type: type,
        xml: initialBlocks,
        generatedCode: '',
    };
  
    // Add to files array and userFiles object
    files.push(fileObj);
    userFiles[`${name}.${type}`] = ''; // Initialize empty content
  
    // Render the file list and select the new file
    renderFileList();
    selectFile(files.length - 1);
  }
  
  // Function to render the file list in the UI
  function renderFileList() {
    var fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
  
    files.forEach((file, index) => {
        var li = document.createElement('li');
        li.textContent = `${file.name}.${file.type}`;
        li.dataset.index = index;
        if (index === currentFileIndex) {
            li.classList.add('active');
        }
  
        // Click event to select the file
        li.addEventListener('click', function () {
            selectFile(parseInt(this.dataset.index));
        });
  
        // Right-click event to delete the file
        li.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            if (confirm(`Are you sure you want to delete "${file.name}.${file.type}"?`)) {
                deleteFile(index);
            }
        });
  
        fileList.appendChild(li);
    });
  }
  
  // Function to select a file
  function selectFile(index) {
    if (index < 0 || index >= files.length) return;
  
    // Save current workspace to the current file before switching
    if (currentFileIndex !== -1) {
        var currentFile = files[currentFileIndex];
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var xmlText = Blockly.Xml.domToText(xml);
        currentFile.xml = xmlText;
        currentFile.generatedCode = generateCodeForFile(currentFile);
        userFiles[`${currentFile.name}.${currentFile.type}`] = currentFile.generatedCode;
    }
  
    currentFileIndex = index;
    var file = files[index];
  
    // Load the selected file's blocks into the workspace
    workspace.clear();
    if (file.xml.trim() !== '') {
        var xml = Blockly.Xml.textToDom(file.xml);
        Blockly.Xml.domToWorkspace(xml, workspace);
    }
  
    // Update the generated code textarea
    document.getElementById('generatedCode').value = file.generatedCode;
  
    // Update the active class in the file list
    var fileListItems = document.querySelectorAll('#fileList li');
    fileListItems.forEach(item => item.classList.remove('active'));
    fileListItems[index].classList.add('active');
  
    // Update the userFiles object
    userFiles[`${file.name}.${file.type}`] = file.generatedCode;
  
    // Update the live preview
    updateLivePreview();
  }
  
  // Function to delete a file
  function deleteFile(index) {
    if (index < 0 || index >= files.length) return;
  
    var file = files[index];
    var filename = `${file.name}.${file.type}`;
  
    // Remove from files array and userFiles object
    files.splice(index, 1);
    delete userFiles[filename];
  
    // If the deleted file was selected, clear the workspace or select another file
    if (currentFileIndex === index) {
        workspace.clear();
        document.getElementById('generatedCode').value = '';
        if (files.length > 0) {
            selectFile(0);
        } else {
            currentFileIndex = -1;
        }
    } else if (currentFileIndex > index) {
        currentFileIndex--;
    }
  
    renderFileList();
  }
  
  // Handle adding a new file via the form
  document.getElementById('addFileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var fileNameInput = document.getElementById('newFileName');
    var fileTypeSelect = document.getElementById('newFileType');
    var name = fileNameInput.value.trim();
    var type = fileTypeSelect.value;
  
    if (name === '') {
        alert('File name cannot be empty.');
        return;
    }
  
    // Validate file name (avoid special characters, spaces, etc.)
    var validName = /^[a-zA-Z0-9_-]+$/.test(name);
    if (!validName) {
        alert('Invalid file name. Use only letters, numbers, underscores, and hyphens.');
        return;
    }
  
    addFile(name, type);
    fileNameInput.value = ''; // Clear input
  });
  
  // Function to generate code for all files
  function generateAllCode() {
    var allCode = {
        html: {},
        css: '',
        js: ''
    };
  
    files.forEach(file => {
        var code = generateCodeForFile(file);
        if (file.type === 'html') {
            allCode.html[`${file.name}.${file.type}`] = code;
        } else if (file.type === 'css') {
            allCode.css += code + '\n';
        } else if (file.type === 'js') {
            allCode.js += code + '\n';
        }
    });
  
    return allCode;
  }
  
  // Function to generate code for a single file based on its type
  function generateCodeForFile(file) {
    var code = '';
    if (file.type === 'html') {
        // Use your custom HTML generator
        if (Blockly.Html) {
            code = Blockly.Html.workspaceToCode(workspace);
        } else {
            // If no custom generator, use JavaScript generator as placeholder
            code = Blockly.JavaScript.workspaceToCode(workspace);
            console.warn('No custom HTML generator found. Using JavaScript generator instead.');
        }
    } else if (file.type === 'css') {
        // Use your custom CSS generator
        if (Blockly.Css) {
            code = Blockly.Css.workspaceToCode(workspace);
        } else {
            // If no custom generator, use JavaScript generator as placeholder
            code = Blockly.JavaScript.workspaceToCode(workspace);
            console.warn('No custom CSS generator found. Using JavaScript generator instead.');
        }
    } else if (file.type === 'js') {
        // Use the JavaScript generator
        code = Blockly.JavaScript.workspaceToCode(workspace);
    }
    return code;
  }
  
  // Function to update the live preview iframe
  function updateLivePreview() {
    if (currentFileIndex === -1) return; // No file selected
  
    var selectedFile = files[currentFileIndex];
  
    // Check if the selected file is an HTML file
    if (selectedFile.type !== 'html') {
        // Notify the user to select an HTML file for preview
        console.warn('Please select an HTML file to preview.');
        document.getElementById('preview').srcdoc = ''; // Clear the iframe
        return;
    }
  
    // Get the selected HTML file's code
    var htmlContent = selectedFile.generatedCode;
  
    // Aggregate all CSS and JS code from their respective files
    var allCSS = files
        .filter(file => file.type === 'css')
        .map(file => file.generatedCode)
        .join('\n');
  
    var allJS = files
        .filter(file => file.type === 'js')
        .map(file => file.generatedCode)
        .join('\n');
  
    // Construct the full HTML document with CSS and JS included
    var fullHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Live Preview - ${selectedFile.name}</title>
  ${allCSS ? `<style>${allCSS}</style>` : ''}
  </head>
  <body>
  ${htmlContent}
  ${allJS ? `<script>${allJS}</script>` : ''}
  <script>
      // Intercept link clicks and handle internal/external navigation
      document.addEventListener('click', function(e) {
          var target = e.target.closest('a'); // Support nested elements inside <a>
          if (target && target.tagName === 'A' && target.getAttribute('href')) {
              var href = target.getAttribute('href');
              // Check if the link is external
              if (href.startsWith('http://') || href.startsWith('https://')) {
                  // External link: allow default behavior (e.g., open in new tab)
                  // Optionally, you can set target="_blank" dynamically
                  target.setAttribute('target', '_blank');
              } else {
                  // Internal link: handle navigation within the editor
                  e.preventDefault(); // Prevent default navigation
                  window.parent.postMessage({ type: 'navigate', href: href }, '*'); // Send message to parent
              }
          }
      });
  </script>
  </body>
  </html>`;
  
    // Update the Live Preview iframe's srcdoc
    var iframe = document.getElementById('preview');
    iframe.srcdoc = fullHTML;
  
    // Similarly, update the modal preview if it's open
    var modal = document.getElementById("previewModal");
    if (modal.style.display === "block") {
        var modalIframe = document.getElementById('modalPreview');
        modalIframe.srcdoc = fullHTML;
    }
  }
  
  // Function to load a specific page into the Live Preview iframe
  function loadPage(page) {
    // Ensure the page exists in userFiles
    if (!userFiles.hasOwnProperty(page)) {
        alert(`File "${page}" does not exist.`);
        return;
    }
  
    // Find the file object
    var fileObj = files.find(file => `${file.name}.${file.type}` === page);
  
    if (!fileObj) {
        alert(`File "${page}" not found.`);
        return;
    }
  
    // Update currentFileIndex to the target file
    var targetIndex = files.indexOf(fileObj);
    if (targetIndex === -1) {
        alert(`File "${page}" not found in the file list.`);
        return;
    }
  
    // Select the target file, which will update the Live Preview
    selectFile(targetIndex);
  }
  
  // Function to export all files as a ZIP
  function exportProjectAsZip() {
    var allCode = generateAllCode();
    var zip = new JSZip();
  
    // Identify the main HTML file (e.g., 'index.html')
    var mainHtmlFile = files.find(file => file.type === 'html' && file.name.toLowerCase() === 'index');
  
    if (!mainHtmlFile) {
        alert('Please create an "index.html" file as the main HTML document for exporting.');
        return;
    }
  
    // Add HTML files
    files.filter(file => file.type === 'html').forEach(file => {
        if (file.name.toLowerCase() === 'index') {
            // Main HTML file includes links to CSS and JS
            var linkedCSS = files.filter(f => f.type === 'css').map(cssFile => `<link rel="stylesheet" href="${cssFile.name}.css">`).join('\n  ');
            var linkedJS = files.filter(f => f.type === 'js').map(jsFile => `<script src="${jsFile.name}.js"></script>`).join('\n  ');
  
            // Parse the main HTML content to inject CSS and JS links
            var parser = new DOMParser();
            var doc = parser.parseFromString(file.generatedCode, 'text/html');
  
            // Inject CSS links into <head>
            if (linkedCSS) {
                var styleElement = doc.createElement('style');
                styleElement.innerHTML = linkedCSS;
                doc.head.appendChild(styleElement);
            }
  
            // Inject JS scripts before </body>
            if (linkedJS) {
                var scriptElement = doc.createElement('script');
                scriptElement.innerHTML = linkedJS;
                doc.body.appendChild(scriptElement);
            }
  
            // **Removed**: Navigation script injection to keep exported HTML clean
  
            var finalHtmlContent = doc.documentElement.outerHTML;
  
            zip.file(`${file.name}.html`, finalHtmlContent);
        } else {
            // Other HTML files are treated as separate pages
            zip.file(`${file.name}.html`, file.generatedCode);
        }
    });
  
    // Add CSS files
    files.filter(file => file.type === 'css').forEach(file => {
        zip.file(`${file.name}.css`, file.generatedCode);
    });
  
    // Add JS files
    files.filter(file => file.type === 'js').forEach(file => {
        zip.file(`${file.name}.js`, file.generatedCode);
    });
  
    // Generate the ZIP file and trigger download
    zip.generateAsync({ type: 'blob' }).then(function (content) {
        var a = document.createElement('a');
        a.href = URL.createObjectURL(content);
        a.download = 'project.zip';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    });
  }
  
  // Add event listener for the export button
  document.getElementById('exportButton').addEventListener('click', exportProjectAsZip);
  
  // Add event listener for the show preview button
  document.getElementById('showPreviewButton').addEventListener('click', function () {
    // Show the modal and load the current Live Preview content
    var modal = document.getElementById("previewModal");
    var modalIframe = document.getElementById('modalPreview');
    var previewIframe = document.getElementById('preview');
  
    modalIframe.srcdoc = previewIframe.srcdoc; // Sync the content
    modal.style.display = "block"; // Show modal
  });
  
  // Handle closing the modal
  var closeModal = document.getElementsByClassName("close")[0];
  closeModal.onclick = function () {
    var modal = document.getElementById("previewModal");
    modal.style.display = "none";
  }
  
  // Close modal when clicking outside of it
  window.onclick = function (event) {
    var modal = document.getElementById("previewModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
  }
  
  // Function to create an initial HTML file (e.g., index.html)
  function createInitialHtmlFile() {
    var initialFileName = 'index';
    var initialFileType = 'html';
    addFile(initialFileName, initialFileType);
  }
  
  // Initialize by creating an initial HTML file when the page loads
  window.addEventListener('load', function () {
    createInitialHtmlFile();
  
    // Optionally, create a default about.html file
    // addFile('about', 'html');
  });
  
  // Function to generate code from the workspace and store it in the current file
  function updateGeneratedCode() {
    if (currentFileIndex === -1) return;
  
    var file = files[currentFileIndex];
    var code = '';
  
    // Generate code based on file type
    if (file.type === 'html') {
        // Use your custom HTML generator
        if (Blockly.Html) {
            code = Blockly.Html.workspaceToCode(workspace);
        } else {
            // If no custom generator, use JavaScript generator as placeholder
            code = Blockly.JavaScript.workspaceToCode(workspace);
            console.warn('No custom HTML generator found. Using JavaScript generator instead.');
        }
    } else if (file.type === 'css') {
        // Use your custom CSS generator
        if (Blockly.Css) {
            code = Blockly.Css.workspaceToCode(workspace);
        } else {
            // If no custom generator, use JavaScript generator as placeholder
            code = Blockly.JavaScript.workspaceToCode(workspace);
            console.warn('No custom CSS generator found. Using JavaScript generator instead.');
        }
    } else if (file.type === 'js') {
        // Use the JavaScript generator
        code = Blockly.JavaScript.workspaceToCode(workspace);
    }
  
    file.generatedCode = code;
    userFiles[`${file.name}.${file.type}`] = code; // Update the userFiles mapping
    document.getElementById('generatedCode').value = code;
  
    // Update the Live Preview
    updateLivePreview();
  }
  
  // Add a listener to update the generated code whenever the workspace changes
  workspace.addChangeListener(updateGeneratedCode);
  
  // Listen for messages from the iframe to handle navigation
  window.addEventListener('message', function (event) {
    if (event.data.type === 'navigate' && event.data.href) {
        var href = event.data.href;
        console.log(`Message received to navigate to: ${href}`);
  
        if (userFiles.hasOwnProperty(href)) {
            loadPage(href);
        } else {
            alert(`File "${href}" does not exist.`);
        }
    }
  });
  