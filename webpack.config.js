const path = require("path"); // Modulo para identificar donde esta una carperta en particular.
const HtmlWebpackPlugin = require("html-webpack-plugin") // Modulo que nos permite mover un archivo HTML a otro lugar con ciertas configuraciones.

module.exports = {
    entry: "./src/index.js", // Punto de entrada de la aplicación.

    output: {
        path: path.resolve(__dirname, "dist"), // dist es el nombre de la carpeta que se creará para mandar a producción.
        filename: "bundle.js", // Nombre al archivo compilado (para producción).
    }, // Lugar donde se va a guardar toda la información cuando se manda a producción.

    resolve: {
        extensions: ["*", ".msj", ".js", ".svelte"], // Extensiones que se usarán en el proyecto.
    }, // resolve de las extensiones y elementos que necesita webpack entender del proyecto.

    module: {
        rules: [
            // 1ra regla para trabajar con babel
            {
                test: /\.js?$/, // Identificar cuales van a ser los archivos con los que vamos a trabajar.
                exclude: /node_modules/, // Excluyendo node_modules
                use: {
                    loader: "babel-loader",
                }, // Usando el loader instalado de babel
            },
            // 2da regla para trabajar con svelte
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: "svelte-loader",
                }
            }
        ]
    }, // module es donde vienen las reglas y configuraciones del proyecto.

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html", // Añadiendo el template.
            filename: "./index.html", // Archivo resultante.
        }),
    ], // Plugins que se usarán en el proyecto.
}