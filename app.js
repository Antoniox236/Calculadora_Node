const { argv } = require('./config/yargs');
const { multiplicar, crearTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        crearTabla(argv.base, argv.limite);
        break;
    default:
}