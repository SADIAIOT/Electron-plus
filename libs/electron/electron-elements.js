function formatarTexto(texto, numeroDeCaracteres, delimitador) {
    var textoFormatado = '';
    
    for (var i = 0; i < texto.length; i += numeroDeCaracteres) {
        textoFormatado += texto.slice(i, i + numeroDeCaracteres) + delimitador;
    }

    // Remove o último delimitador extra no final
    textoFormatado = textoFormatado.trim();

    return textoFormatado;
}

function limitarTexto(texto, limite) {
    if (texto.length > limite) {
        return texto.slice(0, limite) + "...";
    }
    return texto;
}

function exibirIniciais(texto) {
      // Obtém o texto original da div
      var textoOriginal = texto

      // Divide o texto em palavras
      var palavras = textoOriginal.split(' ');
  
      // Obtém a primeira letra do primeiro nome
      var primeiraLetraPrimeiroNome = palavras[0].charAt(0).toUpperCase();
  
      // Obtém a primeira letra do último nome
      var ultimaPalavra = palavras[palavras.length - 1];
      var primeiraLetraUltimoNome = ultimaPalavra.charAt(0).toUpperCase();
  
      // Combinação das iniciais
      var iniciais = primeiraLetraPrimeiroNome + primeiraLetraUltimoNome;
  
      return iniciais
}

function hideCode(code, length)
{
    var textoOriginal = code

    // Obtém os últimos 4 dígitos
    var ultimosDigitos = textoOriginal.slice(length * -1);

    // Substitui os caracteres anteriores aos últimos dígitos por asteriscos
    var textoCensurado = "*".repeat(textoOriginal.length - ultimosDigitos.length) + ultimosDigitos;

    // Exibe os últimos dígitos na div
    return textoCensurado
}
function eventCopy(text) {
    // Cria um elemento de input temporário
    const inputElement = document.createElement('input');
    inputElement.value = text; // Define o texto a ser copiado
    document.body.appendChild(inputElement);
    
    // Seleciona o texto do input
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    // Executa o comando de cópia
    document.execCommand('copy');
    
    // Remove o elemento input temporário
    document.body.removeChild(inputElement);
    
    console.log(`Texto copiado: ${text}`);
}
function dateTime(format) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dataHora = new Date();
    
    const diaSemana = diasSemana[dataHora.getDay()];
    const dia = String(dataHora.getDate()).padStart(2, '0');
    const mes = String(dataHora.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const ano = dataHora.getFullYear();
    const hora = String(dataHora.getHours()).padStart(2, '0');
    const minuto = String(dataHora.getMinutes()).padStart(2, '0');
    const segundo = String(dataHora.getSeconds()).padStart(2, '0');

    // Formatação dinâmica usando placeholders
    const dataHoraFormatada = format
        .replace('dd', dia)
        .replace('mm', mes)
        .replace('yy', ano.toString().slice(-2)) // últimos dois dígitos do ano
        .replace('yyyy', ano)
        .replace('H', hora)
        .replace('M', minuto)
        .replace('S', segundo)
        .replace('F', diaSemana);

   return dataHoraFormatada;
}

function formatarMoeda(valor, moeda= 'USD', exibirMoeda = true) {
    // Verifica se o valor é um número válido
    if (isNaN(valor)) {
        throw new Error("O valor fornecido não é um número válido.");
    }

    // Define o formato de moeda
    const opcoes = {
        style: 'currency',
        currency: moeda,
        minimumFractionDigits: 2, // Número mínimo de casas decimais
        maximumFractionDigits: 2  // Número máximo de casas decimais
    };

    // Formata o valor como moeda
    const valorFormatado = new Intl.NumberFormat('pt-BR', opcoes).format(valor);

    // Se exibirMoeda for false, remove o símbolo da moeda
    return exibirMoeda ? valorFormatado : valorFormatado.replace(/[^0-9.,]/g, '');
}
