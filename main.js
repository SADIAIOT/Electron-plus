const { app, BrowserWindow} = require('electron')
const apc = require('./ipc');
const path = require('path');

apc.init();

let mainWindow = null
function FormMain() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
      // zoomFactor: 0.68
    },
    autoHideMenuBar: true,
    icon: path.join(__dirname, '256x256.png'),
  })

  mainWindow.loadFile('public/index.html');
  
  mainWindow.on('closed', function () {
    mainWindow = null;
    if (process.platform !== 'darwin') app.quit()
  });
}


app.whenReady().then(() => {
  FormMain()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) FormLogin()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('before-quit', () => {});

