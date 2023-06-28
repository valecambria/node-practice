const path = require('path'); //para encontrar o gestionar archivos dentro del proyecto
const nodeExternals = require('webpack-node-externals'); //para hacer la transpilacion

module.exports = {
    mode: 'development',
    entry: {
        'index': './index.ts'
    },  //punto de entrada de nuestro proyecto
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    }, //donde quiero que se aloje el resultado de la transpilacion y la build de produccion
    target: 'node',
    module: { //Que tipos de archivos queremos que se transpilen y se tengan en cuenta dentro de la build
        rules: [
            {
                test: /\.tsx?$/,  //* Todos los archivos que tengan algun tipo de sintaxis el dolar al final es para todos los archivos que sean de tipo ts o tsx
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.ts' //estos son los archivos que queremos que resuelva para hacer la build
        ]
    }, //para decir que tipo de archivos queremos que se resuelvan 
    externals: [nodeExternals()]
}

