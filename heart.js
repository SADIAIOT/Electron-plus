const { ipcMain } = require('electron');

function init() {

  ipcMain.on('button-click', (event, arg) => {
    console.log('Botão clicado:', arg);
  });

}

module.exports = { init };