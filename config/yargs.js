const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
}

const argv = require('yargs')
    .command('listar', 'en consola la tabla multiplicar', opciones)
    .command('crear', 'en archivo la tabla multiplicar', opciones).help().argv;

module.exports = { argv }