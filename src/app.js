const { ipcRenderer } = require('electron');

const App = () => {
  const [route, setRoute] = useState('home');

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
    <View style={{ padding: 20 }} animate="backInLeft">

      <Button
          title="home"
          icon="bx bx-home"
          onClick={() => setRoute('home')}
      />


      <Button
        title="about"
        icon= "bx bx-info-circle"
        onClick={() => setRoute('about')}/>

      {Panel()}

    </View>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));

