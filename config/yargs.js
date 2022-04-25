const argv = require('yargs')
    .option('b', {
        alias:  'base',
        type:   'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias:  'listar',
        type:   'boolean',
        default: false,
        describe: 'Lista la tabla de multiplicar'
    })
    .option('t', {
        alias:  'tope',
        type:   'number',
        default: 10,
        describe: 'Tope de la numeracion de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN(argv.base)){
            throw 'La base tiene que ser un numero!'
        }
        return true;
    })
    .argv;

module.exports = argv;