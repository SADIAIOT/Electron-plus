const { ipcRenderer } = require('electron');

const About = () => {
  return (
    <View>
      <QRCodeGenerator text={"Electron Plus"} animate="backInLeft" />
      <BarcodeGenerator value={"Electron Plus"} format={"CODE128"} animate="backInRight" />
    </View>
  );
}
