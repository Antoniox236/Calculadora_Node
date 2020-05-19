const fs = require('fs');


crearTabla = (base, limite) => {

    return new Promise((reject, resolve) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Solo se aceptan numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${i*base}`);
        }

    })

}

crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El numero introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablas/tabla${base}.txt`)
        });
    });
}

module.exports = { crearArchivo, crearTabla };