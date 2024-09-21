const { ipcRenderer } = require('electron');

const App = () => {
  const [data, setData] = React.useState(0);
  const [value, setValue] = React.useState('');
  const [info, setInfo] = React.useState('Electron ++');

  const handleClick = (event) => {
    return new Promise((resolve, reject) => 
    {
      resolve(eval(value));
    }).then((data) => {
      setData(data)
      setInfo('Plus Plus++')
      ipcRenderer.send('button-click', data);
    })
  };

  return (
    <div>
      <Link title={info} />
      <input placeholder="digite a operação" value={value} onChange={(event) => setValue(event.target.value)} />
      <h1>{data}</h1>
      <button onClick={handleClick}>
          Calcular
      </button>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));

