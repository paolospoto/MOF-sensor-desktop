const { contextBridge, ipcRenderer } = require("electron");

let indexBridge = {
  sendRequest: (data) => {
    ipcRenderer.send("request", data);
  },

  onData: (callback) => {
    ipcRenderer.on("python-output", callback);
  },
};

contextBridge.exposeInMainWorld("indexBridge", indexBridge);
