// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expõe apenas as APIs necessárias ao frontend
contextBridge.exposeInMainWorld('electronAPI', {
  sendToMain: (channel, data) => ipcRenderer.send(channel, data)
});
