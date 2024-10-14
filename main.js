const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const heart = require('./heart.js');

let win;
let form;

heart.init();

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('public/index.html'); // Janela principal

  // Evento IPC para abrir o formulário em uma nova janela
  ipcMain.on('openForm', () => {
    form = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    form.loadFile('public/form.html'); // Carrega o arquivo HTML com React para o formulário
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
