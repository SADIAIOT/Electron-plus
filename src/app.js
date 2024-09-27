const { ipcRenderer } = require("electron");
const math = require("mathjs");

const App = () => {
  const [data, setData] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [info, setInfo] = React.useState("Electron++");
  const [alert, setAlert] = React.useState("");

  const handleClick = () => {
    if (!/^[0-9+\-*/().]+$/.test(value)) {
      setAlert("alert_error");
      return;
    }

    try {
      const result = math.evaluate(value);
      setData(result);
      setAlert("");
      ipcRenderer.send("button-click", result);
    } catch (error) {
      setAlert("alert_error");
    }
  };

  return (
    <div className="container_div">
      <h2 className="title">{info}</h2>
      <div className="card_input">
        <input
          className={`input ${alert}`}
          placeholder="Digite a operação"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <h1 className="subtitle">{data}</h1>
      <footer className="card_input">
        <button className="button" onClick={handleClick}>
          Calcular
        </button>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
