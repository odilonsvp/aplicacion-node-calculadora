const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

console.log(argv);


crearArchivo(argv.bases, argv.listar, argv.tope)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado!'))
    .catch(err => console.log(err));
