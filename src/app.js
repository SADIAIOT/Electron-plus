const { ipcRenderer } = require('electron');
const { useState } = React;

const App = () => {
  const [route, setRoute] = useState('home');

  const callElectron = (text) => {
    ipcRenderer.send('button-click', text);
  }

  const Panel = () => {
    switch (route) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={styles.menu}>
        <div className="flex">
          <Button style={styles.button} title="Home" icon="bx bx-home" onClick={() => setRoute('home')} />
          <Button className="ml-2" style={styles.button} title="About" icon="bx bx-info-circle" onClick={() => setRoute('about')} />
        </div>
        <div className="right">
          <Button style={styles.button} title="Send to Electron" icon="bx bx-send" onClick={() => callElectron('Message to Electron')} />
        </div>
      </div>
      <Panel />
    </div>
  );
}

const styles = {
  menu: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontSize: 18,
  },
  button: {
    borderRadius: 2,
  },
};

ReactDOM.render(<App />, document.getElementById('root'));
