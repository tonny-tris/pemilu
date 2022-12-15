module.exports = {
    devServer: {
        https: true,
        host: 'integrator.bondowosokab.go.id',
        // host: '192.168.8.111',
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