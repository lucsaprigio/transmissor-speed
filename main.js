const { app, BrowserWindow } = require('electron');
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preloader.js")
    }
  });
  win.loadURL("https://transmissor-mensagens.vercel.app/")
}

app.whenReady().then(() => {
  createWindow();

  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})