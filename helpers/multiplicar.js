const fs = require('fs');
// de esta manera es posible utilizar todas las funciones del paquete file systems

const crearArchivo = async(base = 7, listar = false, tope = 10) => { 
    
    try{
        console.log(`Tabla del ${base}\n`)
    
        let salida = '';

        for (var i = 1; i <= tope; i++) {
            salida += (`${base} * ${i} = ${base * i}\n`);
        }

        if(listar){
            console.log(salida);
        }
        

        /*
        // WriteFile
        fs.writeFile(`Tabla_${base}.txt`, salida, (err) => {
            if (err) throw err; 

            console.log(`Tabla_${base} creado!`)
        });
        */

        // writeFileSync
        fs.writeFileSync(`./salida_de_archivos/Tabla_${base}.txt`, salida);
        
        return `Tabla_${base}.txt`;
        
    }catch(err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
};
