const { ipcRenderer } = require("electron");
const math = require("mathjs");

const App = () => {
  const [data, setData] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [info, setInfo] = React.useState("Electron ++");

  const handleClick = () => {
    if (!/^[0-9+\-*/().]+$/.test(value)) {
      setInfo("Expressão inválida");
      return;
    }

    try {
      const result = math.evaluate(value);
      setData(result);
      setInfo("Electron Plus++");
      ipcRenderer.send("button-click", result);
    } catch (error) {
      setInfo("Erro na expressão");
    }
  };

  return (
    <div>
      {info && <h2>{info}</h2>}
      <input
        placeholder="Digite a operação"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>{data}</h1>
      <button onClick={handleClick}>Calcular</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
