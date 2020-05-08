const { argv } = require('./config/yargs')
const colors = require('colors')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}



/* 

let parametro = argv[2]
let base = parametro.split('=')[1] */
/* 
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e))
 */

/*
    Imprimir todas las tablas del 1 al 12-----------
for (let i = 1; i <= 12; i++) {

        data += 'Tabla del ' + i + '\n';
        for (let y = 1; y <= 12; y++) {
        data += `${i} * ${y} = ${i*y}\n`
    }
}

fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});


*/