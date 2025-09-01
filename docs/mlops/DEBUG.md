For debugger `launch.json`

```json
{
    // VS CODE LAUNCH.JSON CONFIGURATION NOTES
    // This file configures debugging sessions for VS Code
    // Location: .vscode/launch.json in your project root
    
    "version": "0.2.0",  // Schema version - always use "0.2.0" for current VS Code versions
    
    "configurations": [  // Array of debug configurations - you can have multiple setups
        {
            // BASIC PYTHON DEBUGGER CONFIGURATION
            "name": "Debug Main Script",           // Display name in VS Code debug dropdown
            "type": "debugpy",                     // CRITICAL: Use "debugpy" for Python debugging
            "request": "launch",                   // "launch" starts new process, "attach" connects to existing
            "program": "${workspaceFolder}/main.py",  // IMPORTANT: Path to script to debug
            "console": "integratedTerminal",       // Where output appears: "integratedTerminal", "internalConsole", "externalTerminal"
            "args": [],                           // Command line arguments as array of strings
            "envFile": "${workspaceFolder}/.env", // Load environment variables from .env file
            "python": "/path/to/your/venv/bin/python",  // ESSENTIAL: Specify Python interpreter path
            
            // OPTIONAL PROPERTIES (commonly used)
            "cwd": "${workspaceFolder}",          // Working directory - defaults to workspace folder
            "stopOnEntry": false,                 // Pause on first line of code (useful for debugging startup)
            "justMyCode": true,                   // Only debug your code, not library code
            "env": {                              // Additional environment variables
                "PYTHONPATH": "${workspaceFolder}",
                "DEBUG": "true"
            }
        },
        
        {
            // TRAINING SCRIPT WITH ARGUMENTS CONFIGURATION
            "name": "Train Model",
            "type": "debugpy",
            "request": "launch", 
            "program": "${workspaceFolder}/train.py",
            "console": "integratedTerminal",
            
            // COMMAND LINE ARGUMENTS
            // Each argument and its value should be separate array elements
            "args": [
                "--instance_data_dir", "examples/creature",  // Training data directory
                "--num_of_assets", "3",                      // Number of assets to train on
                "--initializer_tokens", "creature", "bowl", "stone",  // Token names
                "--class_data_dir", "inputs/data_dir",       // Class data directory
                "--phase1_train_steps", "400",               // Training steps for phase 1
                "--phase2_train_steps", "400",               // Training steps for phase 2
                "--output_dir", "outputs/creature"           // Where to save trained model
            ],
            
            "envFile": "${workspaceFolder}/.env",
            "python": "/path/to/your/venv/bin/python",
            
            // TRAINING-SPECIFIC OPTIONS
            "justMyCode": false,    // May want to debug into libraries during training
            "subProcess": true      // Debug subprocess if training spawns child processes
        },
        
        {
            // ADVANCED CONFIGURATION EXAMPLE
            "name": "Advanced Debug Setup",
            "type": "debugpy",
            "request": "launch",
            "program": "${workspaceFolder}/advanced_script.py",
            "console": "integratedTerminal",
            
            // PRE/POST LAUNCH TASKS
            "preLaunchTask": "install-dependencies",  // Run task before debugging
            "postDebugTask": "cleanup",               // Run task after debugging
            
            // DEBUGGING BEHAVIOR
            "stopOnEntry": true,        // Pause immediately when debugging starts
            "showReturnValue": true,    // Show function return values in debug console
            "redirectOutput": true,     // Capture print statements in debug console
            
            // PYTHON-SPECIFIC OPTIONS
            "python": "${command:python.interpreterPath}",  // Use VS Code's selected Python interpreter
            "justMyCode": false,        // Debug into library code too
            "django": false,           // Set to true for Django projects
            "flask": {                 // Flask-specific debugging options
                "app": "app.py",
                "args": ["run", "--debug"]
            },
            
            // ENVIRONMENT AND PATHS
            "cwd": "${workspaceFolder}/src",  // Different working directory
            "env": {
                "PYTHONPATH": "${workspaceFolder}/src:${workspaceFolder}/lib",
                "LOG_LEVEL": "DEBUG",
                "CUDA_VISIBLE_DEVICES": "0"
            },
            
            // DEBUGGING SPECIFIC FEATURES
            "gevent": false,           // Set true if using gevent
            "pyramid": false           // Set true if using Pyramid framework
        }
    ],
    
    // COMMON VARIABLE SUBSTITUTIONS (read-only reference)
    // ${workspaceFolder} - Root folder of your project
    // ${workspaceFolderBasename} - Name of the workspace folder
    // ${file} - Currently opened file
    // ${fileBasename} - Basename of currently opened file
    // ${fileDirname} - Directory of currently opened file
    // ${fileExtname} - Extension of currently opened file
    // ${cwd} - Current working directory
    // ${lineNumber} - Current line number in active file
    // ${selectedText} - Currently selected text in active file
    // ${command:python.interpreterPath} - Path to selected Python interpreter
    
    // IMPORTANT TROUBLESHOOTING NOTES:
    // 1. Always use forward slashes (/) in paths, even on Windows
    // 2. Virtual environment path usually ends with /bin/python (Linux/Mac) or /Scripts/python.exe (Windows)
    // 3. If debugging doesn't work, check Python interpreter path first
    // 4. Use "justMyCode": false to debug into third-party libraries
    // 5. Check VS Code Python extension is installed and updated
    // 6. Ensure debugpy is installed in your Python environment: pip install debugpy
}
```