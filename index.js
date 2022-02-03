// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");
const { exec } = require("child_process");

// Start server in child process.
// It's important this doesn't share the same process as electron for performance reasons.
exec("node server", (error, stdout, stderr) => {
    if(error) {
        // eslint-disable-next-line no-console
        console.error(`error: ${error.message}`);
        
        return;
    }
  
    if(stderr) {
        // eslint-disable-next-line no-console
        console.error(`stderr: ${stderr}`);
        
        return;
    }
  
    // eslint-disable-next-line no-console
    console.log(`stdout:\n${stdout}`);
});

const {
    NODE_ENV,
} = process.env;

function createWindow() {
    // Create the browser window.
    // Start event listeners
    const mainWindow = new BrowserWindow({
        width          : NODE_ENV === "development" ? 800 : 420,
        height         : 600,
        webPreferences : {
            nodeIntegration    : true,

            // protect against prototype pollution
            contextIsolation   : true,

            // turn off remote
            enableRemoteModule : true,

            preload            : path.join(__dirname, "./preload.js"),
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile("./ui/index.html");

    // Start dev tools if dev
    if(NODE_ENV === "development") {
    // Open inspector
        mainWindow.webContents.openDevTools();
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    
    app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
