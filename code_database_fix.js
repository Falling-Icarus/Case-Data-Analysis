// Import do fs com o objetivo de exportar o arquivo corrigido em JSON no final
const fs = require('fs');

// Import tanto da broken_database_1.json quanto da broken_database_2.json definindo entao essas variáveis
const broken_data = require('./broken_database_1.json');
const broken_data2 = require('./broken_database_2.json');

// Criação de uma função com o Uso do for para realizar um loop por cada linha substituindo os caracteres incorretos pelos corretos pelo método replace.
function characterReplace(database){

if (Object.keys(database[0]).includes('nome')){
    for(var i = 0; i < database.length; i++){
      database[i].nome = database[i].nome.replace(/ø/g, 'o').replace(/æ/g,'a')
    }
  }  
  else{
    for(var i = 0; i < database.length; i++){
      database[i].marca = database[i].marca.replace(/ø/g, 'o').replace(/æ/g,'a')
    }
  }
}

characterReplace(broken_data)
characterReplace(broken_data2)

// Uso do for para realizar um loop trasformando todo número que estiver como string em um int através do +broken_data, o + na frente servindo para fazer a conversão de string 
// para número
for(var i = 0; i < broken_data.length; i++){
  for(var prop in broken_data[i]){
    if(broken_data[i].hasOwnProperty(prop) && broken_data[i][prop] !== null && !isNaN(broken_data[i][prop])){
        broken_data[i][prop] = +broken_data[i][prop];
    }
  }
}

// Exportação dos arquivos corrigidos como JSON usando a função writeFileSync, nomeando logo após o nome do novo arquivo, convertendo também o arquivo para json usando o stringify
fs.writeFileSync('corrected_database_1.json', JSON.stringify(broken_data, null, 2));
fs.writeFileSync('corrected_database_2.json', JSON.stringify(broken_data2, null, 2));
