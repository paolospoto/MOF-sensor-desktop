const { app, BrowserWindow } = require("electron");
const path = require("path");
const Gpio = require("onoff").Gpio;
const led = new Gpio(2, "out");
const { spawn } = require("child_process");
const { exec } = require("child_process");

let counter = 1;

const runPythonScript = () => {
  led.writeSync(1);
  setTimeout(() => {
    const python = spawn("python", ["../script.py", counter]);

    if (counter === 4) {
      mainWindow.webContents.send("python-output", "TBD");
      counter = 1;
    } else {
      process.stdout.on("data", (data) => {
        mainWindow.webContents.send("python-output", data.toString());
      });
      counter++;
    }
    led.writeSync(0);
  }, 2000);
};

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

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

app.whenReady().then(() => {
  ipcMain.on("request", runPythonScript);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
