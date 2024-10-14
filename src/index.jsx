import React from 'react';
import ReactDOM from 'react-dom';

const { ipcRenderer } = window.require('electron'); // Acessa o IPC do Electron

const openForm = () => {
  ipcRenderer.send('openForm'); // Envia evento para o processo principal
};

const App = () => {
  return (
    <div>
      <h1>Olá, React com Electron!</h1>
      <button onClick={openForm}>Abrir Formulário</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

