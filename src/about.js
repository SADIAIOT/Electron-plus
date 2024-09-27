const { ipcRenderer } = require('electron');

class About extends React.Component {
  render() {
    return (
      <View>
        <QRCodeGenerator text={"Electron Plus"} />
        <BarcodeGenerator value={"Electron Plus"}  format={"CODE128"}/>
      </View>
    );
  }
}
