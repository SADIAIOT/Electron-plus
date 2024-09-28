const { ipcRenderer } = require('electron');

const Home = () => {

  const options = [
    { label: 'Opção 1', callback: () => console.log('Opção 1 selecionada') },
    { label: 'Opção 2', callback: () => console.log('Opção 2 selecionada') },
    { label: 'Opção 3', callback: () => console.log('Opção 3 selecionada') },
  ];

  return (
    <View className="flex flex-col text-center h-screen justify-center">
      <h1 className="text-3xl text-blue-500">Hello do Eltron plus</h1> 
      <Text className="text-green-500">Clique com o botão direito do mouse para abrir o menu.</Text>
      <CustomMenu options={options} style={{border : '1px solid #dd'}}/>
    </View>
  )
};