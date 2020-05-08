const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite) => {
    console.log('========================'.green);
    console.log(`=======TABLA DEL ${base}=====`.blue);
    console.log('========================'.green);
    for (let x = 1; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base * x}`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado "${base}" no es un número`)
            return
        }

        let data = `Tabla del ${base} hasta el ${limite}\n`

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
        fs.writeFile(`tables/tabla-${base}-limite${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-limite${limite}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}