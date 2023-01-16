module.exports = {
    devServer: {
        // https: true,
        // host: 'integrator.bondowosokab.go.id',
        host: '172.18.2.218',
        // host: 'localhost',
        port: 8080,
        // proxy: {
        // '^/api/': {
        //     target: 'http://localhost/curl.php',
        //     changeOrigin: true, // so CORS doesn't bite us. 
        // }
        // }
    },
    "transpileDependencies": [
        "vuetify"
    ],
    publicPath: '/'
}