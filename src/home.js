const { ipcRenderer } = require('electron');

const Home = () => {

  const options = [
    { label: 'Opção 1', callback: () => console.log('Opção 1 selecionada') },
    { label: 'Opção 2', callback: () => console.log('Opção 2 selecionada') },
    { label: 'Opção 3', callback: () => console.log('Opção 3 selecionada') },
  ];

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <h1>Hello do Eltron plus</h1>
      <Text>Clique com o botão direito do mouse para abrir o menu.</Text>
      <CustomMenu options={options} style={{border : '1px solid #dd'}}/>
    </View>
  )

};