const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // This enables Node.js integration in the renderer process
    },
  });

  mainWindow.loadFile("index.html"); // Load your HTML file

  // Open DevTools (optional)
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
