import React from 'react';
import ReactDOM from 'react-dom';

const {ipcRenderer} = window.require('electron');

const Form = () => {
  return (
    <div>
      <h1>Formulário</h1>
      <p>Este é o conteúdo do formulário aberto em uma nova janela.</p>
      <button onClick={() => ipcRenderer.send('button-click', "teste de apc")}>Fechar</button>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById('form-root'));
