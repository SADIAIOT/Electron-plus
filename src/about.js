const { ipcRenderer } = require('electron');

class About extends React.Component {
  render() {
    return (
      <View>
        <QRCodeGenerator text={"Electron Plus"} animate="backInLeft" />
        <BarcodeGenerator value={"Electron Plus"}  format={"CODE128"} animate="backInRight" />
      </View>
    );
  }
}
